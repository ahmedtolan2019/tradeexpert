import React from "react";
import StagesToolbar from "../../components/common/StagesToolbar";
import DealsContainer from "../../components/deals/DealsContainer";
import GoalsResultContainer from "../../components/Goals/GoalsResultContainer";
import GoalsResultSummary from "../../components/Goals/GoalsResultSummary";

const DashboardScreen = () => {
  return (
    <div className="grid max-w-6xl text-right h-full p-4 py-6 mx-auto  grid-cols-12 grid-rows-12 gap-6">
      <div className="box flex flex-col gap-4 divide-y-2 bg-white shadow-lg  shadow-slate-200 p-4  rounded-lg row-start-1 row-end-8 col-span-7">
        <div className=" text-2xl font-semibold text-slate-800 ">
          نتائج الاهداف
        </div>
        <div className="h-full">
          <GoalsResultContainer />
        </div>
        <div className="">
          <GoalsResultSummary />
        </div>
      </div>
      <div className="box  h-full  flex flex-col gap-4 rounded-lg col-span-5 bg-white shadow-lg  shadow-slate-200 p-4">
        <div className="">
          <StagesToolbar />
        </div>
        <div className="">
          <DealsContainer />
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
