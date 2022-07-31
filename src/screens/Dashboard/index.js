import React from "react";
import NumberInputWrapper from "../../components/common/FormUI/NumberInput";
import StagesToolbar from "../../components/common/StagesToolbar";
import DealsContainer from "../../components/deals/DealsContainer";
import GoalsResultContainer from "../../components/Goals/GoalsResultContainer";
import GoalResultItem from "../../components/Goals/GoalsResultItem";
import GoalsResultSummary from "../../components/Goals/GoalsResultSummary";
import { useTradeExpert } from "../../features/market/useTradeExpert";
import { getTestResult } from "../../lib/testResult";

const DashboardScreen = () => {
  const [currentTestStage, setCurrentTestStage] = React.useState({
    order: 0,
    totalProfit: 0,
    totalLoss: 0,
    totalRisk: 0,
  });
  const { stagesCount } = useTradeExpert();
  const handleChange = (e) => {
    //set stage order value
    const { value } = e.target;

    const { totalProfit, totalLoss, totalRisk } = getTestResult(
      Number(value),
      Number(stagesCount) + 1
    );

    setCurrentTestStage({
      ...currentTestStage,
      order: Number(value),
      totalProfit,
      totalLoss: parseFloat(totalLoss.toFixed(2)),
      totalRisk: parseFloat(totalRisk.toFixed(2)),
    });
  };

  return (
    <div className="grid max-w-7xl text-right h-full p-4 py-6 mx-auto  grid-cols-12 grid-rows-12 gap-6">
      <div className="box flex flex-col gap-4 divide-y-2 bg-white shadow-lg  shadow-slate-200 p-4  rounded-lg row-start-1 row-end-4 col-span-3">
        <div className=" text-2xl font-semibold text-slate-800 ">
          اختبار النتائج{" "}
        </div>
        <div className="h-full">
          <div className="py-2 flex flex-col gap-2">
            <NumberInputWrapper
              label={"ادخل رقم الصفقة"}
              name="dealNumber"
              value={currentTestStage.order}
              onChange={handleChange}
            />
            <GoalResultItem
              label={`صفقة  ${currentTestStage.order}`}
              totalLoss={currentTestStage.totalLoss}
              totalProfit={currentTestStage.totalProfit}
              totalRisk={currentTestStage.totalRisk}
            />
          </div>
        </div>
        {/* <div className="">
          <GoalsResultSummary />
        </div> */}
      </div>
      <div className="box flex flex-col gap-4 divide-y-2 bg-white shadow-lg  shadow-slate-200 p-4  rounded-lg row-start-1 row-end-4 col-span-5">
        <div className=" text-2xl font-semibold text-slate-800 ">
          نتائج الاهداف
        </div>
        <div className="h-full">
          <GoalsResultContainer />
        </div>
        {/* <div className="">
          <GoalsResultSummary />
        </div> */}
      </div>
      <div className="box  h-full  flex flex-col gap-4 rounded-lg col-span-4 bg-white shadow-lg  shadow-slate-200 p-4">
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
