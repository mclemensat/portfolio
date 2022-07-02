import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
// import Form from "../components/Form";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      <div className="mx-4">
        <Header />
      </div>
      <div className="mx-4">
        <h2 id="about">A propos</h2>
        <About />
      </div>
      <div className="mx-4">
        <h2 id="portfolio">Portfolio</h2>
        <Portfolio />
      </div>
      <div className="mx-4">
        <h2 id="skills">Compétences</h2>
        <Skills />
      </div>
      <div className="mx-4">
        <h2 id="contact">Contact</h2>
        <Contact />
        {/* <Form /> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}