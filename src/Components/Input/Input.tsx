import React from "react";

type Props = {
  label: string;
  type: "text" | "number" | "password" | "email" | "message"
};

export const Input = ({label,type}: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full ">
      <label className="capitalize text-sm">{label}</label>
      {type !== "message" ? <input type={type} className="p-2 border-2 border-gray-400 w-full"/> : <textarea className="border-2 border-gray-400"></textarea>}
    </div>
  );
};
