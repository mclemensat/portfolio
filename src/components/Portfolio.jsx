export default function Portfolio() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="max-w-sm rounded-lg bg-gray-800 flip-card-front">
              <h3 className="my-4 flex justify-center">
                <img
                  src="../src/assets/logo-bastide.png"
                  alt="logo-bastide"
                  className="w-36 border rounded-lg bg-slate-200"
                />{" "}
              </h3>
              <p className="mb-4 text-gray-400">Projet 1 : Wild Code School</p>
              <p className="mb-4 text-gray-400 px-4">
                Projet de groupe d'une durée de 2 semaines
              </p>
              <ul className="flex flex-col justify-center">
                <li className="mb-4 text-gray-600 border rounded-xl mx-28 bg-gray-300">
                  HTML
                </li>
                <li className="mb-4 text-gray-600 border rounded-xl mx-28 bg-gray-300">
                  JavaScript
                </li>
                <li className="mb-4 text-gray-600 border rounded-xl mx-28 bg-gray-300">
                  CSS
                </li>
              </ul>
            </div>
            <div className="max-w-sm rounded-lg bg-gray-800 mx-4 flip-card-back">
              <a
                href="https://projet1-wcs-bastide.vercel.app/"
                target="_blank"
                className="inline-flex mt-[18%] items-center py-2 px-2 rounded-lg focus:outline-none bg-slate-200 hover:bg-slate-500"
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
            <div className="max-w-sm rounded-lg bg-gray-800 flip-card-front">
              <h3 className="my-4 flex justify-center">
                <img
                  src="../src/assets/logo-mealme.png"
                  alt="logo-mealme"
                  className="w-36"
                />{" "}
              </h3>
              <p className="mb-4 text-gray-400">Projet 2 : Wild Code School</p>
              <p className="mb-4 text-gray-400 px-4">
                Projet de groupe d'une durée de 6 semaines
              </p>
              <ul className="flex flex-col">
                <li className="mb-4 text-gray-600 border rounded-xl mx-28 bg-gray-300">
                  ReactJS
                </li>
                <li className="mb-4 text-gray-600 border rounded-xl mx-28 bg-gray-300">
                  NodeJS
                </li>
                <li className="mb-4 text-gray-600 border rounded-xl mx-28 bg-gray-300">
                  MySQL
                </li>
                <li className="mb-4 text-gray-600 border rounded-xl mx-28 bg-gray-300">
                  TailwindCSS
                </li>
              </ul>
            </div>
            <div className="max-w-sm rounded-lg bg-gray-800 mx-4 flip-card-back">
              <a
                href="https://mealme.bordeaux-1.wilders.dev/"
                target="_blank"
                className="inline-flex mt-[18%] items-center py-2 px-2 text-center rounded-lg focus:outline-none bg-slate-200 hover:bg-slate-500"
              >
                <img src="../src/assets/mealme.png" alt="apercu-site-mealme" />
              </a>{" "}
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="max-w-sm rounded-lg bg-gray-800 flip-card-front">
              <h3 className="my-4 flex justify-center">
                <img
                  src="../src/assets/logo-kk.png"
                  alt="logo-kk"
                  className="w-36"
                />{" "}
              </h3>
              <p className="mb-4 text-gray-400">Projet 3 : Wild Code School</p>
              <p className="mb-4 text-gray-400 px-4">
                Projet de groupe d'une durée de 8 semaines
              </p>
              <ul className="flex flex-col">
                <li className="mb-4 text-gray-600 border rounded-xl mx-28 bg-gray-300">
                  ReactJS
                </li>
                <li className="mb-4 text-gray-600 border rounded-xl mx-28 bg-gray-300">
                  NodeJS
                </li>
                <li className="mb-4 text-gray-600 border rounded-xl mx-28 bg-gray-300">
                  MySQL
                </li>
                <li className="mb-4 text-gray-600 border rounded-xl mx-28 bg-gray-300">
                  TailwindCSS
                </li>
              </ul>
            </div>
            <div className="max-w-sm rounded-lg bg-gray-800 mx-4 flip-card-back">
              <a
                href="https://knock-knock.bordeaux-1.wilders.dev/"
                target="_blank"
                className="inline-flex mt-[18%] items-center py-2 px-2 text-center rounded-lg focus:outline-none bg-slate-200 hover:bg-slate-500"
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
