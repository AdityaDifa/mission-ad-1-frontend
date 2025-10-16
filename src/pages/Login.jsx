import NavbarLayout from "../layout/NavbarLayout";
import Logo from "../assets/Logo.png";
import FormLayout from "../layout/FormLayout";
import TitleText from "../components/texts/TitleText";
import { useState } from "react";
import InputComponent from "../components/inputs/InputComponent";
import NormalText from "../components/texts/NormalText";
import SubmitButton from "../components/buttons/SubmitButton";
import SecondaryLoginButton from "../components/buttons/SecondaryLoginButton";
import { Link, useNavigate } from "react-router-dom";
import AtauDesign from "../components/texts/AtauDesign";
import GoogleButton from "../components/buttons/GoogleButton";
import LoginHandle from "../services/LoginHandle";
import LogoNavbar from "../layout/LogoNavbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen">
      <NavbarLayout>
        <LogoNavbar />
      </NavbarLayout>
      <FormLayout>
        <TitleText text="Masuk ke Akun" />
        <NormalText text={"Yuk, lanjutin belajarmu di videobelajar"} />
        <form
          className="w-full flex flex-col"
          onSubmit={(e) => LoginHandle(e, email, password, navigate)}
        >
          <label htmlFor="email" className="flex flex-row">
            <NormalText text={"E-Mail"} />
            <p className="text-sm text-red-500">*</p>
          </label>
          <InputComponent id={"email"} text={email} setText={setEmail} />
          <br />
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
          <br />
          <a
            href=""
            className="text-[10px] md:text-[14px] mb-2 mt-[-15px] text-right font-DMsans"
          >
            Lupa Password?
          </a>
          <SubmitButton text={"Masuk"} />
        </form>
        <div className="flex flex-col w-full">
          <Link to={"/Register"}>
            <SecondaryLoginButton text={"Daftar"} />
          </Link>
          <AtauDesign />
          <GoogleButton />
        </div>
      </FormLayout>
    </div>
  );
};
export default Login;
