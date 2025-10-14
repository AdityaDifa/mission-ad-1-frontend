import googleIcon from "../../assets/google.png";

const GoogleButton = () => {
  const navigateToGoogle = () => {
    window.open("https://www.google.com");
  };
  return (
    <button
      className="border-1 border-gray-300 flex flex-row items-center p-2 rounded-md justify-center"
      onClick={navigateToGoogle}
    >
      <img src={googleIcon} alt="" className="w-4 h-4 md:w-7 md:h-7" />
      <p className="ml-1 md:ml-3 text-bold text-gray-900 text-[10px] md:text-[16px]">
        Masuk dengan Google
      </p>
    </button>
  );
};

export default GoogleButton;
