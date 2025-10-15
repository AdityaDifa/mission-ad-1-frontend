import NavbarLayout from "../layout/NavbarLayout";
import Logo from "../assets/Logo.png";
import FormLayout from "../layout/FormLayout";
import TitleText from "../components/texts/TitleText";
import NormalText from "../components/texts/NormalText";
import { useState } from "react";
import InputComponent from "../components/inputs/InputComponent";
import InputPhoneNumber from "../components/inputs/InputPhoneNumber";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState("+60");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="flex flex-col h-screen">
      <NavbarLayout>
        <div className="w-[50%]">
          <img src={Logo} alt="" className="md:ml-20" />
        </div>
      </NavbarLayout>
      <FormLayout>
        <TitleText text={"Pendaftaraan Akun"} />
        <NormalText text={"Yuk, daftarkan akunnmu sekarang juga!"} />
        <form className="w-full flex flex-col">
          <label htmlFor="fullName" className="flex flex-row mt-5 md:mt-10">
            <NormalText text={"Nama Lengkap"} />
            <p className="text-sm text-red-500">*</p>
          </label>
          <InputComponent
            id={"fullName"}
            text={fullName}
            setText={setFullName}
          />
          <br />
          <label htmlFor="email" className="flex flex-row">
            <NormalText text={"E-Mail"} />
            <p className="text-sm text-red-500">*</p>
          </label>
          <InputComponent id={"email"} text={email} setText={setEmail} />
          <br />

          <label htmlFor="phoneNumber" className="flex flex-row">
            <NormalText text={"No. Hp"} />
            <p className="text-sm text-red-500">*</p>
          </label>
          <div className=" w-full h-full flex justify-between items-center gap-1">
            <div className="basis-2/5 rounded-sm border border-gray-300 w-full h-[30px] flex">
              <InputPhoneNumber setFlag={setFlag} />
            </div>
            <InputComponent
              className="basis-3/5"
              id={"phoneNumber"}
              text={phoneNumber}
              setText={setPhoneNumber}
            />
          </div>
        </form>
      </FormLayout>
    </div>
  );
};
export default Register;
