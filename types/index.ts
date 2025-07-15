// Tipos para o formulário de contato
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Tipos para links sociais
export interface SocialLink {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}

// Tipos para experiência profissional
export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  logo: string;
  fallback: string;
}

// Tipos para formação acadêmica
export interface Education {
  id: string;
  institution: string;
  course: string;
  period: string;
  logo: string;
  fallback: string;
}

// Tipos para tecnologias
export interface Technology {
  name: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
}

// Tipos para seções da página
export interface Section {
  id: string;
  title: string;
  component: React.ComponentType;
}

// Tipos para dados pessoais
export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  experience: number;
  description: string;
  education: string;
}
