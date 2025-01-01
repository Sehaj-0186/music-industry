"use client";
import React from "react";
import Header from "../../components/Header";
import SwiperSliderComponent from "../../components/SwiperSliderComponent";

export default function Home() {
  return (
    <>
      <div className="text-[#e7e7e7] uppercase">
        <Header />
        <SwiperSliderComponent />
      </div>
    </>
  );
}
