import LogoNavbar from "../layout/LogoNavbar";
import NavbarLayout from "../layout/NavbarLayout";

import NavbarMenu from "../layout/NavbarMenu";

const Beranda = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavbarLayout>
        <LogoNavbar />
        <NavbarMenu />
      </NavbarLayout>
    </div>
  );
};
export default Beranda;
