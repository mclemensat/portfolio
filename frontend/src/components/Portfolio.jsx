export default function Portfolio() {
  return (
    <>
      <div className="container grid justify-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 mx-auto sm:px-36 lg:px-12 xl:px-44">
        <div className="w-full cursor-pointer lg:mr-4">
          <div className="shadow-lg group container rounded-lg bg-white flex justify-center items-center mx-auto content-div">
            <div>
              <a
                href="https://projet1-wcs-bastide.vercel.app/"
                target="_blank"
                className="py-0 px-0"
              >
                <div className="py-2 px-2 xl:w-[450px] bg-white rounded-lg group-hover:opacity-25">
                  <img
                    src="../src/assets/bastide.png"
                    alt="apercu-site-bastide"
                  />
                </div>
              </a>
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
              <a
                href="https://projet1-wcs-bastide.vercel.app/"
                target="_blank"
                className="py-0 px-0"
              >
                <p className="text-center text-2xl mb-4">Bastide</p>
                <p className="mb-4 px-8 italic text-lg">
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
                </div>
              </a>
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
              <a
                href="https://mealme.bordeaux-1.wilders.dev/"
                target="_blank"
                className="py-0 px-0"
              >
                <p className="text-center text-2xl mb-4">MealMe</p>
                <p className="mb-4 px-8 italic text-lg">
                  Générateur de recettes de cuisine basé sur les ingrédients
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full cursor-pointer lg:mt-8 xl:-mt-[220px]">
          <div className="group container rounded-md flex justify-center items-center mx-auto content-div">
            <div>
              <a href="" target="_blank" className="py-0 px-0">
                <div className="py-0 px-0 sm:w-[200px] lg:w-[350px] xl:w-[350px] rounded-md group-hover:opacity-25">
                  <img
                    src="../src/assets/greenta.png"
                    alt="apercu-site-greenta"
                  />
                </div>
              </a>
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
              <a href="" target="_blank" className="py-0 px-0">
                <p className="text-center text-2xl mb-4">Greenta</p>
                <p className="mb-4 px-8 italic text-lg">
                  Hackathon sur le thème de l'écologie
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full cursor-pointer lg:mt-4 xl:mr-4">
          <div className="shadow-lg group container rounded-md bg-white flex justify-center items-center mx-auto content-div">
            <div>
              <a
                href="https://knock-knock.bordeaux-1.wilders.dev/"
                target="_blank"
                className="py-0 px-0"
              >
                <div className="py-2 px-2 xl:w-[400px] bg-white rounded-md group-hover:opacity-25">
                  <img
                    src="../src/assets/knockknock.png"
                    alt="apercu-site-knockknock"
                  />
                </div>
              </a>
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
              <a
                href="https://knock-knock.bordeaux-1.wilders.dev/"
                target="_blank"
                className="py-0 px-0"
              >
                <p className="text-center text-2xl mb-4">Knock Knock</p>
                <p className="mb-4 italic text-lg text-center mx-24">
                  Site d'évaluation des risques cyber d'une
                  entreprise
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full cursor-pointer xl:ml-12 lg:col-start-2 xl:col-start-3 lg:-mt-[320px] xl:mt-4">
          <div className="shadow-lg group container rounded-md bg-white flex justify-center items-center mx-auto content-div">
            <div>
              <a href="" target="_blank" className="py-0 px-0">
                <div className="py-2 px-2 xl:w-[400px] bg-white rounded-md group-hover:opacity-25">
                  <img
                    src="../src/assets/libside.png"
                    alt="apercu-site-libside"
                  />
                </div>
              </a>
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
              <a href="" target="_blank" className="py-0 px-0">
                <p className="text-center text-2xl mb-4">Libside</p>
                <p className="mb-4 px-8 italic text-lg">
                  Hackathon pour l'entreprise Apside
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
