export default function Portfolio() {
  return (
    <>
      <div className="flex flex-col items-center ml-24 lg:flex-row lg:justify-center lg:ml-10">
        <div className="flip-card">
          <div className="flip-card-inner ml-4">
            <div className="max-w-sm rounded-xl bg-tertiary border-[3px] border-[#8e5440] flip-card-front">
              <h3 className="my-6 flex justify-center">
                <img
                  src="../src/assets/logo-bastide.png"
                  alt="logo-bastide"
                  className="w-36"
                />{" "}
              </h3>
              <div className="text-[#373A36]">
                <p className="mb-4">Projet 1 : Wild Code School</p>
                <p className="mb-4 px-4">
                  Projet de groupe d'une durée de 2 semaines
                </p>
              </div>
              <ul className="flex flex-col justify-center">
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-[#E3A461]">
                  JavaScript
                </li>
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-[#E3A461]">
                  HTML
                </li>
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-[#E3A461]">
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
            <div className="max-w-sm rounded-xl bg-tertiary border-[3px] border-[#8e5440] flip-card-front">
              <h3 className="mt-6 mb-4 flex justify-center">
                <img
                  src="../src/assets/logo-mealme.png"
                  alt="logo-mealme"
                  className="w-36"
                />{" "}
              </h3>
              <div className="text-[#373A36]">
                <p className="mb-4">Projet 2 : Wild Code School</p>
                <p className="mb-4 px-4">
                  Projet de groupe d'une durée de 6 semaines
                </p>
              </div>
              <ul className="flex flex-col">
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-[#8ddc93]">
                  ReactJS
                </li>
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-[#8ddc93]">
                  NodeJS
                </li>
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-[#8ddc93]">
                  MySQL
                </li>
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-[#8ddc93]">
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
            <div className="max-w-sm rounded-xl bg-tertiary border-[3px] border-[#8e5440] flip-card-front">
              <h3 className="my-6 flex justify-center">
                <img
                  src="../src/assets/logo-kk.png"
                  alt="logo-kk"
                  className="w-36 bg-[#58C5D9]"
                />{" "}
              </h3>
              <div className="text-[#373A36]">
                <p className="mb-4">Projet 3 : Wild Code School</p>
                <p className="mb-4 px-4">
                  Projet de groupe d'une durée de 8 semaines
                </p>
              </div>
              <ul className="flex flex-col">
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-[#58C5D9]">
                  ReactJS
                </li>
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-[#58C5D9]">
                  NodeJS
                </li>
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-[#58C5D9]">
                  MySQL
                </li>
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-[#58C5D9]">
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
