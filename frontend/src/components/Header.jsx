import { Link } from "react-scroll";

export default function Header() {
  return (
    <div className="mb-16">
      <div className="bg-tertiary rounded-lg -mt-2">
        <div className="py-24 md:py-40 text-[#1d3c45] text-center">
          <div className="mb-10 mx-auto">
            <h1 className="mb-6 font-sans text-5xl md:text-7xl font-bold leading-none tracking-tight mx-auto">
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
            <p className="sm:text-2xl md:text-3xl text-center">
              Développeuse web
            </p>
          </div>
        </div>
      </div>
      <div className="relative px-4 sm:px-0 -mt-24">
        <div className="absolute inset-0 h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-slate-50 divide-y  border border-4 border-[#D48166] rounded-lg shadow sm:divide-y-0 sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          <Link
            className="cursor-pointer text-center bg-primary"
            to="about"
            spy={true}
            smooth={true}
          >
            <div className="inline-block p-8 hover:scale-105 duration-200">
              <i className="my-4 fa-solid fa-circle-info sm:text-3xl md:text-4xl text-secondary"></i>
              <p className="mx-4 text-xl text-secondary">A propos</p>
            </div>
          </Link>
          <Link
            className="cursor-pointer text-center bg-primary"
            to="portfolio"
            spy={true}
            smooth={true}
          >
            <div className="inline-block p-8 hover:scale-105 duration-200">
              <i className="my-4 fa-solid fa-code sm:text-3xl md:text-4xl text-secondary"></i>
              <p className="mx-4 text-xl text-secondary">Portfolio</p>
            </div>
          </Link>
          <Link
            className="cursor-pointer text-center bg-primary"
            to="contact"
            spy={true}
            smooth={true}
          >
            <div className="inline-block p-8 hover:scale-105 duration-200">
              <i className="my-4 fa-solid fa-address-card sm:text-3xl md:text-4xl text-secondary"></i>
              <p className="mx-4 text-xl text-secondary">Contact</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
