import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";

const WhoWeAre = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.10"],
  });

  return (
    <div className="relative my-10 px-3 py-2 h-[200vh] font-neutralFace">
      <div className="w-full h-[1px] bg-white"></div>
      <div className="flex justify-between w-full text-xs py-2">
        <div>WHO WE ARE</div>
        <div>WHO WE ARE</div>
        <div>WHO WE ARE</div>
      </div>
      <div className="my-28">
        <div className="text-sm md:text-xl">(SEHAJ JAIN)</div>
        <motion.div
          ref={element}
          style={{ opacity: scrollYProgress }}
          className="text-3xl md:text-5xl font-bold leading-snug indent-[30vw] my-2"
        >
          AN INDEPENDENT MUSIC AGENCY HELPING BRANDS TELL POWERFUL, AUTHENTIC
          STORIES WITH MUSIC, WORKING CLOSELY WITH OUR CLIENTS AND OUR CURATED
          GLOBAL NETWORK OF{" "}
          <span className="moving-gradient">PUNJABI</span> ARTISTS, WE
          STRATEGISE, PRODUCE, FIND AND LICENSE THE BEST MUSIC.{" "}
        </motion.div>
      </div>
    </div>
  );
};

export default WhoWeAre;
