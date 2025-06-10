import React from "react";
import Card from "../organism/Card";
import hotCoins from "@/data/hotCoins.json";
import newCoins from "@/data/newCoins.json";
import topGainersCoins from "@/data/topGainersCoins.json";
import star from "@/../../public/icons/star.svg";
import rise from "@/../../public/icons/rise.svg";
import fire from "@/../../public/icons/fire.svg";

function OpportunitiesSection() {
  return (
    <div>
      <div>
        <p>New opportunities</p>
        <h1>TRADE YOUR FAVOURITE MARKETS</h1>
        <p>
          Want to buy Bitcoin outright or trade CFDs on Gold or EUR/USD? We've
          got you covered with access to 100+ global markets on one platform.
        </p>
        <button>View All coins</button>
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
