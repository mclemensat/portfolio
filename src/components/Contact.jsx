import { useState } from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  const [isShowContactForm, setIsShowContactForm] = useState(false);

  const handleClick = () => {
    setIsShowContactForm(!isShowContactForm);
  };

  return (
    <div className="text-2xl font-light">
      <div className="text-2xl mb-10">
        <p>Marie Clémensat</p>
        <p>Bordeaux</p>
      </div>
      <div className="flex flex-col justify-center items-center sm:flex sm:flex-row sm:justify-around">
        <div className="flex flex-col">
          <button className="mb-2" onClick={handleClick}>
            {" "}
            Envoyer un mail <i class="fa-solid fa-envelope"></i>
          </button>
          {isShowContactForm ? <ContactForm onClick={handleClick} /> : ""}
        </div>
        <div className="flex flex-col">
          <p className="mb-2"> Linkedin </p>
          <a
            href="https://www.linkedin.com/in/marie-clemensat/"
            target="_blank"
            className="text-4xl ml-6 mb-4"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="flex flex-col">
          <p className="mb-2"> GitHub </p>
          <a
            href="https://github.com/mclemensat"
            target="_blank"
            className="text-4xl ml-4 mb-4"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
