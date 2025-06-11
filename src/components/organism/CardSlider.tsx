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

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) {
      slideTo("right");
    } else if (info.offset.x > 50) {
      slideTo("left");
    }
  };

  const variants = {
    enter: (dir: string) => ({
      x: dir === "left" ? -300 : 300,
      opacity: 0,
      position: "absolute" as const,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative" as const,
    },
    exit: (dir: string) => ({
      x: dir === "left" ? 300 : -300,
      opacity: 0,
      position: "absolute" as const,
    }),
  };

  return (
    <div className="w-full max-w-xs mx-auto relative min-md:hidden">
      <div className="relative h-[400px] rounded-2xl bg-[#171717]  overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="w-full h-full flex items-center justify-center px-4"
          >
            {children(items[currentIndex])}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => slideTo("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-1 rounded-full"
        >
          <Image src={arrowP} alt="prev" width={20} height={20} />
        </button>
        <button
          onClick={() => slideTo("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-1 rounded-full"
        >
          <Image src={arrowN} alt="next" width={20} height={20} />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
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
