import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import concert1 from "../images/concert1.png";
import concert2 from "../images/concert2.webp";
import concert3 from "../images/concert3.avif";
import styles from "../src/app/page.module.scss";

const Concepts = () => {
  return (
    <div className="relative font-neutralface px-3 w-full">
      <div className="w-full h-[1px] bg-white"></div>
      <div className="my-16 font-neutralFace">
        <motion.p
          className="text-8xl sm:text-9xl md:text-[12rem] xl:text-[16rem] font-light leading-none tracking-tighter z-20"
          initial={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          MUSIC
        </motion.p>
        <motion.p
          className="text-8xl sm:text-9xl md:text-[12rem] xl:text-[16rem] font-light leading-none tracking-tighter z-20"
          initial={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          IS MORE
        </motion.p>
        <motion.p
          className="text-8xl sm:text-9xl md:text-[12rem] xl:text-[15rem] font-light leading-none indent-[10vw] tracking-tighter z-20 lg:text-nowrap"
          initial={{ x: "100%", opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          THAN THE
        </motion.p>
        <motion.p
          className="text-8xl sm:text-9xl md:text-[12rem] xl:text-[15rem] font-light leading-none tracking-tighter z-20"
          initial={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          BEATS
        </motion.p>
      </div>
      <div className="w-full h-[1px] bg-transparent md:bg-white mb-[20vh] md:mb-[30vh] mt-[60vh]"></div>
      <div className="absolute top-[30%] md:top-0 right-0 sm:top-0 flex items-center justify-center flex-col w-[60vw] mt-[30vh]">
        <div className="hidden md:block mb-20 bg-gradient-to-br text-transparent bg-clip-text from-blue-400 via-purple-400 to-pink-400">
          <p className="text-xl">(CONCEPTS)</p>
          <p className="text-xl">(IDEAS)</p>
          <p className="text-xl">(MOTIVES)</p>
        </div>

        <Image alt="" src={concert1} className="-z-20 my-10 w-[50%]" />
        <Image alt="" src={concert3} className=" my-5 w-[80%] z-50" />
      </div>
    </div>
  );
};

export default Concepts;
