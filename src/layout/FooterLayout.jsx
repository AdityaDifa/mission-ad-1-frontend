import { useState, useEffect } from "react";
import logoIcon from "../assets/Logo.png";
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.png";
import facebookIcon from "../assets/facebook.png";

const FooterLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const MobileView = () => {
    return (
      <>
        <div className="flex px-3 flex-col">
          <img src={logoIcon} alt="" className="w-[170px]" />
          <h1 className="text-[12px] font-semibold">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
          </h1>
          <p className="text-xs my-1">
            Jl. Usman Effendi No. 50 Lowokwaru, Malang
          </p>
          <p className="text-xs">+62-877-7123-1234</p>
          <details>
            <summary className="font-semibold">Kategori</summary>
            <div className="flex flex-col gap-1">
              <a href="" className="border-b-1">
                Digital & Teknologi
              </a>
              <a href="" className="border-b-1">
                Pemasaran
              </a>
              <a href="" className="border-b-1">
                Manajemen Bisnis
              </a>
              <a href="" className="border-b-1">
                Pengembangan Diri
              </a>
              <a href="" className="border-b-1">
                Desain
              </a>
            </div>
          </details>
          <details>
            <summary className="font-semibold">Perusahaan</summary>
            <div className="flex flex-col gap-1">
              <a href="" className="border-b-1">
                Tentang Kami
              </a>
              <a href="" className="border-b-1">
                FAQ
              </a>
              <a href="" className="border-b-1">
                Kebijakan Privasi
              </a>
              <a href="" className="border-b-1">
                Ketentuan Layanan
              </a>
              <a href="" className="border-b-1">
                Bantuan
              </a>
            </div>
          </details>
          <details>
            <summary className="font-semibold">Komunitas</summary>
            <div className="flex flex-col gap-1">
              <a href="" className="border-b-1">
                Tips Sukses
              </a>
              <a href="" className="border-b-1">
                Blog
              </a>
            </div>
          </details>
          <div className="w-[35px] flex flex-row gap-2 my-2">
            <img src={linkedinIcon} alt="" />
            <img src={facebookIcon} alt="" />
            <img src={instagramIcon} alt="" />
            <img src={twitterIcon} alt="" />
          </div>
          <p className="text-sm">@2023 Gerobak Sayur All Rights Reserved.</p>
        </div>
      </>
    );
  };
  const DeskopView = () => {
    return (
      <>
        <div className="w-full flex justify-between px-30 py-10">
          <div className="flex justify-start flex-col w-[352px]">
            <img src={logoIcon} alt="" className="w-[200px]" />
            <h1 className="text-[14px] font-semibold">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </h1>
            <p className="text-sm my-1">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang
            </p>
            <p className="text-sm">+62-877-7123-1234</p>
          </div>
          <div className="w-[485px] flex gap-4 justify-end">
            <div className="grid gap-y-2 w-fit h-fit ">
              <h1 className="font-bold">Kategori</h1>
              <a href="">Digital & Teknologi</a>
              <a href="">Pemasaran</a>
              <a href="">Manajemen Bisnis</a>
              <a href="">Pengembangan Diri</a>
              <a href="">Desain</a>
            </div>
            <div className="grid gap-y-2 w-fit h-fit ">
              <h1 className="font-bold">Perusahaan</h1>
              <a href="">Tentang Kami</a>
              <a href="">FAQ</a>
              <a href="">Kebijakan Privasi</a>
              <a href="">Ketentuan Layanan</a>
              <a href="">Bantuan</a>
            </div>
            <div className="grid gap-y-2 w-fit h-fit ">
              <h1 className="font-bold">Komunitas</h1>
              <a href="">Tips Sukses</a>
              <a href="">Blog</a>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-30 pb-10">
          <div>
            <p>@2023 Gerobak Sayur All Rights Reserved.</p>
          </div>
          <div className="flex flex-row h-[35px] gap-3">
            <img src={linkedinIcon} alt="" />
            <img src={facebookIcon} alt="" />
            <img src={instagramIcon} alt="" />
            <img src={twitterIcon} alt="" />
          </div>
        </div>
      </>
    );
  };
  return (
    <footer className="w-full bg-white">
      {isMobile ? <MobileView /> : <DeskopView />}
    </footer>
  );
};

export default FooterLayout;
