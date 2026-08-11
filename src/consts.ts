// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Header, Footer, About, Project } from "./types.ts";

import ProfilePic from "./assets/profile-pic.jpg";

import PenweaveImage from "./assets/projects/penweave.png";
import MGUScraperImage from "./assets/projects/mguscraper.png";
import FlashifyImage from "./assets/projects/flashify.png";
import WeatherifyImage from "./assets/projects/weatherify.png";
import BriefImage from "./assets/projects/brief.svg";
import DefuseImage from "./assets/projects/defuse.svg";
import LipiImage from "./assets/projects/lipi.svg";
import ExchangeImage from "./assets/projects/exchange.svg";
import PlaceholderImage from "./assets/projects/placeholder.svg";

export const SITE_URL: string = "https://lauracamt.github.io";

export const ENABLE_STARDUST_BG: boolean = false;

export const meta = {
  about: {
    // index page
    title: "Laura Camila Torres",
    description:
      "Hola, soy Laura Camila Torres. Bienvenida/o a mi portafolio profesional.",
  },
  projects: {
    title: "Proyectos | Laura Camila Torres",
    description:
      "Aquí presento algunos de los proyectos y soluciones técnicas en las que he trabajado.",
  },
  blog: {
    title: "Blog | Laura Camila Torres",
    description:
      "Un espacio donde comparto mis aprendizajes y reflexiones sobre ingeniería de sistemas y análisis de requerimientos.",
  },
  // blog post title and description are taken from the variables in markdown file
};

export const header: Header = { logoTitle: "LC" };

export const footer: Footer = {
  // parses html
  content:
    "Hecho con ❤️ por Laura Camila Torres • <a href='https://github.com/LauraCamT' class='link'>GitHub</a>",
};

export const about: About = {
  // parses html
  headLine:
    "Hola, Soy <span class='fancy-highlight font-black'>Laura Camila Torres</span>",
  tagLine: "Analista de Requerimientos / Estudiante de Ingeniería de Sistemas",
  profilePic: ProfilePic,
  // parses html
  description:
    "Estudiante de 5.° semestre de <u>Ingeniería de Sistemas</u> y apasionada por transformar necesidades de negocio en soluciones claras. Actualmente me desempeño como <u>Analista de Requerimientos</u>, enfocada en el levantamiento, análisis y modelado de procesos, además de trabajar con especificaciones técnicas e historias de usuario para CRM COEM. Fuera del ámbito académico, busco constantemente aprender y mejorar en áreas que potencien mi perfil integral con el fin de aplicar el conocimiento en el ámbito laboral y crecer profesionalmente.",
  links: [
    // Lucide icons
    { icon: "Github", href: "https://github.com/LauraCamT/" },
    { icon: "Linkedin", href: "https://www.linkedin.com/" }, // Actualiza con tu URL
    { icon: "Youtube", href: "https://www.youtube.com/" }, // Actualiza con tu URL
  ],
  resumeHref:
    "#", // Coloca aquí el link a tu hoja de vida
  workExperience: [
    {
      title: "Analista de Requerimientos",
      timeline: "Actualidad",
      company: "CRM COEM • Colombia",
      description:
        "Levantamiento, análisis y modelado de procesos, gestión de historias de usuario y especificaciones técnicas para CRM.",
    },
  ],
  education: [
    {
      title: "Ingeniería de Sistemas",
      timeline: "5.° Semestre",
      institution: "Universidad el Bosque • Colombia",
      description:
        "Formación académica centrada en modelado de procesos, gestión de requisitos y fundamentos de ingeniería de software.",
    },
  ],
  // parses html
  getInTouch:
    "Si deseas contactarme, escríbeme a <a href='mailto:tu-correo@ejemplo.com' class='primary-underline'>tu-correo@ejemplo.com</a> o conectemos a través de mis redes sociales.",
};

export const projects: Project[] = [
  // Puedes dejar los proyectos de ejemplo o reemplazarlos por los tuyos siguiendo esta estructura
  {
    logoImage: PlaceholderImage,
    title: "Proyecto CRM COEM",
    techs: ["CRM", "Modelado de Procesos", "Historias de Usuario"],
    description:
      "Trabajo actual en levantamiento de requerimientos y especificaciones técnicas para optimización del sistema CRM.",
    sourceHref: "#",
    liveHref: "#",
  },
];

// add blog articles in /src/content/blog