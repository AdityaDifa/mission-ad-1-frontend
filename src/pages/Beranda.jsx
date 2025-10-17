import MainLayout from "../layout/MainLayout";
import LogoNavbar from "../layout/LogoNavbar";
import NavbarLayout from "../layout/NavbarLayout";

import NavbarMenu from "../layout/NavbarMenu";
import BoardInformation from "../layout/BoardInformation";
import gambarBeranda from "../assets/gambar-beranda.jpg";

const Beranda = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavbarLayout>
        <LogoNavbar />
        <NavbarMenu />
      </NavbarLayout>
      <MainLayout>
        <BoardInformation backgroundImage={gambarBeranda}>
          <h1 className="text-white text-center font-bold md:text-3xl tracking-wide">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>
          <p className="text-white text-center text-xs mt-2 tracking-wide font-extralight">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
        </BoardInformation>
      </MainLayout>
    </div>
  );
};
export default Beranda;
