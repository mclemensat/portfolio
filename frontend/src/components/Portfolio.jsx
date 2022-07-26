export default function Portfolio() {
  return (
    <>
      <div className="container grid justify-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 mx-auto sm:px-36 lg:px-12 xl:px-44">
        <div className="w-full cursor-pointer">
          <div className="shadow-lg group container rounded-lg bg-white flex justify-center items-center mx-auto content-div">
            <div>
              <a
                href="https://projet1-wcs-bastide.vercel.app/"
                target="_blank"
                className="py-0 px-0"
              >
                <div className="py-2 px-2 lg:w-[350px] xl:w-[450px] bg-white rounded-lg group-hover:opacity-25">
                  <img
                    src="../src/assets/bastide.png"
                    alt="apercu-site-bastide"
                  />
                  {/* <h3 className="mt-2 mb-6 flex justify-center">
                    <img
                      src="../src/assets/logo-bastide.png"
                      alt="logo-bastide"
                      className="w-36 drop-shadow-lg"
                    />{" "}
                  </h3>
                  <ul className="flex flex-col justify-center">
                    <li className="text-center mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#E3A461]">
                      JavaScript
                    </li>
                    <li className="text-center mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#E3A461]">
                      HTML
                    </li>
                    <li className="text-center mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#E3A461]">
                      CSS
                    </li>
                  </ul> */}
                </div>
              </a>
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
              <a
                href="https://projet1-wcs-bastide.vercel.app/"
                target="_blank"
                className="py-0 px-0"
              >
                <p className="text-center">Bastide</p>
                <p className="mb-4 px-8 italic">
                  Site touristique sur le quartier Bastide à Bordeaux
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full cursor-pointer xl:col-span-2 xl:ml-16 xl:mb-2">
          <div className="shadow-lg group container rounded-lg bg-white flex justify-center items-center mx-auto content-div">
            <div>
              <a
                href="https://mealme.bordeaux-1.wilders.dev/"
                target="_blank"
                className="py-0 px-0"
              >
                <div className="py-2 px-2 bg-white rounded-lg group-hover:opacity-25">
                  <img
                    src="../src/assets/mealme.png"
                    alt="apercu-site-mealme"
                  />
                  {/* <h3 className="mt-2 mb-6 flex justify-center">
                    <img
                      src="../src/assets/logo-mealme.png"
                      alt="logo-mealme"
                      className="w-36"
                    />{" "}
                  </h3>
                  <ul className="flex flex-col">
                    <li className="text-center mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#8ddc93]">
                      ReactJS
                    </li>
                    <li className="text-center mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#8ddc93]">
                      NodeJS
                    </li>
                    <li className="text-center mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#8ddc93]">
                      MySQL
                    </li>
                    <li className="text-center mb-24 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#8ddc93]">
                      TailwindCSS
                    </li>
                  </ul> */}
                </div>
              </a>
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
              <a
                href="https://mealme.bordeaux-1.wilders.dev/"
                target="_blank"
                className="py-0 px-0"
              >
                <p className="text-center">MealMe</p>
                <p className="mb-4 px-8 italic">
                  Générateur de recettes de cuisine basé sur les ingrédients
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full cursor-pointer lg:-mt-[50px] xl:-mt-[220px]">
          <div className="group container rounded-md flex justify-center items-center mx-auto content-div">
            <div>
              <a href="" target="_blank" className="py-0 px-0">
                <div className="py-0 px-0 sm:w-[200px] lg:w-[280px] xl:w-[350px] rounded-md group-hover:opacity-25">
                  <img
                    src="../src/assets/greenta.png"
                    alt="apercu-site-greenta"
                  />
                  {/* <h3 className="mt-2 mb-6 flex justify-center">
                    <img
                      src="../src/assets/logo-kk.png"
                      alt="logo-kk"
                      className="w-36 drop-shadow-lg"
                    />{" "}
                  </h3>
                  <ul className="flex flex-col">
                    <li className="text-center mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#58C5D9]">
                      ReactJS
                    </li>
                    <li className="text-center mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#58C5D9]">
                      NodeJS
                    </li>
                    <li className="text-center mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#58C5D9]">
                      MySQL
                    </li>
                    <li className="text-center mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#58C5D9]">
                      TailwindCSS
                    </li>
                  </ul> */}
                </div>
              </a>
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
              <a href="" target="_blank" className="py-0 px-0">
                <p className="text-center">Greenta</p>
                <p className="mb-4 px-8 italic">
                  Hackathon sur le thème de l'écologie
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full cursor-pointer xl:mr-4 lg:mt-2">
          <div className="shadow-lg group container rounded-md bg-white flex justify-center items-center mx-auto content-div">
            <div>
              <a
                href="https://knock-knock.bordeaux-1.wilders.dev/"
                target="_blank"
                className="py-0 px-0"
              >
                <div className="py-2 px-2 lg:w-[340px] xl:w-[400px] bg-white rounded-md group-hover:opacity-25">
                  <img
                    src="../src/assets/knockknock.png"
                    alt="apercu-site-knockknock"
                  />
                  {/* <h3 className="mt-2 mb-6 flex justify-center">
                    <img
                      src="../src/assets/logo-kk.png"
                      alt="logo-kk"
                      className="w-36 drop-shadow-lg"
                    />{" "}
                  </h3>
                  <ul className="flex flex-col">
                    <li className="text-center mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#58C5D9]">
                      ReactJS
                    </li>
                    <li className="text-center mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#58C5D9]">
                      NodeJS
                    </li>
                    <li className="text-center mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#58C5D9]">
                      MySQL
                    </li>
                    <li className="text-center mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#58C5D9]">
                      TailwindCSS
                    </li>
                  </ul> */}
                </div>
              </a>
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
              <a
                href="https://knock-knock.bordeaux-1.wilders.dev/"
                target="_blank"
                className="py-0 px-0"
              >
                <p className="text-center">Knock Knock</p>
                <p className="mb-4 px-8 italic">
                  Site d'identification et d'évaluation des risques cyber d'une
                  entreprise
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full cursor-pointer xl:ml-12 lg:col-start-2 xl:col-start-3 lg:-mt-[210px] xl:mt-2">
          <div className="shadow-lg group container rounded-md bg-white flex justify-center items-center mx-auto content-div">
            <div>
              <a href="" target="_blank" className="py-0 px-0">
                <div className="py-2 px-2 lg:w-[340px] xl:w-[400px] bg-white rounded-md group-hover:opacity-25">
                  <img
                    src="../src/assets/libside.png"
                    alt="apercu-site-libside"
                  />
                  {/* <h3 className="mt-2 mb-6 flex justify-center">
                    <img
                      src="../src/assets/logo-kk.png"
                      alt="logo-kk"
                      className="w-36 drop-shadow-lg"
                    />{" "}
                  </h3>
                  <ul className="flex flex-col">
                    <li className="text-center mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#58C5D9]">
                      ReactJS
                    </li>
                    <li className="text-center mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#58C5D9]">
                      NodeJS
                    </li>
                    <li className="text-center mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#58C5D9]">
                      MySQL
                    </li>
                    <li className="text-center mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#58C5D9]">
                      TailwindCSS
                    </li>
                  </ul> */}
                </div>
              </a>
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
              <a href="" target="_blank" className="py-0 px-0">
                <p className="text-center">Libside</p>
                <p className="mb-4 px-8 italic">
                  Hackathon pour l'entreprise Apside
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col items-center lg:flex-row lg:justify-evenly lg:ml-10"> */}
        {/* <div className="flip-card">
          <div className="flip-card-inner ml-4">
            <div className="max-w-sm rounded-2xl bg-[#FFDEBE] border-[3px] border-[#8e5440] flip-card-front">
              <h3 className="mt-10 mb-6 flex justify-center">
                <img
                  src="../src/assets/logo-bastide.png"
                  alt="logo-bastide"
                  className="w-36 drop-shadow-lg"
                />{" "}
              </h3>
              <div className="text-[#373A36]">
                <div className="text-lg">
                  <p className="mb-4 px-8 italic">
                    Site touristique sur le quartier Bastide à Bordeaux
                  </p>
                </div>
              </div>
              <ul className="flex flex-col justify-center">
                <li className="mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#E3A461]">
                  JavaScript
                </li>
                <li className="mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#E3A461]">
                  HTML
                </li>
                <li className="mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#E3A461]">
                  CSS
                </li>
              </ul>
            </div>
            <div className="max-w-sm rounded-lg mx-4 flip-card-back">
              <a
                href="https://projet1-wcs-bastide.vercel.app/"
                target="_blank"
                className="inline-flex mt-[18%] items-center py-1 px-1 text-center rounded-lg focus:outline-none bg-primary hover:bg-[#8e5440]"
              >
                <img
                  src="../src/assets/bastide.png"
                  alt="apercu-site-bastide"
                />
              </a>{" "}
            </div>
          </div>
        </div> */}

        {/* <div className="flip-card">
        <div className="flip-card-inner ml-4">
          <div className="max-w-sm rounded-2xl bg-[#FFDEBE] border-[3px] border-[#8e5440] flip-card-front">
            <h3 className="mt-10 mb-4 flex justify-center">
              <img
                src="../src/assets/logo-mealme.png"
                alt="logo-mealme"
                className="w-36"
              />{" "}
            </h3>
            <div className="text-[#373A36]">
              <div className="text-lg">
                <p className="mb-4 px-8 italic">
                  Générateur de recettes de cuisine basé sur les ingrédients
                </p>
              </div>
            </div>
            <ul className="flex flex-col">
              <li className="mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#8ddc93]">
                ReactJS
              </li>
              <li className="mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#8ddc93]">
                NodeJS
              </li>
              <li className="mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#8ddc93]">
                MySQL
              </li>
              <li className="mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#8ddc93]">
                TailwindCSS
              </li>
            </ul>
          </div>
          <div className="max-w-sm rounded-lg mx-4 flip-card-back">
            <a
              href="https://mealme.bordeaux-1.wilders.dev/"
              target="_blank"
              className="inline-flex mt-[18%] items-center py-1 px-1 text-center rounded-lg focus:outline-none bg-primary hover:bg-[#8e5440]"
            >
              <img src="../src/assets/mealme.png" alt="apercu-site-mealme" />
            </a>{" "}
          </div>
        </div>
      </div> */}

        {/* <div className="flip-card">
        <div className="flip-card-inner ml-4">
          <div className="max-w-sm rounded-2xl bg-[#FFDEBE] border-[3px] border-[#8e5440] flip-card-front">
            <h3 className="mt-10 mb-6 flex justify-center">
              <img
                src="../src/assets/logo-kk.png"
                alt="logo-kk"
                className="w-36 drop-shadow-lg"
              />{" "}
            </h3>
            <div className="text-[#373A36]">
              <div className="text-lg">
                <p className="mb-4 px-8 italic">
                  Site d'identification et d'évaluation des risques cyber d'une
                  entreprise
                </p>
              </div>
            </div>
            <ul className="flex flex-col">
              <li className="mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#58C5D9]">
                ReactJS
              </li>
              <li className="mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#58C5D9]">
                NodeJS
              </li>
              <li className="mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#58C5D9]">
                MySQL
              </li>
              <li className="mb-2 border drop-shadow-md rounded-xl mx-32 text-slate-100 bg-[#58C5D9]">
                TailwindCSS
              </li>
            </ul>
          </div>
          <div className="max-w-sm rounded-lg mx-4 flip-card-back">
            <a
              href="https://knock-knock.bordeaux-1.wilders.dev/"
              target="_blank"
              className="inline-flex mt-[18%] items-center py-1 px-1 text-center rounded-lg focus:outline-none bg-primary hover:bg-[#8e5440]"
            >
              <img
                src="../src/assets/knockknock.png"
                alt="apercu-site-knockknock"
              />
            </a>
          </div>
        </div>
      </div> */}
        {/* </div> */}
      </div>
    </>
  );
}
