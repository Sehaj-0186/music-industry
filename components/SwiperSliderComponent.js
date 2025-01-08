import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import diljit from "../images/Diljit-Dosanjh-Concert.jpg";
import karan from "../images/karan-aujla2.jpg"
import honeysingh from "../images/honey-singh.jpg";
import pverma from "../images/pverma3.jpg";
import ap from "../images/ap2.jpg"
import shubh from "../images/shubh5.webp"
import "swiper/css";

const SwiperSliderComponent = () => {
  const [slides, setSlides] = useState(0);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      setSlides(width < 768 ? 1.2 : 1.5);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);

    return () => {
      window.removeEventListener("resize", updateSlides);
    };
  }, []);

  return (
    <div className="relative bg-black text-white h-screen">
      <Swiper
        spaceBetween={30}
        slidesPerView={slides}
        grabCursor={true}
        initialSlide={0}
        className="w-full h-[100vh] mt-[30vh]"
      >
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-[60%] flex items-end">
            <Image
              alt="Heineken Project"
              src={diljit}
              className="w-full md:w-[80%] h-full object-cover"
            />
          </div>
          <div className="flex justify-between items-center px-4 py-2">
            <div className="flex flex-col">
              <p className="text-red-500">BORN TO SHINE <br /> <span className="text-white">0.27</span></p>
              <p>(01)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-8xl text-right">
              DILJIT DOSANJH 
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-start flex-col w-fit">
        <div className="flex justify-between items-center px-4 py-2">
            <div className="flex flex-col">
              <p>
                <span className="text-red-700">WAVY</span>
                <br /> 1:25
              </p>
              <p>(02)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-8xl text-right">
              KARAN AUJLA
            </div>
          </div>
          <div className="h-[60%] flex items-end">
            <Image
              alt="G-Star Raw Project"
              src={karan}
              className="w-full md:w-[80%] h-full object-cover"
            />
          </div>
          
        </SwiperSlide>

        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-[60%] flex items-end">
            <Image
              alt="Skoda Project"
              src={honeysingh}
              className="w-full md:w-[80%] h-full object-cover object-top"
            />
          </div>
          <div className="flex justify-between items-center px-4 py-2">
            <div className="flex flex-col">
              <p>
                <span className="text-red-700">MILLIONAIRE</span>
                <br /> 2:16
              </p>
              <p>(03)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-8xl text-right">
              HONEY SINGH
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-start flex-col w-fit">
        <div className="flex justify-between items-center px-4 py-2">
            <div className="flex flex-col">
              <p>
                <span className="text-red-700">RUBICON DRILL</span>
                <br /> 1:42
              </p>
              <p>(04)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-8xl text-right">
              PARMISH VERMA
            </div>
          </div>
          <div className="h-[60%] flex items-end">
            <Image
              alt="Diesel Project"
              src={pverma}
              className="w-full md:w-[80%] h-full object-cover object-top"
            />
          </div>
         
        </SwiperSlide>

        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-[60%] flex items-end">
            <Image
              alt="Mercedes Project"
              src={ap}
              className="w-full md:w-[80%] h-full object-cover"
            />
          </div>
          <div className="flex justify-between items-center px-4 py-2">
            <div className="flex flex-col">
              <p>
                <span className="text-red-700">TERE TE</span>
                <br /> 0:11
              </p>
              <p>(05)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-8xl text-right">
              AP DHILLON
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-start flex-col w-fit">
        <div className="flex justify-between items-center px-4 py-2">
            <div className="flex flex-col">
              <p>
                <span className="text-red-700">DIOR</span>
                <br /> 1:07
              </p>
              <p>(06)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-8xl text-left">
              SHUBH
            </div>
          </div>
          <div className="h-[60%] flex items-end">
            <Image
              alt="Mercedes Project"
              src={shubh}
              className="w-full md:w-[80%] h-full object-cover"
            />
          </div>
        
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSliderComponent;
