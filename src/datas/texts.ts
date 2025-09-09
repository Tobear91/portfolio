import {
  faDisplay,
  faServer,
  faCode,
  faWrench,
  faCodeBranch,
  faTableColumns,
  faRepublican,
  faS,
  faE,
  faJ,
  faN,
  faV,
  faDatabase,
  faLeaf,
  faPalette,
  faBolt,
  faPaintRoller,
  faHexagon,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

export const presentation = {
  avatar: "/camille_hurtaud.jpeg",
  title: "Camille Hurtaud",
  subtitle: "Développeur FullStack",
  description:
    "Avec plus de 10 ans d’expérience, je développe des applications complètes alliant APIs performantes, front-end Vue.js moderne et intégrations complexes, pour transformer des besoins métiers en solutions digitales fiables.",
  button1: "Travaillons ensemble !",
  button2: "Mes projets",
};

export const skills = {
  title: "Mon expertise",
  description: "Je transforme des idées en expériences digitales fluides et fiables, alliant interfaces modernes, logique robuste et intégrations sur mesure.",
  blocs: [
    {
      icon: faDisplay,
      title: "Frontend",
      description: "Création d’interfaces web modernes et centrées sur l’utilisateur.",
      skills: [
        { label: "HTML", icon: faCode },
        { label: "Javascript", icon: faJ },
        { label: "Vue.js", icon: faV },
        { label: "Next.js", icon: faN },
        { label: "CSS SASS/SCSS", icon: faPaintRoller },
        { label: "Bootstrap", icon: faPalette },
      ],
    },
    {
      icon: faServer,
      title: "Backend",
      description: "Conception d’architectures serveur scalables et d’APIs fiables.",
      skills: [
        { label: "PHP", icon: faRepublican },
        { label: "Node.js", icon: faHexagon },
        { label: "Slim Framework", icon: faS },
        { label: "Express", icon: faE },
        { label: "API Rest", icon: faGlobe },
        { label: "MySQL", icon: faDatabase },
        { label: "MongoDB", icon: faLeaf },
      ],
    },
    {
      icon: faWrench,
      title: "Outils de développement",
      description: "Utilisation d’outils modernes pour un développement et une collaboration efficaces.",
      skills: [
        { label: "Github", icon: faCodeBranch },
        { label: "VS Code", icon: faCode },
        { label: "Trello", icon: faTableColumns },
        { label: "Vite", icon: faBolt },
        { label: "Vercel", icon: faV },
      ],
    },
  ],
};

export const discuss = {
  title: "Prêt à concrétiser votre projet ?",
  subtitle: "Transformons vos idées en expériences digitales exceptionnelles.",
  button: "Discutons-en",
};

export const projects = {
  title: "Mes projets",
  description: "Projets récents mettant en avant diverses technologies et approches créatives.",
  projects: [
    {
      image: "/logos/universal.png",
      width: "40%",
      title: "Planning interne des sorties musicales",
      description: "Outils collaboratif et planning des sorties musicales",
      skills: ["PHP", "Slim Framework", "Doctrine", "MySQL", "Vue.js", "Axios", "Forest Admin"],
    },
    {
      image: "/music_city.png",
      title: "Music City",
      description: "Ville virtuelle 2D permettant l'accès à des applications musicales",
      skills: ["Next.js", "Express", "MongoDB"],
      github: "https://github.com/Tobear91/music_city",
    },
    {
      image: "/logos/universal.png",
      width: "40%",
      title: "Plateforme ressources Data",
      description: "Application interne à destination des équipes Data",
      skills: ["PHP", "Slim Framework", "Doctrine", "MySQL", "Vue.js", "Axios", "Forest Admin"],
    },
    {
      image: "/logos/universal.png",
      width: "40%",
      title: "Plateforme ressources CRM",
      description: "Application interne à destination des équipes CRM",
      skills: ["Wordpress", "Vue.js", "Axios"],
    },
  ],
};

export const contact = {
  title: "Restons en contact",
  subtitle: "Plusieurs façons de se connecter et de lancer notre collaboration.",
};
