import React, { useRef } from "react";
import Image from "next/image";
import close from "../images/close-outline.svg";
import menu from "../images/menu-outline.svg";

const Header = () => {
  let resMenu = useRef(null);
  let resMenuHeader = useRef(null);
  let resMenuItem1 = useRef(null);
  let resMenuItem2 = useRef(null);
  let resMenuItem3 = useRef(null);
  let resMenuItem4 = useRef(null);

  return (
    <>
      <div
        ref={resMenu}
        className="fixed w-full top-0 left-0 overflow-hidden h-screen bg-black -translate-y-[1200px]"
      >
        <div
          ref={resMenuHeader}
          className="flex items-start justify-between w-[100%] h-fit py-[5px]"
        >
          <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] leading-none">
            Sehaj <br /> Jain
          </div>
          <div className="block md:hidden cursor-pointer mx-[5px]">
            <Image src={close} className="w-9 object-contain invert" alt="" />
          </div>
        </div>
        <div className="mx-2 my-10 space-y-1">
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem1}
              className="font-neutralFace font-bold text-[30px]"
            >
              WORK
            </div>
          </span>
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem2}
              className="font-neutralFace font-bold text-[30px]"
            >
              ABOUT
            </div>
          </span>
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem3}
              className="font-neutralFace font-bold text-[30px]"
            >
              PUBLICATIONS
            </div>
          </span>
          <span className="overflow-hidden block">
            <div
              ref={resMenuItem4}
              className="font-neutralFace font-bold text-[30px]"
            >
              OFFICE
            </div>
          </span>
        </div>
      </div>

      <div className="absolute bg-black top-0 py-[5px] font-neutralFace h-[20vh] w-[100%] flex justify-between flex-col">
        <div
          id="header"
          className="flex items-start justify-between w-[100%] h-fit"
        >
          <div className="mx-[5px] mix-blend-difference font-monument font-semiboldtext-[20px] leading-none">
            Sehaj <br />
            Jain
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
            WORK
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
            ABOUT
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
            PUBLICATIONS
          </div>
          <div className="mx-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
            OFFICE
          </div>
          <div className="block md:hidden cursor-pointer mx-[5px]">
            <Image alt="" src={menu} className="w-9 object-contain invert" />
          </div>
        </div>
        <div className="flex items-start text-sm justify-between sm:justify-evenly px-5 w-[100%] h-fit">
          <div>
            AN INDEPENDENT <br /> MUSIC INDUSTRY
          </div>
          <div className="tracking-wider">
            PUNJABI <br /> MUSIC
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
