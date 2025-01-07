import React from "react";
import { FlipWords } from "./flip-words";
import styles from "../src/app/page.module.scss"


export function FlipWordsDemo() {
  const words = ["VIBRANT", "ENERGETIC", "MAGICAL", "LEGENDARY"];

  return (
    <div className="mt-[50vh] h-fit flex justify-center items-center px-2 font-montserrat">
      <div
        className="text-[6vw] mx-auto font-light text-neutral-600 dark:text-neutral-400">
        Dive into{" "}
        <FlipWords words={words} /> <br />
        Tunes from the Heart of Punjab.
      </div>
    </div>
  );
}
