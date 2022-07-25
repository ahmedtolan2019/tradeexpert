import React from "react";

const GoalResultItem = ({
  totalLoss,
  totalRisk,
  totalProfit,
  pureProfit,
  label,
}) => {
  return (
    <div className="flex  flex-col justify-between w-full rounded-md shadow-lg shadow-slate-50 border-2 border-stone-100 h-32 p-4">
      <div className="text-2xl">{label}</div>
      <div className="flex flex-row-reverse gap-3 items-center justify-between">
        <div className="flex flex-col justify-between items-end">
          <div className="flex-1 text-center"> اجمالي الربح </div>
          <div className="flex-1 text-center"> {totalProfit} </div>
        </div>
        <div className="flex  flex-col justify-between items-end">
          <div className="flex-1 text-center"> اجمالي الخسارة </div>
          <div className="flex-1 text-center"> {totalLoss} </div>
        </div>
        <div className="flex  flex-col justify-between items-end">
          <div className="flex-1 text-center"> صافي الربح </div>
          <div className="flex-1 text-center"> {pureProfit} </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="flex-1 text-center"> اجمالي المخاطرة </div>
          <div className="flex-1 text-center"> {totalRisk} </div>
        </div>
      </div>
    </div>
  );
};

export default GoalResultItem;
