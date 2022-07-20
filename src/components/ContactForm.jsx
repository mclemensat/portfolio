import axios from "axios";

export default function ContactForm() {
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
        alert("Message sent");
      } else if (response.data.status === "fail") {
        alert("Message failed to send");
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <div className="px-3 mb-4 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="firstname"
            >
              Prénom
            </label>
            <input
              className="appearance-none block text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="firstname"
              id="firstname"
              type="text"
              placeholder="Jane"
              required
            />
          </div>
          <div>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="lastname"
            >
              Nom
            </label>
            <input
              className="appearance-none block text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="lastname"
              id="lastname"
              type="text"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div>
          <div className="px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="email"
              id="email"
              type="email"
              placeholder="jane.doe@example.com"
              required
            />
          </div>
        </div>
        <div>
          <div className="px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full text-gray-700 border border-gray-400 rounded py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              name="message"
              id="message"
              placeholder="Votre message ici..."
              required
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <div>
            <input
              className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              value="Envoyer"
            ></input>
          </div>
        </div>
      </form>
    </>
  );
}
