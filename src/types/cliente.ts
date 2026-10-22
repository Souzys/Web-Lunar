export interface ProcedimentoItem {
  id: string;
  icone?: string;
  titulo: string;
  subCurto?: string;
  descricao: string;
  tempoEstimado: string;
  ancoraValor: string;
  destaque: string;
}

export interface AntesDepoisItem {
  titulo: string;
  descricao: string;
  tag: string;
  imagemAntes: string;
  imagemDepois: string;
}

export interface DepoimentoItem {
  nome: string;
  bairro: string;
  procedimento: string;
  texto: string;
  tempo: string;
}

export interface FaqItem {
  pergunta: string;
  resposta: string;
}

export interface ClienteData {
  nomeClinica: string;
  slogan: string;
  cidadeBairro: string;
  enderecoCompleto: string;
  whatsappNumero: string;
  telefoneExibicao: string;
  logoUrl?: string;
  imagemHero?: string;
  instagramUrl?: string;
  instagramHandle?: string;
  croResponsavel: string;
  anosExperiencia: string;
  pacientesAtendidos: string;
  notaGoogle: string;
  totalAvaliacoesGoogle: string;
  vagasSemana: number;
  horarioAtendimento: {
    abertura: number;
    fechamento: number;
    texto: string;
  };
  linksMapas: {
    googleMaps: string;
    waze: string;
  };
  hero: {
    badge: string;
    tituloPrincipal: string;
    subtitulo: string;
    ctaTexto: string;
  };
  procedimentos: ProcedimentoItem[];
  antesDepois: AntesDepoisItem[];
  depoimentos: DepoimentoItem[];
  faq: FaqItem[];
}
