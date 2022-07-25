import React from "react";

const GoalsResultSummary = () => {
  return (
    <div className="flex  flex-col mt-2 bg-slate-100 justify-between w-full rounded-md shadow-lg shadow-slate-50 border-2 border-stone-100 h-32 p-4">
      <div className="text-2xl">نتائج الكل</div>
      <div className="flex flex-row-reverse gap-3 items-center justify-between">
        <div className="flex  flex-col justify-between items-end">
          <div className="flex-1 text-center"> اجمالي الخسارة </div>
          <div className="flex-1 text-center"> 50 </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="flex-1 text-center"> اجمالي الربح </div>
          <div className="flex-1 text-center"> 50 </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="flex-1 text-center"> اجمالي المخاطرة </div>
          <div className="flex-1 text-center"> 50 </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsResultSummary;
