import React from "react";

import Image, { StaticImageData } from "next/image";

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
}

function Card({ coins, title, titleIcon }: CardProps): React.ReactElement {
  return (
    <div className="w-[330px] h-fit  flex flex-col gap-8 px-4 pt-5 pb-6 bg-[#13141A] border rounded-xl border-[#2B2C31]">
      <div className="flex bg-[#101116] rounded-2xl w-fit pr-3 pl-2 py-0.5 items-center gap-1">
        <Image src={titleIcon} alt={title} width={17} height={17} />
        <span className="text-[#B3BBF8] text-[14px]">{title}</span>
      </div>
      <div className="flex flex-col gap-7">
        {coins.map((coin, index) => (
          <div key={index} className="w-full h-fit flex justify-between">
            <div className="flex gap-4 items-center">
              <Image src={coin.logo} alt={coin.name} width={30} height={30} />
              <p className="text-[14px]">
                {coin.name}{" "}
                <span className="text-[#5F6067] ">({coin.pair})</span>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
