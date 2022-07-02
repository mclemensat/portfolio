export default function Contact() {
  return (
    <>
      <div className="flex">
        <div className="flex-col text-xl font-light">
          <p>Marie Clémensat</p>
          <p>Bordeaux</p>
          <div className="flex">
          <p>
            <a href="mailto:marieclemensat@wanadoo.fr" className="text-4xl mx-2">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/marie-clemensat/"
              target="_blank"
              className="text-4xl mx-2"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </p>
          </div>
        </div>
      </div>
    </>
  );
}
