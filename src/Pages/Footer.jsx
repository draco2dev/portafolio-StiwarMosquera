import React from "react";
import imgFoto1 from "../assets/img-logos/logo-nom.png";

// dsplazamiento en la barra de navegacion
import { Link } from "react-scroll";

//arreglo para los link
const links = [
  {
    id: 1,
    link: "Inicio",
    style: "text-white",
  },
  {
    id: 2,
    link: "Sobre Mi",
    style: "text-white",
  },
  {
    id: 3,
    link: "experiencia",
    style: "text-white",
  },
  {
    id: 4,
    link: "portafolio",
    style: "text-white",
  },
  {
    id: 5,
    link: "Contacto",
    style: "text-white",
  },
];

const Footer = () => {
  return (
    <>
      <footer name="Contacto" class="bg-gradient-to-b from-white to-gray-900">
        <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div class="lg:grid lg:grid-cols-2">
            <div class="py-4 border-b border-gray-800 lg:border-b-0 lg:border-l lg:order-last lg:py-24 lg:pl-12">
              <div class="mt-12 space-y-6 lg:mt-0">
                <span class="bg-orange-500 rounded lg:h-1 lg:w-10 lg:block"></span>
                
                <div class="max-w-screen-xl px-4  mx-auto sm:px-6 lg:px-8">
                  <div class="text-center lg:text-left">
                    {/* <div class="max-w-lg mx-auto text-center"> */}
                    <h1 class=" text-2xl font-bold sm:text-3xl">Contacto</h1>

                    <p class="mt-4 text-gray-500">
                      Contactame para mas Informacion
                    </p>
                  </div>

                  <form action="" class="max-w-md mx-auto mt-8 mb-0 space-y-4">
                    <div>
                      <label for="email" class="sr-only">
                        Email
                      </label>
                      <div>
                        <input
                          type="email"
                          class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                          placeholder="Enter email" required
                        />
                      </div>
                    </div>

                    <div>
                      <label for="text" class="sr-only">
                        Mensaje
                      </label>
                      <div>
                        <input
                          type="txt"
                          class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                          placeholder="Mensaje" required
                        />
                      </div>
                    </div>

                    <div class="flex items-center justify-between">
                      <p class="text-sm text-white">
                        Te espero.
                        {/* <a class="underline" href="">Sign up</a> */}
                      </p>

                      <button
                        type="submit"
                        class="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-gradient-to-r from-[#f79729] to-orange-500 cursor-pointer bg-orange-400  hover:bg-orange-500 ease-in-out duration-75 hover:scale-105 rounded-lg"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="pt-16 pb-8 lg:pt-24 lg:pr-12">
              <div class="hidden text-orange-500  lg:flex">
                <img
                  src={imgFoto1}
                  alt="my profile"
                  className="rounded-2xl mx-auto  w-full"
                />
              </div>

              <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-12">
                <div class="text-center lg:text-left">
                  <p class=" cursor-pointer text-lg font-medium text-white">Navega</p>

                  <nav class="mt-4">
                    <ul class="space-y-1.5 text-sm">
                      {links.map(({ id, link, style }) => (
                        <li
                          key={id}
                          className={` cursor-pointer transition hover:text-black/75 ${style}`}
                        >
                          {/* {link} */}
                          <Link to={link} smooth duration={500}>
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                <div class="text-center lg:text-left">
                  <p class=" cursor-pointer text-lg font-medium text-white">Services</p>

                  <nav class="mt-4">
                    <ul class="space-y-1.5 text-sm">
                      <li>
                        <a
                          class="text-white transition hover:text-white/75"
                          href="/"
                        >
                          Web Development
                        </a>
                      </li>

                      <li>
                        <a
                          class="text-white transition hover:text-white/75"
                          href="/"
                        >
                          Web Design
                        </a>
                      </li>

                      <li>
                        <a
                          class="flex group justify-center gap-1.5 lg:justify-start"
                          href="/"
                        >
                          <span class="text-white transition group-hover:text-white/75">
                            Development React
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          class="text-white transition hover:text-white/75"
                          href="/"
                        >
                          Google Ads
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div class="pt-8 mt-16 text-sm text-white border-t border-gray-800 lg:mt-24">
                <p class="mt-4 text-center lg:text-left">
                  &copy; 2022 Stiwar Mosquera • Realizado con ReactJs •
                  Almacenado en GitHub
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
