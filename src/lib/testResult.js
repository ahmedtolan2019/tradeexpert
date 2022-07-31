import _ from "lodash";

export const getTestResult = (stageOrder, stagesCount) => {
  let spread = 1;
  let buyArray = _.range(0.1, stagesCount / 10 || 0, 0.1).map((item) =>
    parseFloat(item.toPrecision(2))
  );
  let sellArray = _.range(0.1, stagesCount / 10 || 0, 0.1).map((item) =>
    parseFloat(item.toPrecision(2))
  );
  let goalArray = _.range(1, stagesCount, 1);

  let totalLoss = 0;
  let totalProfit = 0;
  let totalRisk = 0;

  //total profit

  console.log("stageOrder", stageOrder);
  for (let i = 0; i < stageOrder; i++) {
    totalProfit += buyArray[i] * goalArray[i];
  }

  console.log("totalProfit", totalProfit);

  //total loss
  for (let i = 0; i < stageOrder; i++) {
    let sumGoalsSpread = _.sum([..._.range(i + 1, stageOrder, 1), spread]);
    console.log("sumGoalsSpread", sumGoalsSpread);
    totalLoss += sellArray[i] * sumGoalsSpread;
    console.log("Loss " + (i + 1), " = ", totalLoss);
  }
  totalLoss += sellArray[stageOrder] * spread + buyArray[stageOrder] * spread;
  console.log("totalLoss", totalLoss);

  //total risk
  for (let i = 0; i < stageOrder; i++) {
    let sumGoalsSpread = _.sum([..._.range(i + 1, stageOrder + 1, 1), spread]);
    console.log("sumGoalsSpread risk", sumGoalsSpread);
    totalRisk += sellArray[i] * sumGoalsSpread;
  }
  totalRisk += sellArray[stageOrder] * spread + buyArray[stageOrder] * spread;
  console.log("totalRisk", totalRisk);

  console.log(
    "stageOrder\n",
    stageOrder,
    " stagesCount\n",
    stagesCount,
    " spread\n",
    spread,
    " buyArray\n",
    buyArray,
    " sellArray\n",
    sellArray,
    " goalArray\n",
    goalArray
  );

  return {
    totalProfit,
    totalLoss,
    totalRisk,
  };
};
