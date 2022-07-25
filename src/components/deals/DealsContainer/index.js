import React from "react";
import DealsHeader from "../DealsHeader";
import DealsItem from "../DealsItem";
import { IoIosArrowDown } from "react-icons/io";
import { useTradeExpert } from "../../../features/market/useTradeExpert";

const DealsContainer = () => {
  const { deals, handleDealChange } = useTradeExpert();
  console.log(deals[0]?.count);
  return (
    <div className="flex flex-col  items-end justify-center gap-2">
      <DealsHeader />
      <div className="flex flex-col h-full  scroll-smooth w-full scroll-p-8 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-gray-200  scrollbar-track-gray-100   items-end justify-center gap-2 ">
        {deals?.map((deal) => (
          <DealsItem
            key={deal?.count}
            buyValue={deal.buy}
            buyName={`buy-${deal.count}`}
            sellValue={deal.sell}
            sellName={`sell-${deal.count}`}
            goalValue={deal.goal}
            goalName={`goal-${deal.count}`}
            count={deal.count + 1}
            onChange={(e) => handleDealChange(e, deal.count)}
          />
        ))}
      </div>
      <div className="flex items-center text-3xl justify-center mt-6 w-full">
        <IoIosArrowDown className=" fixed text-slate-900" />
      </div>
    </div>
  );
};

export default DealsContainer;
