import React from "react";
import { useTradeExpert } from "../../../features/market/useTradeExpert";
import GoalResultItem from "../GoalsResultItem";

const GoalsResultContainer = () => {
  const { stages } = useTradeExpert();
  return (
    <div className="flex flex-col w-full gap-3 p-2">
      {stages?.map((stage) => (
        <GoalResultItem
          key={stage.count}
          label={`صفقة  ${stage.count + 1}`}
          pureProfit={parseFloat(stage.totalProfit - stage.totalLoss).toFixed(
            2
          )}
          totalLoss={stage.totalLoss}
          totalProfit={stage.totalProfit}
          totalRisk={stage.totalRisk}
        />
      ))}
    </div>
  );
};

export default GoalsResultContainer;
