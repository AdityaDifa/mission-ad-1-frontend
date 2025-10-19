import MainLayout from "../layout/MainLayout";
import LogoNavbar from "../layout/LogoNavbar";
import NavbarLayout from "../layout/NavbarLayout";

import NavbarMenu from "../layout/NavbarMenu";
import BoardInformation from "../layout/BoardInformation";
import gambarBeranda from "../assets/gambar-beranda.jpg";

const Beranda = () => {
  const classMenuButton = (e) => {
    const buttons = document
      .getElementById("classMenu")
      .querySelectorAll("button");

    buttons.forEach((btn) => {
      btn.classList = "";
    });

    e.target.classList.add("text-[#F64920]");
  };

  return (
    <div className="flex flex-col h-screen">
      <NavbarLayout>
        <LogoNavbar />
        <NavbarMenu />
      </NavbarLayout>
      <MainLayout>
        <BoardInformation backgroundImage={gambarBeranda}>
          <h1 className="text-white text-center font-bold md:text-3xl tracking-wide mt-2 mx-8 text-base/5">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>
          <p className="text-white text-center text-xs mt-2 tracking-wide font-extralight">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
          <button className="bg-[#3ECF4C] my-5 w-fit self-center  rounded-md p-2 md:px-7 text-white md:font-semibold text-[12px]">
            Temukan Video Course untuk Dipelajari!
          </button>
        </BoardInformation>
        <div className="py-4 md:py-8">
          <h1 className="font-bold text-lg tracking-wide">
            Koleksi Video Pembelajaran Unggulan
          </h1>
          <p className="text-sm font-light py-2">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>
        <div
          id="classMenu"
          className="flex gap-8 overflow-scroll text-sm whitespace-nowrap p-2"
          style={{ scrollbarColor: "#f64920" }}
        >
          <button onClick={classMenuButton} className="text-[#F64920]">
            Semua Kelas
          </button>
          <button onClick={classMenuButton}>Pemasaran</button>
          <button onClick={classMenuButton}>Desain</button>
          <button onClick={classMenuButton}>Pengembangan Diri</button>
          <button onClick={classMenuButton}>Bisni</button>
        </div>
      </MainLayout>
    </div>
  );
};
export default Beranda;
