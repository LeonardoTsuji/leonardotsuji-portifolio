import { Mail, Linkedin, Github } from "lucide-react";
import type {
  SocialLink,
  Experience,
  Education,
  Technology,
  PersonalInfo,
} from "@/types";

// Dados pessoais
export const personalInfo: PersonalInfo = {
  name: "Leonardo Tsuji",
  title: "Desenvolvedor Full Stack",
  email: "leonardo_tsuji@hotmail.com",
  linkedin: "leonardo-tsuji",
  github: "leonardotsuji",
  experience: new Date().getFullYear() - 2019,
  description:
    "Desenvolvedor Full Stack com foco em qualidade, agilidade e boas práticas. Especializado em React e NodeJs.",
  education:
    "Graduado em Análise e Desenvolvimento de Sistemas pela UTFPR e Pós Graduado em Desenvolvimento Web Full Stack pela PUC Minas.",
};

// Links sociais
export const socialLinks: SocialLink[] = [
  {
    href: `mailto:${personalInfo.email}`,
    label: "E-mail",
    icon: Mail,
    title: personalInfo.email,
  },
  {
    href: `https://www.linkedin.com/in/${personalInfo.linkedin}`,
    label: "LinkedIn",
    icon: Linkedin,
    title: personalInfo.linkedin,
  },
  {
    href: `https://github.com/${personalInfo.github}`,
    label: "GitHub",
    icon: Github,
    title: personalInfo.github,
  },
];

// Experiência profissional
export const experiences: Experience[] = [
  {
    id: "trinus",
    company: "Trinus",
    position: "Desenvolvedor Full Stack Senior",
    period: "Novembro 2024 - Atual",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEzoTnAjKeCjQ/company-logo_100_100/B4DZaHfHfBGwAQ-/0/1746029804010/trinus_co_logo?e=1757548800&v=beta&t=7bJVjcCo8BzGVwghxmjijQVxAMpy4IGjk2NyJsylp38",
    fallback: "TR",
  },
  {
    id: "pravaler",
    company: "Pravaler",
    position: "Desenvolvedor Backend",
    period: "Outubro 2023 - Novembro 2024",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFIsGQ01-ejDA/company-logo_100_100/company-logo_100_100/0/1657058546389/pravaler_logo?e=1757548800&v=beta&t=CqSsV8y1aIWccI3HYwARaeqwcvTSDD5S_LI-qNJ-xNE",
    fallback: "PR",
  },
  {
    id: "sotran",
    company: "Sotran",
    position: "Desenvolvedor Full Stack",
    period: "Janeiro 2021 - Agosto 2023",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEISkzNipfx_A/company-logo_100_100/company-logo_100_100/0/1709657248562/tmovmarketplace_logo?e=1757548800&v=beta&t=HlkFMs5Q_VkMt0m4Be_SvEMMFb3n2L2F-4ShQgIQMGc",
    fallback: "SO",
  },
  {
    id: "solus",
    company: "Solus",
    position: "Desenvolvedor Full Stack",
    period: "Outubro 2019 - Janeiro 2021",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQE-zowVreDnoQ/company-logo_100_100/company-logo_100_100/0/1630531078869/solus_computacao_logo?e=1757548800&v=beta&t=c1p-uj8zpYId5_XSvpS8mkscsfXEIFafl3hIErIlUGE",
    fallback: "SO",
  },
  {
    id: "yankton",
    company: "Yankton Technologies",
    position: "Desenvolvedor Full Stack",
    period: "Março 2019 - Agosto 2019",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQEjhLQQTbxo_Q/company-logo_100_100/company-logo_100_100/0/1631344368367?e=1757548800&v=beta&t=TqEKDeqfLoS50YdLivNYYIxd3GFi-4ZxeZwGpZiU5LE",
    fallback: "YA",
  },
];

// Formação acadêmica
export const education: Education[] = [
  {
    id: "puc-minas",
    institution: "PUC Minas",
    course: "Pós Graduação em Desenvolvimento Web Full Stack",
    period: "Setembro 2019 - Junho 2021",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEfW2LgAQzhPA/company-logo_100_100/B4DZbQcOyGHEAU-/0/1747253784151/pucminas_logo?e=1757548800&v=beta&t=XqxgJUmOWNLodS4nwHbq8w9AxJT4vMSP5YtR8xAH5fg",
    fallback: "PU",
  },
  {
    id: "utfpr",
    institution: "Universidade Tecnológica Federal do Paraná",
    course: "Tecnologia em Análise e Desenvolvimento de Sistemas",
    period: "Agosto 2016 - Agosto 2019",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFPijbekmTS1w/company-logo_100_100/B4DZdWP6pcGgAY-/0/1749498702945/utfpr_oficial_logo?e=1757548800&v=beta&t=9kdE0DYBtBwTpRq1CzzjP4Zu2PyXHQijy7ED7XaKXL0",
    fallback: "UT",
  },
];

// Tecnologias
export const technologies: Technology[] = [
  { name: "React", variant: "secondary" },
  { name: "Context API", variant: "secondary" },
  { name: "Redux", variant: "secondary" },
  { name: "TypeScript", variant: "secondary" },
  { name: "Node.js", variant: "secondary" },
  { name: "Express", variant: "secondary" },
  { name: "MongoDB", variant: "secondary" },
  { name: "PostgreSQL", variant: "secondary" },
  { name: "Docker", variant: "secondary" },
  { name: "Next.js", variant: "secondary" },
  { name: "Tailwind CSS", variant: "secondary" },
  { name: "Zod", variant: "secondary" },
];
