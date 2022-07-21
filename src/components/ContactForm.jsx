import { useState } from "react";
import axios from "axios";

import SentMessageModal from "./SentMessageModal";

export default function ContactForm({ onClick }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstname, lastname, email, message } = e.target.elements;

    let formValues = {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      message: message.value,
    };

    axios({
      method: "POST",
      url: "http://localhost:5000/contact",
      data: formValues,
    }).then((response) => {
      if (response.data.status === "success") {
        setShowModal(true);
        e.target.reset();
      } else if (response.data.status === "fail") {
        setShowModal(false)
        alert("Erreur");
      }
    });
  };

  return (
    <>
      <div
        id="authentication-modal"
        tabIndex="-1"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
        aria-modal="true"
        role="dialog"
      >
        <div className="relative p-4 w-full max-w-md">
          <div className="relative bg-secondary rounded-lg shadow-lg">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-[#1d3c45] hover:bg-gray-600 hover:text-gray-900 rounded-lg text-sm p-1.5"
              data-modal-toggle="authentication-modal"
              onClick={onClick}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-primary text-center">
                Me contacter
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    Prénom :
                  </label>
                  <input
                    type="firstname"
                    name="firstname"
                    id="firstname"
                    placeholder="Jane"
                    className="bg-primary border border-gray-300 text-sm rounded-lg focus:outline-none block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    Nom :
                  </label>
                  <input
                    type="lastname"
                    name="lastname"
                    id="lastname"
                    placeholder="Doe"
                    className="bg-primary border border-gray-300 text-sm rounded-lg focus:outline-none block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    Email :
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="jane.doe@exemple.fr"
                    className="bg-primary border border-gray-300 text-sm rounded-lg focus:outline-none block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    Message :
                  </label>
                  <textarea
                    type="message"
                    name="message"
                    id="message"
                    placeholder="Votre message ici..."
                    className="bg-primary border border-gray-300 text-sm rounded-lg focus:outline-none block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <div>
                    <input
                      type="submit"
                      className="w-full text-primary bg-[#1d3c45] hover:bg-gray-600 cursor-pointer focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      value="Envoyer"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <SentMessageModal onClick={handleClick} visible={showModal} />
        </div>
      </div>
    </>
  );
}
