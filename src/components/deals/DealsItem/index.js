import React from "react";
import NumberInputWrapper from "../../common/FormUI/NumberInput";
import DealsCount from "../DealsCount";

const DealsItem = ({
  buyValue,
  buyName,
  sellValue,
  sellName,
  goalValue,
  goalName,
  count,
  onChange,
}) => {
  return (
    <div className=" w-full pt-2 flex justify-between gap-2 items-center">
      <div className="flex-[4_4_0%]">
        <NumberInputWrapper
          value={sellValue}
          name={sellName}
          onChange={onChange}
        />
      </div>
      <div className="flex-[4_4_0%]">
        <NumberInputWrapper
          value={buyValue}
          name={buyName}
          onChange={onChange}
        />
      </div>
      <div className="flex-[4_4_0%]">
        <NumberInputWrapper
          value={goalValue}
          name={goalName}
          onChange={onChange}
        />
      </div>
      <div className="flex-1 text-center">
        <DealsCount count={count} />
      </div>
    </div>
  );
};

export default DealsItem;
