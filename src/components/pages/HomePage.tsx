import React from "react";
import OpportunitiesSection from "../templates/OpportunitiesSection";

function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[110vh]"></div>
      <OpportunitiesSection />
      <div className="h-[120vh]"></div>
    </div>
  );
}

export default HomePage;
