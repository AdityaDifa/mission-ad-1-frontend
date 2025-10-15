import googleIcon from "../../assets/google.png";

const GoogleButton = () => {
  const navigateToGoogle = () => {
    window.open("https://www.google.com");
  };
  return (
    <button
      className="border-1 border-gray-300 flex flex-row items-center p-2 rounded-md justify-center w-full"
      onClick={navigateToGoogle}
    >
      <img src={googleIcon} alt="" className="w-4 h-4 md:w-7 md:h-7" />
      <p className="ml-1 md:ml-3 font-bold text-[#4A505C] text-[10px] md:text-[14px]">
        Daftar dengan Google
      </p>
    </button>
  );
};

export default GoogleButton;
