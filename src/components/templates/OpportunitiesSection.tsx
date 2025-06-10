import React from "react";
import Card from "../organism/Card";
import hotCoins from "@/data/hotCoins.json";
import newCoins from "@/data/newCoins.json";
import topGainersCoins from "@/data/topGainersCoins.json";
import star from "@/../../public/icons/star.svg";
import rise from "@/../../public/icons/rise.svg";
import fire from "@/../../public/icons/fire.svg";
import stats from "@/../../public/icons/stats.svg";
import Image from "next/image";
import arrow from "@/../../public/icons/arrow.svg";
function OpportunitiesSection() {
  return (
    <div className="pt-10 flex flex-col gap-10">
      <div className="items-center flex flex-col gap-7">
        <div className="border border-[#2B2C31] rounded-4xl px-2 py-1 flex items-center gap-[2px]">
          <Image src={stats} alt="stats" width={22} height={22} />
          <p className="text-[14px]">New opportunities</p>
        </div>
        <h1 className="text-3xl">
          <span className="text-[#676DF6]">TRADE</span> YOUR FAVOURITE MARKETS
        </h1>
        <p className="w-[500px] text-[12px] text-center text-[#616267]">
          Want to buy Bitcoin outright or trade CFDs on Gold or EUR/USD? We've
          got you covered with access to 100+ global markets on one platform.
        </p>
        <button className="bg-[#7277F7] px-8 py-2 rounded-[10px] text-[14px] font-bold flex items-center gap-1">
          View All coins
          <Image src={arrow} alt="arrow" width={25} height={20} />
        </button>
      </div>
      <div className="flex gap-3">
        <Card coins={hotCoins} title={"Hot List"} titleIcon={fire} />
        <Card coins={newCoins} title={"New Coins"} titleIcon={star} />
        <Card coins={topGainersCoins} title={"Top Gainers"} titleIcon={rise} />
      </div>
    </div>
  );
}

export default OpportunitiesSection;
