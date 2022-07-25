import React from "react";
import { useTradeExpert } from "../../../features/market/useTradeExpert";
import NumberInputWrapper from "../FormUI/NumberInput";

const StagesToolbar = () => {
  const { setSpread, spread, handleStagesCountChange, stagesCount } =
    useTradeExpert();
  return (
    <div className="flex items-center justify-between mb-2 pb-2 border-b-2">
      <div>
        <NumberInputWrapper
          label="السبريد"
          value={spread}
          onChange={(e) => setSpread(e.target.value)}
        />
      </div>
      <div>
        <NumberInputWrapper
          label="عدد المراحل"
          value={stagesCount}
          onChange={(e) => handleStagesCountChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default StagesToolbar;
