import settings from "../assets/settings.png";
import { useState, useEffect } from "react";

const NavbarMenu = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  let isDisplay = false;

  const toggleDisplay = () => {
    const dropdownMenu = document.getElementById("dropdownMenu");

    if (isDisplay) {
      dropdownMenu.classList =
        "absolute w-screen md:w-full top-[100%] right-0 md:right-10 flex-col shadow-md hidden";
      isDisplay = false;
    } else {
      dropdownMenu.classList =
        "absolute w-screen md:w-full top-[100%] right-0 md:right-10 flex-col shadow-md flex";
      isDisplay = true;
    }
  };
  const DeskopView = () => {
    return (
      <div className="w-auto flex justify-end gap-5 items-center pr-10 relative">
        <a href="">
          <p>Kategori</p>
        </a>
        <img
          src="https://avatar.iran.liara.run/public"
          alt=""
          className="w-10 h-10"
          onClick={toggleDisplay}
        />
        <ListDropdownMenu />
      </div>
    );
  };

  const MobileView = () => {
    return (
      <div className="w-auto relative flex justify-end items-center pr-5">
        <img
          src={settings}
          alt=""
          className="w-4 h-4"
          onClick={toggleDisplay}
        />
        <ListDropdownMenu />
      </div>
    );
  };

  const CardDropdownMenu = ({ text }) => {
    return (
      <div className="p-2 hover:bg-gray-300 border-b-2 border-black/10 bg-white">
        <p className="text-left">{text}</p>
      </div>
    );
  };

  const ListDropdownMenu = () => {
    return (
      <div
        className="absolute w-screen md:w-full top-[100%] right-0 md:right-10 flex-col shadow-md hidden"
        id="dropdownMenu"
      >
        {isMobile ? <CardDropdownMenu text={"Kategori"} /> : null}
        <CardDropdownMenu text={"Profil Saya"} />
        <CardDropdownMenu text={"Kelas Saya"} />
        <CardDropdownMenu text={"Pesanan Saya"} />
        <div className="p-2 hover:bg-gray-300 border-b-2 border-black/10 bg-white">
          <p className="text-left text-red-500">Keluar</p>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <MobileView /> : <DeskopView />}</>;
};
export default NavbarMenu;
