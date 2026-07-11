"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useAudio } from "@/hooks/useAudio";
import { Loader2, Lock } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const { playHover, playClick } = useAudio();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setErrorMsg("Credenciais inválidas. Tente novamente.");
      } else {
        router.push("/admin");
        router.refresh();
      }
    } catch (e) {
      setErrorMsg("Ocorreu um erro no servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#030307] px-6 relative z-10">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient(circle at center, rgba(99, 102, 241, 0.05) 0%, transparent 70%) pointer-events-none" />

      <div className="w-full max-w-md glow-card p-8 md:p-10">
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
            <Lock className="w-5 h-5 text-indigo-400" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Admin Lunar</h1>
          <p className="text-neutral-400 text-xs mt-1">Conecte-se para gerenciar o portfólio</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">
              E-mail Administrativo
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@weblunar.co"
              className="px-4 py-3 rounded-lg bg-white/[0.02] border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">
              Senha
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="px-4 py-3 rounded-lg bg-white/[0.02] border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm"
            />
          </div>

          {errorMsg && (
            <span className="text-xs text-rose-400 font-semibold">{errorMsg}</span>
          )}

          <button
            type="submit"
            disabled={loading}
            onMouseEnter={playHover}
            className="mt-2 flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold tracking-wider uppercase rounded-full bg-white text-black hover:bg-neutral-200 disabled:opacity-50 transition-all duration-300"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Autenticando...</span>
              </>
            ) : (
              <span>Entrar no Painel</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
