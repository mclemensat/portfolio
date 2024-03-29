import { useState } from "react";
import ContactForm from "./ContactForm";

import cv from "../assets/cv.pdf";

export default function Contact() {
  const [isShowContactForm, setIsShowContactForm] = useState(false);

  const handleClick = () => {
    setIsShowContactForm(!isShowContactForm);
  };

  return (
    <div className="text-2xl font-light">
      <div className="text-2xl mb-20 sm:mx-12">
        <p>Marie Clémensat</p>
        <a href="mailto:marieclemensat@wanadoo.fr" className="text-2xl mb-4">
          marieclemensat@wanadoo.fr{" "}
        </a>
        <p>Bordeaux</p>
        {/* <div className="flex flex-col">
          <a
            href={cv}
            target="_blank"
            className="text-2xl"
          > Mon CV
          </a>
        </div> */}
      </div>
      <div className="flex flex-col justify-center items-center sm:flex sm:flex-row sm:justify-around">
        <div className="flex flex-col">
          <p className="mb-2"> Me contacter </p>
          <button className="text-4xl mb-4" onClick={handleClick}>
            <i className="fa-solid fa-envelope"></i>
          </button>
          {isShowContactForm ? <ContactForm onClick={handleClick} /> : ""}
        </div>
        <div className="flex flex-col">
          <p className="mb-2"> Mon CV </p>
          <a href={cv} target="_blank" className="text-4xl ml-6 mb-4">
            <i className="fa-solid fa-file-lines"></i>
          </a>
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
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
