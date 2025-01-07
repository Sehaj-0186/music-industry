"use client";
import React, { useState } from "react";
import { HoverBorderGradient } from "./hover-border-gradient";
import { motion, AnimatePresence } from "framer-motion";

export function HoverBorderGradientDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const toggleModal = () => {
    const button = document.getElementById("get-subscription-btn");
    const rect = button.getBoundingClientRect();
    setButtonPosition({
      x: rect.left + rect.width / 2, // Center x-coordinate of the button
      y: rect.top + rect.height / 2, // Center y-coordinate of the button
    });
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      {/* Main Content */}
      <div className="mx-9 my-4 flex justify-start text-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          id="get-subscription-btn"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center  w-[14vw] px-auto text-[1.25vw] text-nowrap"
          onClick={toggleModal} // Show modal on click
        >
          <span>Get Subscription</span>
        </HoverBorderGradient>
      </div>
      <div className="h-[1px] bg-white w-[98%] mx-auto mt-8"></div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
                x: buttonPosition.x - window.innerWidth / 2,
                y: buttonPosition.y - window.innerHeight / 2,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                x: 0,
                y: 0,
              }}
              exit={{
                scale: 0,
                opacity: 0,
                x: buttonPosition.x - window.innerWidth / 2,
                y: buttonPosition.y - window.innerHeight / 2,
              }}
              transition={{
                type: "tween",
                duration: 0.6, // Smooth scaling duration
                ease: "easeInOut", // Smooth easing function
              }}
              className="bg-white dark:bg-black rounded-lg shadow-3xl border-running shadow-white p-6 relative w-[24rem] "
            >
              <h2 className="text-xl text-black dark:text-white mb-4 text-center font-thin tracking-wide">
                Explore more from us
              </h2>
              <form>
                {/* Dropdown */}
                <select
                  id="subscription"
                  name="subscription"
                  className="w-full mb-4 p-2 bg-transparent border-b-[1px] border-white rounded focus:outline-none hover:border-b-blue-400 transition-colors duration-300"
                >
                  <option value="basic" className="bg-black ">
                    Basic - $0.49/month
                  </option>
                  <option value="premium" className="bg-black">
                    Premium - $1.49/month
                  </option>
                  <option value="pro" className="bg-black">
                    Pro - $2.99/month
                  </option>
                </select>

                {/* Email Input */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mb-4 p-2 bg-transparent border-b-[1px] border-white rounded focus:border-b-blue-400 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />

                {/* Password Input */}
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full mb-4 p-2 border-b-[1px] border-white bg-transparent rounded focus:border-b-blue-400 focus:outline-none"
                  placeholder="Enter your password"
                  required
                />

                {/* Buttons */}
                <div className="flex justify-between space-x-4 mt-6">
                  <button
                    onClick={toggleModal}
                    type="button"
                    className="px-4 py-2 bg-transparent text-red-400 rounded hover:text-red-500 transition-all"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-transparent text-blue-400 rounded hover:text-blue-500 transition-all"
                  >
                    Buy Subscription
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
