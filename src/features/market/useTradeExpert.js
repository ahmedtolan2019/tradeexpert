import { useState, useContext, createContext, useMemo } from "react";

const ctx = createContext();
const { Provider } = ctx;

export const ProvideTradeExpert = ({ children }) => {
  const value = useProvideTradeExpert();
  return <Provider value={value}>{children}</Provider>;
};

/**
 * useTradeExpert - Hook to use TradeExpert
 * @return {{stagesCount:()=>{},handleStagesCountChange:()=>{},handleDealChange:()=>{},spread:number,setSpread:()=>{},deals:{buy:number,sell:number, goal:number, count:number}[],setDeals:{()=>{}},stages:()=>{},setStages:()=>{}}} context
 */
export const useTradeExpert = () => {
  return useContext(ctx);
};
const useProvideTradeExpert = () => {
  //states
  const [stagesCount, setStagesCount] = useState(0);

  const [spread, setSpread] = useState(0);

  const getDealsArray = (length) => {
    console.log("run");
    let arr = [];
    for (let i = 0; i < length; i++) {
      arr.push({
        buy: 0,
        sell: 0,
        goal: 0,
        count: i,
      });
    }

    console.log("arr", arr);

    return arr;
  };

  const [deals, setDeals] = useState([]);
  console.log("stagesCount", stagesCount);
  console.log("deals", deals);
  //utils
  const getStageTotalLoss = (stageCount) => {
    let dealsToThisStage = deals.slice(0, stageCount + 1);

    let totalLoss = 0;
    totalLoss += dealsToThisStage[stageCount]?.sell * spread;

    totalLoss +=
      dealsToThisStage[stageCount + 1]?.sell * spread +
      dealsToThisStage[stageCount + 1]?.buy * spread;

    dealsToThisStage.forEach((deal, i) => {
      //accomualte total loss for this stage
      for (let j = i - 1; j >= 0; j--) {
        totalLoss += dealsToThisStage[j]?.sell * spread;
        totalLoss +=
          dealsToThisStage[j]?.sell * getTotalGoalsValue({ start: j, end: i });
      }
    });
    return totalLoss;
  };

  const getTotalGoalsValue = ({ start, end }) => {
    let totalGoalsValue = 0;
    for (let i = start; i < end; i++) {
      totalGoalsValue += deals[i]?.goal;
    }
    return totalGoalsValue;
  };

  const getTotalProfit = (stageCount) => {
    let totalProfit = 0;
    for (let i = 0; i < stageCount; i++) {
      totalProfit += deals[i]?.buy * deals[i]?.goal;
    }
    return totalProfit;
  };

  const getTotalRisk = (stageCount) => {
    let totalRisk = 0;
    totalRisk += deals[stageCount]?.sell * (spread + deals[stageCount]?.goal);

    totalRisk +=
      deals[stageCount + 1]?.sell * spread +
      deals[stageCount + 1]?.buy * spread;
    for (let i = 0; i < stageCount; i++) {
      for (let j = i - 1; j >= 0; j--) {
        totalRisk += deals[j]?.sell * spread;
        totalRisk +=
          deals[j]?.sell * getTotalGoalsValue({ start: j, end: i + 1 });
      }
    }
    return totalRisk;
  };

  const stages = useMemo(() => {
    return Array.from({ length: stagesCount }, (_, i) => ({
      totalLoss: getStageTotalLoss(i),
      totalProfit: getTotalProfit(i),
      totalRisk: getTotalRisk(i),

      count: i,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stagesCount, setDeals, spread]);

  const handleStagesCountChange = (count) => {
    setStagesCount(count);
    let newDeals = getDealsArray(count);
    console.log("newDeals", newDeals);
    setDeals(newDeals);
  };

  const handleDealChange = (e, index) => {
    let { name, value } = e.target;

    let existedDeal = deals.find((deal) => deal.count === index);
    if (existedDeal) {
      switch (name.split("-")[0]) {
        case "buy":
          existedDeal.buy = parseFloat(value);
          break;
        case "sell":
          existedDeal.sell = parseFloat(value);
          break;
        case "goal":
          existedDeal.goal = parseFloat(value);
          break;
        default:
          break;
      }

      setDeals(
        deals.map((deal) => (deal.count === index ? existedDeal : deal))
      );
    } else {
      console.log("no deal found");
    }
  };

  console.log("stages", stages);

  return {
    stagesCount,
    handleStagesCountChange,
    spread,
    setSpread,
    deals,
    stages,

    handleDealChange,
  };
};
