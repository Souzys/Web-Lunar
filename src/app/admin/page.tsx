"use client";

import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { trpc } from "@/utils/trpc";
import { useAudio } from "@/hooks/useAudio";
import { 
  Plus, 
  Trash2, 
  Mail, 
  LogOut, 
  Check, 
  FolderPlus, 
  Loader2,
  FileText
} from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { playHover, playClick } = useAudio();

  // tRPC Queries & Mutations
  const { data: messages, refetch: refetchMessages } = trpc.getMessages.useQuery(undefined, {
    enabled: status === "authenticated",
  });
  const { data: projects, refetch: refetchProjects } = trpc.getProjects.useQuery();

  const createProjectMutation = trpc.createProject.useMutation({
    onSuccess: () => {
      refetchProjects();
      setNewProject({
        title: "",
        description: "",
        content: "",
        image: "",
        liveUrl: "",
        githubUrl: "",
        tagsString: "",
        category: "SaaS",
        featured: false,
      });
    },
  });

  const deleteProjectMutation = trpc.deleteProject.useMutation({
    onSuccess: () => refetchProjects(),
  });

  const markReadMutation = trpc.markMessageRead.useMutation({
    onSuccess: () => refetchMessages(),
  });

  // Project state
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    liveUrl: "",
    githubUrl: "",
    tagsString: "",
    category: "SaaS",
    featured: false,
  });

  if (status === "loading") {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#030307]">
        <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#030307] gap-4">
        <p className="text-neutral-400 text-sm">Acesso não autorizado.</p>
        <button
          onClick={() => {
            playClick();
            router.push("/admin/login");
          }}
          className="px-6 py-2 rounded-full bg-white text-black font-semibold text-xs"
        >
          Ir para Login
        </button>
      </div>
    );
  }

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    const tags = newProject.tagsString
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    createProjectMutation.mutate({
      title: newProject.title,
      description: newProject.description,
      content: newProject.content || undefined,
      image: newProject.image,
      liveUrl: newProject.liveUrl || undefined,
      githubUrl: newProject.githubUrl || undefined,
      category: newProject.category,
      featured: newProject.featured,
      tags,
    });
  };

  const handleLogout = () => {
    playClick();
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen w-full bg-[#030307] py-28 px-6 max-w-[1440px] mx-auto z-10">
      <div className="flex items-center justify-between mb-12 border-b border-white/[0.05] pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Painel Admin</h1>
          <p className="text-neutral-400 text-xs mt-1">Conectado como {session?.user?.email}</p>
        </div>

        <button
          onClick={handleLogout}
          onMouseEnter={playHover}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/20 bg-rose-500/5 text-rose-400 text-xs font-semibold hover:bg-rose-500/10 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sair</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Messages list */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="glow-card p-6">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Mail className="w-5 h-5 text-indigo-400" />
              <span>Mensagens Recebidas</span>
            </h2>

            <div className="flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-2">
              {messages && messages.length > 0 ? (
                messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`p-4 rounded-lg border transition-all ${
                      msg.read 
                        ? "bg-white/[0.01] border-white/[0.03]" 
                        : "bg-indigo-500/[0.02] border-indigo-500/20"
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white">{msg.name}</span>
                          <span className="text-xs text-neutral-500">({msg.email})</span>
                        </div>
                        <p className="text-xs text-indigo-300 mt-1">{msg.subject || "Sem Assunto"}</p>
                      </div>

                      {!msg.read && (
                        <button
                          onClick={() => {
                            playClick();
                            markReadMutation.mutate({ id: msg.id });
                          }}
                          className="p-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/20"
                          title="Marcar como lida"
                        >
                          <Check className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                    <p className="text-xs text-neutral-400 font-light mt-3 leading-relaxed bg-white/[0.01] p-3 rounded border border-white/[0.03]">
                      {msg.content}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-xs text-neutral-500 text-center py-10">Nenhuma mensagem recebida ainda.</p>
              )}
            </div>
          </div>

          {/* Project List */}
          <div className="glow-card p-6">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-400" />
              <span>Projetos Cadastrados</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects && projects.length > 0 ? (
                projects.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-lg bg-white/[0.01] border border-white/[0.05] flex justify-between items-center gap-4">
                    <div>
                      <h4 className="text-sm font-bold text-white">{proj.title}</h4>
                      <p className="text-[10px] uppercase font-semibold tracking-wider text-indigo-400 mt-1">{proj.category}</p>
                    </div>
                    <button
                      onClick={() => {
                        playClick();
                        if(confirm("Excluir este projeto?")) {
                          deleteProjectMutation.mutate({ id: proj.id });
                        }
                      }}
                      className="p-2 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500/20 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-xs text-neutral-500 py-6 col-span-2 text-center">Nenhum projeto no banco. Mostrando padrões na landing page.</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Add project form */}
        <div className="glow-card p-6 h-fit">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <FolderPlus className="w-5 h-5 text-indigo-400" />
            <span>Cadastrar Projeto</span>
          </h2>

          <form onSubmit={handleCreateProject} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Título</label>
              <input
                type="text"
                required
                value={newProject.title}
                onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                placeholder="Ex: Orbit Design System"
                className="px-3 py-2 rounded bg-white/[0.02] border border-white/10 text-white placeholder-neutral-700 text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Descrição Curta</label>
              <input
                type="text"
                required
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                placeholder="Descrição curta para o card..."
                className="px-3 py-2 rounded bg-white/[0.02] border border-white/10 text-white placeholder-neutral-700 text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">URL da Imagem</label>
              <input
                type="text"
                required
                value={newProject.image}
                onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                placeholder="https://images.unsplash.com/..."
                className="px-3 py-2 rounded bg-white/[0.02] border border-white/10 text-white placeholder-neutral-700 text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Categoria</label>
                <select
                  value={newProject.category}
                  onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                  className="px-3 py-2 rounded bg-[#0a0a14] border border-white/10 text-white text-xs focus:outline-none focus:border-indigo-500"
                >
                  <option value="SaaS">SaaS</option>
                  <option value="3D Web">3D Web</option>
                  <option value="UI/UX">UI/UX</option>
                </select>
              </div>

              <div className="flex items-center gap-2 mt-6">
                <input
                  type="checkbox"
                  id="featured"
                  checked={newProject.featured}
                  onChange={(e) => setNewProject({ ...newProject, featured: e.target.checked })}
                  className="rounded bg-white/[0.02] border-white/10 text-indigo-600 focus:ring-0 focus:ring-offset-0"
                />
                <label htmlFor="featured" className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider cursor-pointer">Destaque</label>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Tags (Separadas por vírgula)</label>
              <input
                type="text"
                value={newProject.tagsString}
                onChange={(e) => setNewProject({ ...newProject, tagsString: e.target.value })}
                placeholder="Next.js, Three.js, Tailwind"
                className="px-3 py-2 rounded bg-white/[0.02] border border-white/10 text-white placeholder-neutral-700 text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">URL do Projeto</label>
              <input
                type="text"
                value={newProject.liveUrl}
                onChange={(e) => setNewProject({ ...newProject, liveUrl: e.target.value })}
                placeholder="https://..."
                className="px-3 py-2 rounded bg-white/[0.02] border border-white/10 text-white placeholder-neutral-700 text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">URL do GitHub (Opcional)</label>
              <input
                type="text"
                value={newProject.githubUrl}
                onChange={(e) => setNewProject({ ...newProject, githubUrl: e.target.value })}
                placeholder="https://github.com/..."
                className="px-3 py-2 rounded bg-white/[0.02] border border-white/10 text-white placeholder-neutral-700 text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              disabled={createProjectMutation.isPending}
              onMouseEnter={playHover}
              className="mt-4 flex items-center justify-center gap-1.5 py-3 text-xs font-bold tracking-wider uppercase rounded bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-50 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Salvar Projeto</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
