'use client'

import React, { useEffect, useState } from "react"
import Lenis from "@studio-freight/lenis"
import Header from "../../components/Header"
import SwiperSliderComponent from "../../components/SwiperSliderComponent"
import WhoWeAre from "../../components/WhoWeAre"
import Concepts from "../../components/Concepts"
import Music from "../../components/Music"
import { WorldMapDemo } from "../../components/WorldMapDemo"
import { FlipWordsDemo } from "../../components/FlipWordsDemo"
import { HoverBorderGradientDemo } from "../../components/HoverBorderGradientDemo"
import Footer from "../../components/Footer"
import Preloader from "../../components/Preloader"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      lenis.destroy()
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <Preloader />
      <div className={`text-[#e7e7e7] uppercase overflow-hidden ${isLoading ? 'hidden' : ''}`}>
        <Header />
        <SwiperSliderComponent />
        <WhoWeAre value="AN INDEPENDENT MUSIC AGENCY HELPING BRANDS TELL POWERFUL, AUTHENTIC STORIES WITH MUSIC, WORKING CLOSELY WITH OUR CLIENTS AND OUR CURATED GLOBAL NETWORK OF PUNJABI ARTISTS. WE STRATEGISE, PRODUCE, FIND, AND LICENSE THE BEST MUSIC, CREATING IMMERSIVE MUSICAL EXPERIENCES THAT RESONATE WITH AUDIENCES." />
        <Concepts />
        <Music />
        <WorldMapDemo />
        <FlipWordsDemo />
        <HoverBorderGradientDemo />
        <Footer />
      </div>
    </>
  )
}

