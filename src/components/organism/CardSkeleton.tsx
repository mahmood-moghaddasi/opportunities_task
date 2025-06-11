import React from "react";

const Skeleton = () => (
  <div className="flex items-center justify-between h-[30px] animate-pulse px-4">
    {/* Circle on the left */}
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-[#2B2C31]" />
      <div className="w-[70px] h-3 bg-[#2B2C31] rounded-2xl"></div>
    </div>
    {/* Text lines on the right */}
    <div className="flex flex-col  w-[70px] h-auto gap-1 items-end">
      <div className="w-full h-2.5 bg-[#2B2C31] rounded" />
      <div className="w-[80%] h-2.5 bg-[#2B2C31] rounded" />
    </div>
  </div>
);

function CardSkeleton() {
  return (
    <div className="flex flex-col gap-8">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}

export default CardSkeleton;
