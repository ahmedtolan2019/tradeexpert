import React from "react";

const NumberInputWrapper = ({ label, name, value, onChange }) => {
  return (
    <div className="">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
          {label}
        </label>
      )}
      <input
        value={value}
        onChange={onChange}
        name={name}
        inputMode="numeric"
        type="number"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      />
    </div>
  );
};

export default NumberInputWrapper;
