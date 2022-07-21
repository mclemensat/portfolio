export default function SentMessageModal({ visible, onClick }) {
  const handleClick = () => {
    onClick();
  };

  if (!visible) return null;
  return (
    <div className="bg-slate-800 bg-opacity-50 border rounded-lg flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div className="bg-white w-30 h-50 md:w-[70%] py-14 rounded-md text-center">
        <p className="text-xl mb-6 mt-2 font-bold text-[#1d3c45]">
          Merci pour votre message !
        </p>

        <button
          onClick={handleClick}
          className="bg-secondary px-5 ml-2 p-2 mx-4 rounded-md text-md w-30 text-primary font-semibold"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}
