import { useState, useEffect } from "react";
import profileDummyClass from "../assets/profileDummyClass.png";
import dummyPicture from "../assets/dummyClassPicture.jpg";
import star from "../assets/star.PNG";
import halfStar from "../assets/half-star.PNG";
import noStar from "../assets/no-star.PNG";

const ClassList = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Card = () => {
    return (
      <div className="w-full bg-white shadow-sm rounded-sm p-2">
        {isMobile ? <MobileCard /> : <DeskopCard />}
      </div>
    );
  };

  const MobileCard = () => {
    return (
      <div className="flex">
        <div className="basis-1/3 p-1 w-[82px] aspect-square overflow-hidden rounded-md">
          <img
            src={dummyPicture}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="basis-2/3 p-1">
          <h1 className="text-sm font-semibold">
            Big 4 Auditor Financial Analyst
          </h1>
          <div className="flex py-1">
            <div>
              <img
                src={profileDummyClass}
                alt=""
                className="w-[36px] rounded-md"
              />
            </div>
            <div className="mx-1">
              <h1 className="text-sm text-[#222325] font-medium">
                Jenna Ortega
              </h1>
              <p className="text-xs text-[#333333AD]">Senior Accountant</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const DeskopCard = () => {
    return (
      <div className="flex flex-col p-1">
        <img src={dummyPicture} alt="" className="rounded-md" />
        <h1 className="text-[14px] font-semibold my-2">
          Big 4 Auditor Financial Analyst
        </h1>
        <p className="line-clamp-2 text-[12px] text-[#333333AD]">
          Mulai transformasi dengan instruktur profesional, harga yang
          terjangkau, dan kurikulum terbaik. Mulai transformasi dengan
          instruktur profesional, harga yang terjangkau, dan kurikulum terbaik
        </p>
        <div className="flex my-2">
          <img
            src={profileDummyClass}
            alt=""
            className="size-[40px] rounded-md"
          />
          <div className="mx-2">
            <h1 className="font-semibold text-[14px]">Jenna Ortega</h1>
            <p className="text-[#333333AD] text-[12px]">
              Senior Accountant di Gojek
            </p>
          </div>
        </div>
        <div className="flex justify-between my-2">
          <div className="flex flex-row items-center">
            <img src={star} alt="" className="size-[14px]" />
            <img src={star} alt="" className="size-[14px]" />
            <img src={star} alt="" className="size-[14px]" />
            <img src={halfStar} alt="" className="size-[14px]" />
            <img src={noStar} alt="" className="size-[14px]" />
            <p className="text-[12px] mx-1 text-[#333333AD] underline underline-offset-2">
              3.5 (86)
            </p>
          </div>
          <div>
            <h1 className="text-[#3ECF4C] text-md font-semibold">RP 300K</h1>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default ClassList;
