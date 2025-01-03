import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import concert1 from "../images/concert1.png";
import concert2 from "../images/concert2.webp";
import concert3 from "../images/concert3.avif";
import styles from "../src/app/page.module.scss";

const Concepts = () => {
  return (
    <div className='relative font-neutralface px-3 w-full h-fit'>
      <div className='w-full h-[1px] bg-white'></div>
      <div className={styles.concepts}>
        <motion.p
          className='text-8xl sm:text-9xl md:text-[12rem] xl:text-[16rem] font-light leading-none'
          initial={{ x: "-100%" , opacity:0}} // Start position
        // End position
          transition={{ duration: 1, ease: "easeOut" }} // Animation settings
    
          whileInView={{ opacity: 1,  x: 0 }}
        >
          MUSIC
        </motion.p>
        <motion.p
          className='text-8xl sm:text-9xl md:text-[12rem] xl:text-[16rem] font-light leading-none'
          initial={{ x: "-100%" , opacity:0}} // Start position
        // End position
          transition={{ duration: 1, ease: "easeOut" }} // Animation settings
    
          whileInView={{ opacity: 1,  x: 0 }}
        >
          IS MORE
        </motion.p>
        <motion.p
          className='text-8xl sm:text-9xl md:text-[12rem] xl:text-[16rem] font-light leading-none indent-[10vw]'
          initial={{ x: "100%" , opacity:0}} // Start position
        // End position
          transition={{ duration: 1, ease: "easeOut" }} // Animation settings
    
          whileInView={{ opacity: 1,  x: 0 }}
        >
          THAN THE
        </motion.p>
        <motion.p
          className='text-8xl sm:text-9xl md:text-[12rem] xl:text-[16rem] font-light leading-none indent-[10vw]'
          initial={{ x: "-100%" , opacity:0}} // Start position
        // End position
          transition={{ duration: 1, ease: "easeOut" }} // Animation settings
    
          whileInView={{ opacity: 1,  x: 0 }}
        >
          BEATS
        </motion.p>
      </div>
      <div className='w-full h-[1px] bg-transparent md:bg-white mb-[20vh] md:mb-[40vh] mt-[40vh]'></div>
      <div className='absolute top-[30%] md:top-0 right-0 flex items-center justify-center flex-col w-[60vw] mt-[30vh]'>
        <div className='hidden md:block mb-20 bg-gradient-to-br text-transparent bg-clip-text from-blue-400 via-purple-400 to-pink-400'>
          <p className='text-xl'>(CONCEPTS)</p>
          <p className='text-xl'>(IDEAS)</p>
          <p className='text-xl'>(MOTIVES)</p>
        </div>
        <motion.div className='flex items-center flex-col -z-10'
            initial={{  opacity:0}} // Start position
            // End position
              transition={{ duration: 1, ease: "easeOut" }} // Animation settings
        
              whileInView={{ opacity: 1}}>
        <Image alt="" src={concert1} className="-z-20 my-10 w-[50%]" />
        <Image alt="" src={concert3} className="-z-20 my-20 w-[80%]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Concepts;
