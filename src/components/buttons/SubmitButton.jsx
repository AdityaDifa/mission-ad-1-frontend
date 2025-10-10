const SubmitButton = ({ text }) => {
  return (
    <button type="submit" className="w-full bg-[#3ECF4C] p-2 rounded-md my-1">
      <p className="text-[white] text-[10px] md:text-[14px]">{text}</p>
    </button>
  );
};

export default SubmitButton;
