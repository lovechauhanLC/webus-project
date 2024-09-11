import React from "react";
import Feature from "./Feature";

const RightCore = ({
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  para,
  heading,
}: any) => {
  return (
    <div>
      <h1 className="w-[550px] h-[65px] absolute inset-y-[1214px] inset-x-[90px] text-6xl leading-[64px] font-light ">
        Core Expertise
      </h1>
        <div className="absolute inset-y-[1350px] inset-x-[475px] w-[865px] h-[530px] border-t border-r border-b border-black p-12 ">
          {/* Heading Section */}
          <h2 className=" font-geomanist text-[25px] font-bold leading-[40px] text-left">
            {heading}
          </h2>
          <p className="mt-2 mb-8 font-geomanist text-[16px] font-normal leading-[25px] text-left">
            {para}
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-7 mt-[80px] ">
            <Feature title={title1} />
            <Feature title={title2} />
            <Feature title={title3} />
            <Feature title={title4} />
            <Feature title={title5} />
            <Feature title={title6} />
          </div>

          {/* Explore Button */}
          {/* <div className="mt-8 w-[103.38px] h-[47px] top-[437px] left-[425.5px] p-[10px_12px] gap-[10px] border-t border-black border-x-2	border-y-2">
        <button className=" h-[47px] ">
            explore <span className=" w-[12px] h-[14px] gap-0 border-t-2 border-transparent  rotate-[-45deg]">↗️</span>
        </button>
    </div> */}

          <button className="border border-black p-2 w-28 h-12 flex flex-row justify-between px-4 font-semibold mt-[40px] hover:bg-red-500 hover:text-white hover:border-none duration-300 ">
            <p>Explore</p>
            <span className=" w-[12px] h-[14px] gap-0 border-t-2 border-transparent">
              ↗️
            </span>
          </button>
        </div>
      
    </div>
  );
};

export default RightCore;
