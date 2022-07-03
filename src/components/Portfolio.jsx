export default function Portfolio() {
  return (
    <>
      <div className="flex flex-col justify-center sm:flex-row">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="max-w-sm rounded-xl bg-tertiary border-[3px] border-secondary flip-card-front">
              <h3 className="my-6 flex justify-center">
                <img
                  src="../src/assets/logo-bastide.png"
                  alt="logo-bastide"
                  className="w-36"
                />{" "}
              </h3>
              <p className="mb-4">Projet 1 : Wild Code School</p>
              <p className="mb-4 px-4">
                Projet de groupe d'une durée de 2 semaines
              </p>
              <ul className="flex flex-col justify-center">
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-secondary">
                  JavaScript
                </li>
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-secondary">
                  HTML
                </li>
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-secondary">
                  CSS
                </li>
              </ul>
            </div>
            <div className="max-w-sm rounded-lg mx-4 flip-card-back">
              <a
                href="https://projet1-wcs-bastide.vercel.app/"
                target="_blank"
                className="inline-flex mt-[18%] items-center py-1 px-1 text-center rounded-lg focus:outline-none bg-primary hover:bg-secondary"
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
          <div className="flip-card-inner">
            <div className="max-w-sm rounded-xl bg-tertiary border-[3px] border-secondary flip-card-front">
              <h3 className="mt-6 mb-4 flex justify-center">
                <img
                  src="../src/assets/logo-mealme.png"
                  alt="logo-mealme"
                  className="w-36"
                />{" "}
              </h3>
              <p className="mb-4">Projet 2 : Wild Code School</p>
              <p className="mb-4 px-4">
                Projet de groupe d'une durée de 6 semaines
              </p>
              <ul className="flex flex-col">
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-secondary">
                  ReactJS
                </li>
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-secondary">
                  NodeJS
                </li>
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-secondary">
                  MySQL
                </li>
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-secondary">
                  Tailwind
                </li>
              </ul>
            </div>
            <div className="max-w-sm rounded-lg mx-4 flip-card-back">
              <a
                href="https://mealme.bordeaux-1.wilders.dev/"
                target="_blank"
                className="inline-flex mt-[18%] items-center py-1 px-1 text-center rounded-lg focus:outline-none bg-primary hover:bg-secondary"
              >
                <img src="../src/assets/mealme.png" alt="apercu-site-mealme" />
              </a>{" "}
            </div>
          </div>
        </div>

        <div className="flip-card -mr-12">
          <div className="flip-card-inner">
            <div className="max-w-sm rounded-xl bg-tertiary border-[3px] border-secondary flip-card-front">
              <h3 className="my-6 flex justify-center">
                <img
                  src="../src/assets/logo-kk.png"
                  alt="logo-kk"
                  className="w-36 bg-[#58C5D9]"
                />{" "}
              </h3>
              <p className="mb-4">Projet 3 : Wild Code School</p>
              <p className="mb-4 px-4">
                Projet de groupe d'une durée de 8 semaines
              </p>
              <ul className="flex flex-col">
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-secondary">
                  ReactJS
                </li>
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-secondary">
                  NodeJS
                </li>
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-secondary">
                  MySQL
                </li>
                <li className="mb-2 border rounded-xl mx-26 text-slate-100 bg-secondary">
                  TailwindCSS
                </li>
              </ul>
            </div>
            <div className="max-w-sm rounded-lg mx-4 flip-card-back">
              <a
                href="https://knock-knock.bordeaux-1.wilders.dev/"
                target="_blank"
                className="inline-flex mt-[18%] items-center py-1 px-1 text-center rounded-lg focus:outline-none bg-primary hover:bg-secondary"
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
