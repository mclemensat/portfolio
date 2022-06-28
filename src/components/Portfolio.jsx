export default function Portfolio() {
  return (
    <>
      <h2 className="mt-2">
        Projets Wild Code School février 2022 - juillet 2022
      </h2>
      <div className="flex flex-col sm:flex-row">
        <div className="max-w-sm rounded-lg bg-gray-800 m-2">
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-semibold text-white">Bastide</h5>
            <p className="mb-4 text-gray-400">
              Projet 1 : Wild Code School <br></br>Projet de groupe d'une durée
              de 2 semaines <br></br>HTML - JavaScript - CSS
            </p>
            <a
              href="https://projet1-wcs-bastide.vercel.app/"
              target="_blank"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-slate-500 rounded-lg focus:outline-none bg-slate-200 hover:bg-slate-500 hover:text-slate-200"
            >
              Le projet
              <svg className="ml-2 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="max-w-sm rounded-lg bg-gray-800 m-2">
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-semibold text-white">MealMe</h5>
            <p className="mb-4 text-gray-400">
              Projet 2 : Wild Code School <br></br>Projet de groupe d'une durée
              de 6 semaines <br></br>React - Node.js - MySQL - TailwindCSS
            </p>
            <a
              href="https://mealme.bordeaux-1.wilders.dev/"
              target="_blank"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-slate-500 rounded-lg focus:outline-none bg-slate-200 hover:bg-slate-500 hover:text-slate-200"
            >
              Le projet
              <svg className="ml-2 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="max-w-sm rounded-lg bg-gray-800 m-2">
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-semibold text-white">
              Knock-Knock
            </h5>
            <p className="mb-4 text-gray-400">
              Projet 3 : Wild Code School <br></br>Projet de groupe d'une durée
              de 8 semaines <br></br>React - Node.js - MySQL - TailwindCSS
            </p>
            <a
              href="https://knock-knock.bordeaux-1.wilders.dev/"
              target="_blank"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-slate-500 rounded-lg focus:outline-none bg-slate-200 hover:bg-slate-500 hover:text-slate-200"
            >
              Le projet
              <svg className="ml-2 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
