import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
// import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="mx-0 sm:mx-12 sm:mb-28">
        <Header />
      </div>
      <div className="mx-4 sm:mb-20 md:mb-28">
        <h2 className="text-4xl md:text-5xl" id="about">
          Présentation
        </h2>
        <hr className="-mt-2 sm:mb-4 md:mb-20 mx-[200px] sm:mx-[650px] bg-[#FFF1E1] border border-[#FFF1E1]"></hr>
        <About />
      </div>
      <div className="mx-4 md:mb-24">
        <h2 className="text-4xl md:text-5xl" id="portfolio">
          Portfolio
        </h2>
        <hr className="-mt-2 sm:mb-4 md:mb-20 mx-[200px] sm:mx-[650px] bg-[#FFF1E1] border border-[#FFF1E1]"></hr>
        <Portfolio />
      </div>
      {/* <div className="mx-4">
        <h2 id="skills">Compétences</h2>
        <hr className="-mt-2 mb-12 mx-[200px] sm:mx-[650px] bg-black border border-black"></hr>
        <Skills />
      </div> */}
      <div className="mx-4 sm:mb-24">
        <h2 className="text-4xl md:text-5xl" id="contact">
          Contact
        </h2>
        <hr className="-mt-2 sm:mb-4 md:mb-20 mx-[200px] sm:mx-[650px] bg-[#FFF1E1] border border-[#FFF1E1]"></hr>
        <Contact />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}
