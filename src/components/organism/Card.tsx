"use client";

import React, { useEffect, useState } from "react";

import Image, { StaticImageData } from "next/image";
import { shuffleArray } from "@/utils/helpers";
import { AnimatePresence, motion } from "framer-motion";
import CardItem from "./CardItem";
import CardSkeleton from "./CardSkeleton";
interface coin {
  logo: string;
  name: string;
  pair: string;
  price: number;
  change: number;
}
interface CardProps {
  coins: coin[];
  title: string;
  titleIcon: StaticImageData;
  fetchData: boolean;
  isPending: boolean;
}

function Card({
  coins,
  title,
  titleIcon,
  fetchData,
  isPending,
}: CardProps): React.ReactElement {
  const [items, setItems] = useState(coins);
  useEffect(() => {
    if (fetchData === false) return; //using this state for stop our sample data fetching(works with viewPort)
    const interval = setInterval(() => {
      setItems((prev) => shuffleArray(prev));
      console.log("change");
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-[330px] h-fit  flex flex-col gap-8  pt-5 pb-6 bg-[#13141A] border rounded-xl border-[#2B2C31] ">
      <div className="flex bg-[#101116] rounded-2xl w-fit pr-3 pl-2 py-0.5 items-center gap-1 ml-4">
        <Image src={titleIcon} alt={title} width={17} height={17} />
        <span className="text-[#B3BBF8] text-[14px]">{title}</span>
      </div>
      {isPending ? (
        <div className="flex flex-col gap-4 ">
          <CardSkeleton />
        </div>
      ) : (
      <motion.ul
        className="flex flex-col gap-4 "
        initial={{ y: "200px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: "0.4" }}
      >
        {items.map((coin, index) => (
          <div key={index}>
            <CardItem coin={coin} />
          </div>
        ))}
      </motion.ul>
    </div>
  );
}

export default Card;
