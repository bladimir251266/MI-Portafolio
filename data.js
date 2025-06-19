
const proyectos = [
  {
    titulo: "Conector Facebook Ads → Engage CRM",
    descripcion:
      "Servicio web que permite sincronizar los leads de una campaña de marketing de Facebook Ads con un CRM llamado Engage.",
    link: "",
    fecha: "01/08/2023",
    imagen: "NDA.png",
    tecnologias: ["HTML", "CSS", "Javascript"],
  },
  {
    titulo: "Automatización de subida de videos a YouTube",
    descripcion:
      "Script en Python, que junto al script de creación de videos, me permite crear y subir a internet alrededor de 20 videos por hora de trabajo.",
    fecha: "08/02/2023",
    imagen: "python.png",
    tecnologias: ["Python"],
  },
  {
    titulo: "Sistema de control de versiones de archivos",
    descripcion:
      "Git lleva un historial de los cambios realizados en un proyecto, creando instantáneas de los archivos en cada momento.",
    link: "https://github.com/bladimir251266/Desarrollo-Web-Full-Stack---B-sico---Talento-Tech",
    fecha: "06/06/2025",
    imagen: "git.png",
    tecnologias: ["HTML", "CSS", "Javascript", "C++", "Java", "C#", "PHP", "NodeJs", "Angular", "Ionic", "React", "VueJs", "Python", "Typescript"],
  },
  {
    titulo: "Conector Wordpress Contact Form → Engage CRM",
    descripcion:
      "Plugin para wordpress que conecta los datos de un formulario de registro con los leads de Engage CRM",
    link: "",
    fecha: "01/08/2022",
    imagen: "NDA.png",
    tecnologias: ["PHP"],
  },
  {
    titulo: "Servidor Backend construido con Node.js y Express.js",
    descripcion:
      "construido con Node.js y Express.js, que se encarga de manejar las solicitudes HTTP y comunicarse con una base de datos MySQL para gestionar clientes.",
    link: "https://github.com/bladimir251266/full-stack-basico",
    fecha: "19/06/2025",
    imagen: "regclientes.png",
    tecnologias: ["HTML", "CSS", "Javascript", "NodeJs", "Express.js", "MySQL"],
  },
  {
    titulo: "Página web Freelance",
    descripcion:
      "Página web Freelance. Front y Back completos hechos por mí.",
    link: "https://freelancer-sigma.vercel.app/",
    fecha: "01/01/2022",
    imagen: "free.png",
    tecnologias: ["HTML", "CSS", "SCSS", "NodeJs"],
  },
];

// Ordenar automáticamente los proyectos por fecha (cronológicamente)
proyectos.sort((a, b) => new Date(a.fecha.split('/').reverse().join('-')) - new Date(b.fecha.split('/').reverse().join('-')));

const informacionPersonal = {
  nombre: "Bladimir Andrade",
  subtitulo: "Desarrollador web",
  imagen: "img/pope.png",
  otros: [
    ["Titulo", "Ingeniero de Sistemas"],
    [
      "Nacionalidad","Colombiano",
      /*"Edad",
      new Date(new Date() - new Date("1966/12/25")).getFullYear() - 1970 +
        " años",*/
    ],
  ],
  idiomas: [
    ["Español", "Nativo"],
    ["Inglés", "Basico"],
  ],
  tecnologias: [
    ["Html", 6],
    ["Css", 6],
    ["Javascript", 6],
    ["Typescript", 0],
    ["Angular", 0],
    ["Ionic", 0],
    ["Node", 6],
    ["Python", 5],
    ["C++", 3],
    ["Git", 3],
  ],
  redes: [
    ["github", "https://"],
    ["linkedin", "https://"],
    ["youtube", "https://"],
    ["instagram", "https://"],
    ["twitter", "https://"],
    ["whatsapp", "https://"],
  ],
};
