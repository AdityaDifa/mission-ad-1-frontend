const SecondaryLoginButton = ({ text }) => {
  return (
    <button type="button" className="w-full bg-[#E2FCD9CC] p-2 rounded-md my-1">
      <p className="text-[#3ECF4C] text-[10px] md:text-[14px]">{text}</p>
    </button>
  );
};

export default SecondaryLoginButton;
