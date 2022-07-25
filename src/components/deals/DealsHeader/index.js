import React from "react";

const DealsHeader = () => {
  return (
    <div className=" flex w-full mb-2 justify-between items-center  gap-2">
      <div className=" flex-[4_4_0%] rounded-md  p-2 bg-slate-100 text-2xl ">
        Sell
      </div>
      <div className=" flex-[4_4_0%] rounded-md  p-2  bg-slate-100  text-2xl ">
        Buy
      </div>
      <div className=" flex-[4_4_0%] rounded-md  p-2  bg-slate-100  text-2xl ">
        Goal
      </div>
      <div className=" flex-1 p-2 text-2xl  bg-slate-100 ">م</div>
    </div>
  );
};

export default DealsHeader;
