import React from "react";

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
        <div className="w-[330px] h-[405px] bg-white"></div>
        <div className="w-[330px] h-[405px] bg-white"></div>
        <div className="w-[330px] h-[405px] bg-white"></div>
      </div>
    </div>
  );
}

export default OpportunitiesSection;
