"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import arrowP from "@/../../public/icons/arrowP.svg";
import arrowN from "@/../../public/icons/arrowN.svg";
import Image from "next/image";

type CardSliderProps<T> = {
  items: T[];
  children: (item: T) => React.ReactNode;
};

export default function CardSlider<T>({ items, children }: CardSliderProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const slideTo = (dir: "left" | "right") => {
    setDirection(dir);
    setCurrentIndex((prev) => {
      if (dir === "left") return prev === 0 ? items.length - 1 : prev - 1;
      else return prev === items.length - 1 ? 0 : prev + 1;
    });
  };

  const variants = {
    enter: (dir: string) => ({
      x: dir === "left" ? -300 : 300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: string) => ({
      x: dir === "left" ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div
      className={`w-full max-w-xs mx-auto mt-[-30px] relative  min-md:hidden`}
    >
      <div className="relative  h-fit rounded-2xl  bg-gray-900 shadow-lg ">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="absolute top-60 inset-0 flex items-center justify-center px-4"
          >
            {children(items[currentIndex])}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => slideTo("left")}
          className="absolute left-[2px] bottom-[-270px] -translate-y-1/2 bg-white/10 hover:bg-white/20 p-1 rounded-full cursor-pointer"
        >
          <Image src={arrowP} alt="perv" width={20} height={20} />
        </button>

        <button
          onClick={() => slideTo("right")}
          className="absolute right-[2px] bottom-[-270px] -translate-y-1/2 bg-white/10 hover:bg-white/20 p-1 rounded-full cursor-pointer"
        >
          <Image src={arrowN} alt="next" width={20} height={20} />
        </button>
      </div>

      <div className="absolute left-[140px] bottom-[-150px] mt-4 flex justify-center gap-2">
        {items.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-white scale-125" : "bg-gray-500/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
