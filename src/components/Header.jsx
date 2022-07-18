import { Link } from "react-scroll";

export default function Header() {
  return (
    <div className="mb-16">
      <div className="bg-tertiary">
        <div className="py-24 text-center">
          <div className="mb-10 mx-auto">
            <h1 className="mb-6 font-sans text-6xl font-bold leading-none tracking-tight mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-4 left-4 z-0 hidden w-32 -mt-8 -ml-28 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
                <span className="relative mr-28">Marie</span>
              </span>{" "}
              <br></br>
              <span className="ml-12">Clémensat</span>
            </h1>
            <p className="text-2xl text-center">Développeuse web</p>
          </div>
          {/* <div className="flex justify-center">
            <button className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 border border-secondary rounded-lg shadow-md hover:bg-secondary hover:text-slate-100 focus:shadow-outline focus:outline-none">
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </button>
          </div> */}
        </div>
      </div>
      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-slate-50 divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md hover:">
          <Link
            className="cursor-pointer text-center"
            to="about"
            spy={true}
            smooth={true}
          >
            <div className="inline-block p-8 hover:scale-105 duration-200">
              <i className="my-2 fa-solid fa-circle-info text-3xl text-secondary"></i>
              <p className="mx-4 text-lg">A propos</p>
            </div>
          </Link>
          <Link
            className="cursor-pointer text-center"
            to="portfolio"
            spy={true}
            smooth={true}
          >
            <div className="inline-block p-8 hover:scale-105 duration-200">
            <i class="my-2 fa-solid fa-code text-3xl text-secondary"></i>
              <p className="mx-4 text-lg">Portfolio</p>
            </div>
          </Link>
          <Link
            className="cursor-pointer text-center"
            to="contact"
            spy={true}
            smooth={true}
          >
            <div className="inline-block p-8 hover:scale-105 duration-200">
              <i class="my-2 fa-solid fa-address-card text-3xl text-secondary"></i>
              <p className="mx-4 text-lg">Contact</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
