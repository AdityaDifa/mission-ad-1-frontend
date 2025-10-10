import NavbarLayout from "../layout/NavbarLayout";
import Logo from "../assets/Logo.png";
import FormLayout from "../layout/FormLayout";
import TitleText from "../components/texts/TitleText";
import { useState } from "react";
import InputComponent from "../components/inputComponent";
import NormalText from "../components/texts/NormalText";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col h-screen">
      <NavbarLayout>
        <div className="w-[50%]">
          <img src={Logo} alt="" />
        </div>
      </NavbarLayout>
      <FormLayout>
        <TitleText text="Masuk ke Akun" />
        <NormalText text={"Yuk, lanjutin belajarmu di videobelajar"} />
        <form action="" className="w-full flex flex-col">
          <label htmlFor="email" className="flex flex-row">
            <NormalText text={"E-Mail"} />
            <p className="text-sm text-red-500">*</p>
          </label>
          <InputComponent id={"email"} text={email} setText={setEmail} />
          <label htmlFor="password" className="flex flex-row">
            <NormalText text={"Kata Sandi"} />
            <p className="text-sm text-red-500">*</p>
          </label>
          <InputComponent
            id={"password"}
            text={password}
            setText={setPassword}
            typeText="password"
          />
        </form>
      </FormLayout>
    </div>
  );
};
export default Login;
