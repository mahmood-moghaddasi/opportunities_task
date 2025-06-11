"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import CardItem from "./CardItem";
import CardSkeleton from "./CardSkeleton";

interface Coin {
  logo: string;
  name: string;
  pair: string;
  price: number;
  change: number;
}

interface CardProps {
  coins: Coin[];
  title: string;
  titleIcon: StaticImageData;
  isPending: boolean;
}

function Card({
  coins,
  title,
  titleIcon,
  isPending,
}: CardProps): React.ReactElement {
  const [items, setItems] = useState<Coin[]>(coins);
  const [newItem, setNewItem] = useState<Coin | null>(null);
  const [layout, setLayout] = useState<boolean>(true);
  const randomTimer = Math.floor(Math.random() * 1000);

  const addItem = () => {
    if (newItem) {
      setItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const removeItem = () => {
    setLayout(false);
    if (items.length === 0) return;

    const randomNum = Math.floor(Math.random() * Math.min(5, items.length));
    const selectedItem = items[randomNum];
    setNewItem({ ...selectedItem });

    const newItems = items.filter((_, index) => index !== randomNum);
    setItems(newItems);

    setTimeout(() => {
      addItem();
    }, 600);
  };

  const shuffleSomeItems = () => {
    setLayout(true);
    if (items.length < 5) return;

    const updated = [...items];
    const countToShuffle = Math.random() > 0.5 ? 2 : 3;
    const indices: number[] = [];

    while (indices.length < countToShuffle) {
      const r = Math.floor(Math.random() * 5);
      if (!indices.includes(r)) {
        indices.push(r);
      }
    }

    const shuffled = indices
      .map((i) => updated[i])
      .sort(() => Math.random() - 0.5);

    indices.forEach((i, idx) => {
      updated[i] = shuffled[idx];
    });

    setItems(updated);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomChoice = Math.random() > 0.5 ? "remove" : "shuffle";
      if (randomChoice === "remove") {
        removeItem();
      } else {
        shuffleSomeItems();
      }
    }, 4000 + randomTimer * 3);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[330px] h-[391.6px] flex flex-col gap-8 pt-5 pb-6 bg-[#13141A] border rounded-xl border-[#2B2C31]">
      <div className="flex bg-[#101116] rounded-2xl w-fit pr-3 pl-2 py-0.5 items-center gap-1 ml-4">
        <Image src={titleIcon} alt={title} width={17} height={17} />
        <span className="text-[#B3BBF8] text-[14px]">{title}</span>
      </div>

      {isPending ? (
        <div className="flex flex-col gap-4">
          <CardSkeleton />
        </div>
      ) : (
        <motion.ul
          layout={layout}
          className="flex flex-col gap-4"
          initial={{ y: "200px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <AnimatePresence initial={false}>
            {items.slice(0, 5).map((coin) => (
              <CardItem coin={coin} key={coin.name + coin.price} />
            ))}
          </AnimatePresence>
        </motion.ul>
      )}
    </div>
  );
}

export default Card;
