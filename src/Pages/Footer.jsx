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

                {/* <div class="text-center lg:text-left">
            <h5 class="text-2xl font-medium text-white">Request a Demo</h5>

            <p
              class="max-w-md mx-auto mt-4 text-sm leading-relaxed text-gray-400 lg:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, harum deserunt nesciunt praesentium, repellendus eum
              perspiciatis ratione pariatur a aperiam eius numquam doloribus
              asperiores sunt.
            </p>
          </div> */}

                {/* <form class="mt-6">
            <div class="relative max-w-lg mx-auto lg:mx-0">
              <label class="sr-only" for="email"> Email </label>

              <input
                class="w-full py-4 pl-3 pr-16 text-sm text-white bg-gray-800 border-none rounded-md"
                id="email"
                type="email"
                placeholder="Enter your email"
              />

              <button
                class="absolute p-3 transition -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white rounded top-1/2 right-1.5"
                type="button"
              >
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
          </form> */}

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
                          placeholder="Enter email"
                        />

                        <span class="absolute inset-y-0 inline-flex items-center right-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                            />
                          </svg>
                        </span>
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
                          placeholder="Mensaje"
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
                  <p class="text-lg font-medium text-white">Navega</p>

                  <nav class="mt-4">
                    <ul class="space-y-1.5 text-sm">





                    {links.map(({ id, link, style }) => (
          <li
            key={id}
            className={`transition hover:text-black/75 ${style}`}
            
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
                  <p class="text-lg font-medium text-white">Services</p>

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
