import { Link } from "react-scroll";

export default function Header() {
  return (
    <div className="mb-16">
      <div className="bg-gray-100">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Marie</span>
              </span>{" "}
              Clémensat
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Développeuse web
            </p>
          </div>
          <div className="flex items-center sm:justify-center">
            <button className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-gray-100 h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          <Link className="cursor-pointer text-center" to="about" spy={true} smooth={true}>
            <div className="inline-block p-8">
              <i className="my-2 fa-solid fa-circle-info text-3xl text-blue-200 hover:text-blue-400"></i>
              <p className="mx-4">A propos</p>
            </div>
          </Link>
          <Link className="cursor-pointer text-center" to="portfolio" spy={true} smooth={true}>
            <div className="inline-block p-8">
              <i className="my-2 fa-solid fa-book-open text-3xl text-blue-200 hover:text-blue-400"></i>
              <p className="mx-4">Portfolio</p>
            </div>
          </Link>
          <Link className="cursor-pointer text-center" to="skills" spy={true} smooth={true}>
            <div className="inline-block p-8">
              <i class="my-2 fa-solid fa-code text-3xl text-blue-200 hover:text-blue-400"></i>
              <p className="mx-4">Compétences</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
