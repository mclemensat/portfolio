export default function Portfolio() {
  return (
    <>
      <div className="flex flex-col items-center lg:flex-row lg:justify-evenly lg:ml-10">
        <div className="flip-card">
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
                  <p className="mb-4 px-8">
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
        </div>

        <div className="flip-card">
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
                  <p className="mb-4 px-8">
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
        </div>

        <div className="flip-card">
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
                  <p className="mb-4 px-8">
                    Site d'identification et d'évaluation des risques cyber
                    d'une entreprise
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
        </div>
      </div>
    </>
  );
}
