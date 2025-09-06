import React from "react";

type Props = {
  item: {
    label: string;
    name: string;
  };
  value: string;
};

const Input = ({ item, value }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={item.name}>{item.label}</label>
      <input
        defaultValue={value}
        type="text"
        id={item.name}
        name={item.name}
        className="shadow rounded-lg py-1 px-3 bg-white"
      />
    </div>
  );
};

export default Input;
