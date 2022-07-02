import { Link } from "react-scroll";

export default function Header() {
  return (
    <div className="mb-16">
      <div className="bg-gray-100">
        <div className="py-24 text-center">
          <div className="mb-10 mx-auto">
            <h1 className="mb-6 font-sans text-[#D44D5C] text-6xl font-bold leading-none tracking-tight text-gray-900 mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-4 left-4 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
                <span className="relative mr-20">Marie</span>
              </span>{" "}
              <br></br>
              <span className="ml-20">Clémensat</span>
            </h1>
            <p className="text-2xl text-center text-gray-700">
              Développeuse web
            </p>
          </div>
          <div className="flex justify-center">
            <button className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 border rounded-lg shadow-md hover:bg-gray-200 focus:shadow-outline focus:outline-none">
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
          <Link
            className="cursor-pointer text-center"
            to="about"
            spy={true}
            smooth={true}
          >
            <div className="inline-block p-8">
              <i className="my-2 fa-solid fa-circle-info text-3xl text-blue-200 hover:text-blue-400"></i>
              <p className="mx-4 text-lg">A propos</p>
            </div>
          </Link>
          <Link
            className="cursor-pointer text-center"
            to="portfolio"
            spy={true}
            smooth={true}
          >
            <div className="inline-block p-8">
              <i className="my-2 fa-solid fa-book-open text-3xl text-blue-200 hover:text-blue-400"></i>
              <p className="mx-4 text-lg">Portfolio</p>
            </div>
          </Link>
          <Link
            className="cursor-pointer text-center"
            to="skills"
            spy={true}
            smooth={true}
          >
            <div className="inline-block p-8">
              <i class="my-2 fa-solid fa-code text-3xl text-blue-200 hover:text-blue-400"></i>
              <p className="mx-4 text-lg">Compétences</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
