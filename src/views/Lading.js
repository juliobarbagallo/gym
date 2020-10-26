import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";

export default function Landing() {
  
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false, 
    });
    AOS.refresh();
  });
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "95vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-top bg-cover"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
                
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto" data-aos="fade-in">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div >
                    <h1 className="text-white font-semibold text-5xl">
                    Entrenamiento<span className="text-green-500">personalizado</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                      Mi nombre es John, John Rambo.
                      A continuacion te muestro mi landing page de presentacion,
                      donde podras encontrar informacion sobre mi,
                      mi forma de entrenar, rutinas y como contactarme.
                    </p>
                  </div>
                </div>

              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        

        <section className="relative py-20 bg-black text-white">
          

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4" data-aos="fade-right">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1583500178450-e59e4309b57d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4" data-aos="fade-left">
                <div className="md:pr-12">
                  
                  <small className="text-green-500">Sobre mi</small>
                  <h3 className="text-4xl uppercase font-bold">
                    Entrenamiento seguro.
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempore ullam nulla qui quasi neque. Eaque corrupti ea in fugiat iure vitae ex iusto perspiciatis magni maiores, alias autem nostrum.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="font-semibold inline-block py-3 mr-3 text-green-500">
                            <i className="fas fa-dumbbell fa-2x"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl">
                            Ultimos elementos de entrenamiento
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="font-semibold inline-block py-3 mr-3 text-green-500">
                            <i className="fas fa-user fa-2x"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl">
                            Rutinas personalizadas
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="font-semibold inline-block py-3 mr-3 text-green-500">
                            <i className="fas fa-users fa-2x"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl">
                            Entrenamientos grupales
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold uppercase">
                  Alguna de mis rutinas
                </h2>
                <p className="text-lg leading-relaxed m-4">
                  Las rutinas varian en base a los objetivos planificados
                  y se pueden combinar segun el camino seleccionado.
                </p>
              </div>
            </div>
            {/* rutinas */}
            <div className="flex flex-wrap">
              {/* rutina 1 */}
              <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
                <div className="px-6">
                  {/* <img
                    alt="..."
                    src={require("assets/img/team-1-800x800.jpg")}
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "250px" }}
                  /> */}
                  <img
                  alt="..."
                  className="shadow-lg rounded max-w-full mx-auto"
                  src="https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
                  style={{ maxWidth: "250px" }}
                />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Cardio
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      bla blsjhadfuf fhuwhfuw uwhfuwhfu hfuewhfuh jfddaosufifh
                      isaidid fiefwe jfewifjwihfeif ijfif
                      ijfiewfijew fweifjiewjfijewifj fweifjiewjfijewifjjfijewif
                      fiewjfiewjifjweifj wdewfj
                    </p>
                    
                  </div>
                </div>
              </div>
              {/* rutina 2 */}
              <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
                <div className="px-6">
                  {/* <img
                    alt="..."
                    src={require("assets/img/team-2-800x800.jpg")}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  /> */}
                  <img
                  alt="..."
                  className="shadow-lg rounded max-w-full mx-auto"
                  src="https://images.unsplash.com/photo-1517964603305-11c0f6f66012?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                  style={{ maxWidth: "250px" }}
                />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Musculacion
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      dwefdjew idfjewijdiewf fheufhuewf duewjifjoewjf
                      jfiewjff jiewjifjw jiewjif jewijdiewjdiv jfewfof
                      jiewjfiew jewoijfewjf
                      jfiewjfiewf jewidjewifdjewif ijwifdjwijfi jewifjw
                    </p>
                    
                  </div>
                </div>
              </div>
              {/* rutina 3 */}
              <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
                <div className="px-6">
                  {/* <img
                    alt="..."
                    src={require("assets/img/team-3-800x800.jpg")}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  /> */}
                  <img
                  alt="..."
                  className="shadow-lg rounded max-w-full mx-auto"
                  src="https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80"
                  style={{ maxWidth: "250px" }}
                />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Focalizada
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      zarasas hsuahushas hduhdad sdashduahsc cahsi
                      ijdsaijdisa jdisajdisa
                      jsaijdijdsijsaidj isajdijdsi isajdijadid
                      jdijsaidjia jdijsadia
                    </p>
                    
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-black text-white">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 pb-20 pt-20">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white uppercase">
                  Ponete en contacto
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4">
                  Ponete en contacto por cualquier consulta o duda que tengas.
                  Tambien podes consultar por dietas, rutinas y turnos.
                </p>
              </div>
            </div>
           
          </div>
        </section>
        {/* contact form */}
        <section className="relative block py-24 lg:pt-0 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300" data-aos="fade-up-right">
                  <div className="flex-auto p-5 lg:p-10 bg-green-500 text-white">
                    <h4 className="text-2xl font-semibold">
                      Trabajamos juntos?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 ">
                      Completa el formulario y me voy a estar comunicando con vos.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Tu nombre completo"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Mensaje
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Escribime tu mensaje..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
