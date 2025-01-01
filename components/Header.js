import React, { useRef } from "react";
import Image from "next/image";
import close from "../images/close-outline.svg"

const Header = () => {

    let resMenu = useRef(null);
    let resMenuHeader = useRef(null);

    
  return (
    <>
      <div
        ref={resMenu}
        className="fixed w-full top-0 left-0 overflow-hidden h-screen bg-black"
      >
        <div
          ref={resMenuHeader}
          className="flex items-start justify-between w-[100%] h-fit py-[5px]"
        >
            <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] leading-none">
Sehaj <br /> Jain
            </div>
<div className="block md:hidden cursor-pointer mx-[5px]">
<Image src={close} className="w-9 object-contain invert" alt=""/> 
</div>


        </div>
        <div className="mx-2 my-10 space-y-1"></div>
      </div>
    </>
  );
};

export default Header;
