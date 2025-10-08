import NavbarLayout from "../layout/NavbarLayout";
import Logo from "../assets/Logo.png";
import FormLayout from "../layout/FormLayout";
import TitleText from "../components/TitleText";
import { useState } from "react";
import InputComponent from "../components/inputComponent";

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
        <p className="text-[14px] md:text-[16px] text-[#333333AD] text-center">
          Yuk, lanjutin belajarmu di videobelajar
        </p>
        <form action="" className="w-full flex flex-col">
          <label htmlFor="email">Email</label>
          <InputComponent id={"email"} text={email} setText={setEmail} />
          <label htmlFor="password">Password</label>
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
