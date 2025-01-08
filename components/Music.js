import React, { useEffect, useRef, useState } from "react";
import { ExpandableCardDemo } from "./ExpandableCardDemo";
import styles from "../src/app/page.module.scss";
import classNames from "classnames";
import { delay } from "framer-motion";

const scrambleText = (
  element,
  text,
  chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
  speed = 5
) => {
  let iterations = 0;
  const originalText = text;
  const fixedText = text
    .split("")
    .map(() => " ")
    .join("");
  element.textContent = fixedText;
  const interval = setInterval(() => {
    const scrambled = originalText
      .split("")
      .map((char, i) => {
        if (i < iterations) {
          return originalText[i];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    element.textContent = scrambled;

    if (iterations >= originalText.length) {
      clearInterval(interval);
    }
    iterations += 1 / speed;
  }, 30);
};

const Music = () => {
  const textRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          scrambleText(
            textRef.current,
            "TRENDING",
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
          );

          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setIsSelected(true);
          }, 1500);

          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  const [isSelected, setIsSelected] = useState(false);
  const buttonRef = useRef(null);

  return (
    <>
      <div className="h-fit overflow-hidden flex flex-col lg:flex-row justify-center items-center">
        <div className="text-[4vw] md:text-[6vw] lg:text-[8vw] font-neutralFace text-center lg:text-left w-full lg:w-[50%] leading-tight">
          <div className="text-xl md:text-3xl lg:text-4xl md:text-center lg:text-right -indent-[5vw] lg:indent-0">
            ENJOY THE LATEST
          </div>
          <div ref={textRef} className={styles.spanclass}>
            TRENDING
          </div>
          <div className="flex md:justify-center lg:flex-row items-center lg:justify-start lg:-mt-6 sm:justify-center lg:indent-[10vw]">
            <div className="text-xl md:text-3xl lg:text-5xl ">MUSIC</div>
            <div
              ref={buttonRef}
              onClick={() => setIsSelected(!isSelected)}
              className={classNames(
                "flex w-16 md:w-20 h-8 md:h-10 bg-gray-600 m-4 lg:m-10 rounded-full transition-all duration-500 shadow-2xl",
                {
                  "bg-green-500": isSelected,
                }
              )}
            >
              <span
                className={classNames(
                  "h-8 md:h-10 w-8 md:w-10 bg-white rounded-full transition-all duration-500 shadow-2xl",
                  {
                    "ml-8 md:ml-10": isSelected,
                  }
                )}
              ></span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[50%] px-4 md:px-8">
          <ExpandableCardDemo />
        </div>
      </div>

      <div className="h-[1px] bg-white w-[98%] mx-auto mt-40 mb-20 "></div>
    </>
  );
};

export default Music;
