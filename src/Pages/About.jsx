import React from "react";

const About = () => {
  return (
    <div
      name="Sobre Mi"
      className="h-screen bg-gradient-to-b from-white to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2 ">
          <p className=" text-black text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre Mi 😎
          </p>
        </div>
        <p className="text-xl mt-20">
          Ingeniero de Sistemas y Desarrollador Front-End con un trasfondo en ingeniería de software. Apasionado por la creación de experiencias digitales impactantes. Poseo habilidades en el desarrollo Front-End utilizando tecnologías como React_JS, con un año de experiencia laboral en proyectos multidisciplinarios. Amplié mi formación con un diplomado en React_JS y cuento con conocimientos en Back-End (Java, PHP - Laravel). Comprometido con la excelencia técnica y orientado a resultados, estoy preparado para enfrentar desafíos complejos y contribuir al éxito de equipos ágiles.{" "}
        </p>
        <br />
        {/* <p className="text-xl ">
        Manejo tecnologias front-end y back-end como ReactJS, MySQL y Laravel entre otros, además de habilidades basicas de diseño y optimizacion de SEO, con otras habilidades nesesarias para construir una aplicacion o sitio web que sea funcional -.
        </p> */}
      </div>
    </div>
  );
};

export default About;
