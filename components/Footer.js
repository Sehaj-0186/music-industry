import React from "react";
import Image from "next/image";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import facebook from "../images/facebook.png";
import copyright from "../images/copyright.png";

const Footer = () => {
  return (
    <>
      <div className=" relative w-full h-[45vh]">
        <div className="flex flex-col w-full h-[100%]">
          <div className="text-center w-full flex items-center justify-center h-[40%] text-[2vw] font-light">
            Know More about us :)
          </div>
          <div className="w-[100%] flex justify-center px-4 items-end h-[10%] ">
            <Image src={instagram} alt="" className="w-[2vw] mx-[1.2vw]" />
            <Image src={twitter} alt="" className="w-[2vw] mx-[1.2vw]" />
            <Image src={youtube} alt="" className="w-[2vw] mx-[1.2vw]" />
            <Image src={facebook} alt="" className="w-[2vw] mx-[1.2vw]" />
          </div>
          <div className="h-[35%] w-[100%] flex justify-center items-center font-light">
            <div className="mx-[1.5vw] hover:underline transition-all ">
              Home
            </div>
            <div className="mx-[1.5vw] hover:underline transition-all">
              Updates
            </div>
            <div className="mx-[1.5vw] hover:underline transition-all">
              About
            </div>
            <div className="mx-[1.5vw] hover:underline transition-all">
              Contact us
            </div>
            <div className="mx-[1.5vw] hover:underline transition-all">
              {" "}
              Our Team
            </div>
            <div className="mx-[1.5vw] hover:underline transition-all">
              Settings
            </div>
          </div>
          <div className="h-[15%] flex items-center justify-center bg-zinc-900">
            <div className="flex">
              Copyright <p>&copy;</p>2025 | Desinged by{" "}
            </div>{" "}
            <span className="font-montserrat ml-[5px] italic">Sehaj Jain</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
