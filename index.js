import { Persona } from "./utils.js";
const reader = () => {
  const personas = [
    {
      nombre: "laura",
      apellido: "gonzalez",
      edad: 25,
    },
    {
      nombre: "pedro",
      apellido: "sanchez",
      edad: 30,
    },
  ];
  const body = document.querySelector("body");
  for (const persona of personas) {
    const instanciaPersona = new Persona(
      persona.nombre,
      persona.apellido,
      persona.edad
    );

    const nodoPersona = instanciaPersona.render();
    body.appendChild(nodoPersona);
    instanciaPersona.addEventListeners();
  }
};


document.addEventListener("DOMContentLoaded", reader);
