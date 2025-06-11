"use client";
import React, { useRef } from "react";
import Card from "../organism/Card";
import coins from "@/data/coins.json";

import star from "@/../../public/icons/star.svg";
import rise from "@/../../public/icons/rise.svg";
import fire from "@/../../public/icons/fire.svg";
import stats from "@/../../public/icons/stats.svg";
import Image from "next/image";
import arrow from "@/../../public/icons/arrow.svg";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};
const wordAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: 0.4 } },
};

function OpportunitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  console.log(isInView);
  const words =
    "Want to buy Bitcoin outright or trade CFDs on Gold or EUR/USD? We've got you covered with access to 100+ global markets on oneplatform.";
  return (
    <>
      <div ref={ref} className="pt-10 flex flex-col gap-10 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(155, 137, 246, 0.4) 0%, rgba(30,30,47,0.2) 50%, transparent 80%)",
            filter: "blur(150px)",
            zIndex: 1,
          }}
        ></motion.div>
        <div className="items-center flex flex-col gap-7">
          <div className="border border-[#2B2C31] rounded-4xl px-2 py-1 flex items-center gap-[2px]">
            <Image src={stats} alt="stats" width={22} height={22} />
            <p className="text-[14px]">New opportunities</p>
          </div>
          <motion.h1
            className="text-3xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-[#676DF6]">TRADE</span> YOUR FAVOURITE MARKETS
          </motion.h1>
          <motion.div
            className="w-[500px] text-[12px] text-center text-[#616267]"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {words.split(" ").map((word, index) => (
              <motion.span key={index} variants={wordAnimation}>
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
          <button className="bg-[#7277F7] px-8 py-2 rounded-[10px] text-[14px] font-bold flex items-center gap-1 cursor-pointer">
            View All coins
            <Image src={arrow} alt="arrow" width={25} height={20} />
          </button>
        </div>
        <div className="flex gap-3">
          <Card
            fetchData={isInView}
            coins={coins}
            title={"Hot List"}
            titleIcon={fire}
          />
          <Card
            fetchData={isInView}
            coins={coins}
            title={"New Coins"}
            titleIcon={star}
          />
          <Card
            fetchData={isInView}
            coins={coins}
            title={"Top Gainers"}
            titleIcon={rise}
          />
        </div>
      </div>
    </>
  );
}

export default OpportunitiesSection;
