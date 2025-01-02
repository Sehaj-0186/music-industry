import React, { useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import styles from "../src/app/page.module.scss"


const WhoWeAre = (props) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.15"],
  });

  const words = props.value.split(" ");

  return (
    <div className="relative my-10 px-3 py-2 h-[80vh] font-neutralFace">
      <div className="w-full h-[1px] bg-white"></div>
      <div className="flex justify-between w-full text-xs py-2">
        <div>WHO WE ARE</div>
        <div>WHO WE ARE</div>
        <div>WHO WE ARE</div>
      </div>
      <div className="my-28">
        <div className="text-sm md:text-xl w-fit font-thin">(SEHAJ JAIN)</div>
        <div
          ref={element}
          style={{ opacity: scrollYProgress }}
          className={styles.paragraph}
        >
 {
    words.map((word,i)=>{
        const start = i/words.length;
        const end = start + (1/words.length)
      return <Word key={i} range={[start,end]} progress={scrollYProgress}>{word}</Word>
    })
 }
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

const Word=({children, range, progress})=>{
    const opacity = useTransform(progress, range,[0,1])
    return (
        <span className={styles.word}>
            <span className={styles.shadow}>{children}</span>
        <motion.span 
        
        style={{opacity}}>{children}</motion.span>
        </span>
    )
}
