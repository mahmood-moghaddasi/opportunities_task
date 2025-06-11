"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import sw from "@/../../public/icons/switch.svg";

interface coin {
  logo: string;
  name: string;
  pair: string;
  price: number;
  change: number;
}
interface CardItemProps {
  coin: coin;
}
function CardItem({ coin }: CardItemProps) {
  const [showDrag, setShowDrag] = useState(false);
  return (
    <motion.li
      className="w-full h-fit flex justify-between relative hover:bg-[#0C0C14] px-4 cursor-pointer "
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.45 }}
      layout
      onMouseEnter={() => setShowDrag(true)}
      onMouseLeave={() => setShowDrag(false)}
    >
      {showDrag && (
        <div
          className="absolute size-[18px] right-[-8px] top-[14.5px] bg-[#7277F7]
        rounded-[3px] flex items-center justify-center cursor-pointer "
        >
          <Image src={sw} alt="switch" width={14} height={14} />
        </div>
      )}
      <div className="flex gap-4 items-center">
        <Image src={coin.logo} alt={coin.name} width={30} height={30} />
        <p className="text-[14px]">
          {coin.name} <span className="text-[#5F6067] ">({coin.pair})</span>
        </p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-[14px]">{coin.price}</p>

        {coin.change > 0 ? (
          <span className="text-[#236A5C]">+{coin.change}%</span>
        ) : (
          <span className="text-[#922C43]">{coin.change}%</span>
        )}
      </div>
    </motion.li>
  );
}

export default CardItem;
