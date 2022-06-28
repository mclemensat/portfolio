import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
// import Form from "../components/Form";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      <div className="mx-4">
        <Header />
      </div>
      <div className="mx-4">
        <h2 id="about" className="text-2xl mt-4 mb-2">
          A propos
        </h2>
        <About />
      </div>
      <div className="mx-4">
        <h2 id="portfolio" className="text-2xl mt-4 mb-2">
          Portfolio
        </h2>
        <Portfolio />
      </div>
      <div className="mx-4">
        <h2 id="skills" className="text-2xl mt-4 mb-2">
          Compétences
        </h2>
        <Skills />
      </div>
      <div className="mx-4">
        <h2 id="contact" className="text-2xl mt-4 mb-2">
          Contact
        </h2>
        <div className="flex">
          <div className="flex-col">
            <p>Marie Clémensat</p>
            <p>Bordeaux</p>
            <p>
              <a
                href="mailto:marieclemensat@wanadoo.fr"
                className="underline mr-4"
              >
                marieclemensat@wanadoo.fr
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/marie-clemensat/"
                target="_blank"
                className="underline"
              >
                Linkedin
              </a>
            </p>
          </div>
        </div>
        {/* <Form /> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
