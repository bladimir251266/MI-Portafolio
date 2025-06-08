// Obtener el contenedor de proyectos y el primer elemento <aside> del documento
const proyectosContainer = document.getElementById("proyectosContainer");
const aside = document.getElementsByTagName("aside")[0];

// Función para generar una lista de tecnologías en formato HTML
const getTecnologias = (tecnologias) => {
  let res = "";
  tecnologias.forEach((tecnologia) => {
    res += `<span class='tecnologia'>${tecnologia}</span> `;
  });
  return res;
};

// Función para crear la representación HTML de un proyecto
const getProyecto = (proyecto) => `
  <img src='img/proyectos/${proyecto.imagen}' alt='${
  proyecto.titulo
}' loading="lazy">
  <div>
    <h3>${proyecto.titulo}</h3>
    <p>${proyecto.descripcion}</p>
    <p><strong>Fecha de creación:</strong> ${proyecto.fecha}</p>
    <p>Tecnologías: ${getTecnologias(proyecto.tecnologias)}</p>
  </div>
  <a ${
    proyecto.link ? "href=" + proyecto.link : "class=disabled"
  } target="_blank">Ver proyecto</a>
`;

// Función para crear y añadir la presentación personal al <aside>
const makePresentacion = () => {
  const nuevaPresentación = document.createElement("div");
  nuevaPresentación.classList = "presentacion";

  // Añadir la imagen personal
  nuevaPresentación.innerHTML += `
    <img src="${informacionPersonal.imagen}">`;

  // Añadir otros datos personales
  informacionPersonal.otros.forEach((dato) => {
    nuevaPresentación.innerHTML += `
    <div>
      <span>${dato[0]}:</span>
      <span>${dato[1]}</span>
    </div>
    `;
  });

  // Añadir la nueva presentación al <aside>
  aside.appendChild(nuevaPresentación);
};

// Función para crear y añadir la sección de idiomas al <aside>
const makeIdiomas = () => {
  const nuevoIdiomas = document.createElement("div");
  nuevoIdiomas.classList = "idiomas";

  // Añadir cada idioma y su nivel
  informacionPersonal.idiomas.forEach((dato) => {
    nuevoIdiomas.innerHTML += `
    <div>
      <span>${dato[0]}:</span>
      <span>${dato[1]}</span>
    </div>
    `;
  });

  // Añadir la nueva sección de idiomas al <aside>
  aside.appendChild(nuevoIdiomas);
};

// Función para crear y añadir la sección de tecnologías al <aside>
const makeTecnologias = () => {
  const nuevoTecnologias = document.createElement("div");
  nuevoTecnologias.id = "tecnologias";

  // Añadir cada tecnología y su nivel de habilidad
  informacionPersonal.tecnologias.forEach((dato) => {
    nuevoTecnologias.innerHTML += `
    <div>
      <span>${dato[0]}</span>
      <span>${dato[1]}</span>
    </div>
    <progress max="10" value="${dato[1]}"></progress>
    `;
  });

  // Añadir la nueva sección de tecnologías al <aside>
  aside.appendChild(nuevoTecnologias);
};

// Función para crear y añadir la sección de redes sociales al <aside>
const makeRedes = () => {
  const nuevoRedes = document.createElement("div");
  nuevoRedes.id = "redes";

  // Añadir cada red social con su enlace e icono
  informacionPersonal.redes.forEach((dato) => {
    if (dato[1] !== "") {
      // Verificar que el enlace no esté vacío
      nuevoRedes.innerHTML += `
      <a href=${dato[1]} target="_blank">
        <img src=${getIconoRed(dato[0])} alt="${dato[0]} icono">
      </a>
      `;
    }
  });

  // Añadir la nueva sección de redes sociales al <aside>
  aside.appendChild(nuevoRedes);
};

// Función para obtener la ruta del icono de la red social
const getIconoRed = (red) => {
  const urlBase = "img/iconos/";
  switch (red) {
    case "instagram":
      return urlBase + "instagram.svg";
    case "linkedin":
      return urlBase + "linkedin.svg";
    case "facebook":
      return urlBase + "square-facebook.svg";
    case "twitter":
      return urlBase + "twitter.svg";
    case "youtube":
      return urlBase + "youtube.svg";
    case "github":
      return urlBase + "github.svg";
    default:
      return urlBase + "globe-solid.svg"; // Icono por defecto
  }
};

// Ejecución: Iterar sobre cada proyecto y añadirlo al contenedor de proyectos
proyectos.forEach((proyecto) => {
  const nuevoProyecto = document.createElement("div");
  nuevoProyecto.classList = "proyecto tarjeta"; // Clase para estilo
  nuevoProyecto.innerHTML = getProyecto(proyecto); // Obtener el HTML del proyecto
  proyectosContainer.appendChild(nuevoProyecto); // Añadir el proyecto al contenedor
});

// Llamar a las funciones para construir las secciones de la página
makePresentacion();
makeIdiomas();
makeTecnologias();
makeRedes();
