import { useState } from "react";
import hidePassword from "../assets/hide-password.png";
import viewPassword from "../assets/view-password.png";

const InputComponent = ({ id, text, setText, typeText = "text" }) => {
  const [hideStatus, setHideStatus] = useState("hidden");
  const [iconName, setIconName] = useState(hidePassword);
  const [typeInput, setTypeInput] = useState(typeText);
  const toggleButtonPassword = () => {
    if (hideStatus === "hidden") {
      setIconName(viewPassword);
      setHideStatus("view");
      setTypeInput("text");
    } else {
      setIconName(hidePassword);
      setHideStatus("hidden");
      setTypeInput("password");
    }
  };

  return (
    <div className="relative w-full">
      <input
        id={id}
        type={typeInput}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-1 border-gray-200 rounded-md h-[30px] py-2 pl-2 pr-10 mb-5 text-[10px] md:text-[14px] w-full"
      />
      {typeText === "password" && (
        <button
          className="absolute right-5 top-1"
          onClick={toggleButtonPassword}
          type="button"
        >
          <img src={iconName} alt="" className="h-5 opacity-50" />
        </button>
      )}
    </div>
  );
};
export default InputComponent;
