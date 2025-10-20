import MainLayout from "../layout/MainLayout";
import LogoNavbar from "../layout/LogoNavbar";
import NavbarLayout from "../layout/NavbarLayout";
import board2 from "../assets/board-2.jpg";
import NavbarMenu from "../layout/NavbarMenu";
import BoardInformation from "../layout/BoardInformation";
import gambarBeranda from "../assets/gambar-beranda.jpg";
import ClassList from "../layout/ClassList";

const Beranda = () => {
  const classMenuButton = (e) => {
    const buttons = document
      .getElementById("classMenu")
      .querySelectorAll("button");

    buttons.forEach((btn) => {
      btn.classList = "";
    });

    e.target.classList.add("text-[#F64920]", "font-bold");
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
        <div className="my-5">
          <h1 className="font-bold text-lg tracking-wide">
            Koleksi Video Pembelajaran Unggulan
          </h1>
          <p className="text-sm font-light py-2">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>
        <div
          id="classMenu"
          className="flex gap-8 overflow-scroll md:overflow-auto text-sm whitespace-nowrap p-2 mb-5"
          style={{ scrollbarColor: "#f64920" }}
        >
          <button
            onClick={classMenuButton}
            className="text-[#F64920] font-bold"
          >
            Semua Kelas
          </button>
          <button onClick={classMenuButton}>Pemasaran</button>
          <button onClick={classMenuButton}>Desain</button>
          <button onClick={classMenuButton}>Pengembangan Diri</button>
          <button onClick={classMenuButton}>Bisnis</button>
        </div>
        <ClassList />
        <br />
        <BoardInformation backgroundImage={board2}>
          <div className="py-5 lg:px-40">
            <h1 className="text-[#C1C2C4] uppercase text-center text-base md:my-3">
              NewsLetter
            </h1>
            <h1 className="text-white text-center font-bold text-base tracking-wide md:my-3">
              Mau Belajar Lebih Banyak?
            </h1>
            <p className="text-[#F4F5FA] text-center text-sm md:my-3">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik hariesok.id
            </p>
            <div className="my-2 md:relative">
              <input
                type="text"
                className="border bg-white w-full h-10 px-5 py-2 text-sm rounded-md"
                placeholder="Masukan Emailmu"
              />
              <button className="bg-[#FFBD3A] text-white h-8 p-2 rounded-md md:absolute right-10 top-1 flex items-center justify-center w-full md:w-auto my-1 md:my-0">
                Subscribe
              </button>
            </div>
          </div>
        </BoardInformation>
      </MainLayout>
    </div>
  );
};
export default Beranda;
