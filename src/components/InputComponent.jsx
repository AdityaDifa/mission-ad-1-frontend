const InputComponent = ({ id, text, setText, typeText = "text" }) => {
  return (
    <input
      id={id}
      type={typeText}
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="border-1 border-gray-200 rounded-md h-[48px] p-3 text-[14px] md:text-[16px]"
    />
  );
};
export default InputComponent;
