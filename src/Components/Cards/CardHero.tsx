import React from "react";

type Props = {
    price: string;
    name: string;
    photo: string;
};

export const CardHero = ({photo,name,price}: Props) => {
  return (
    <div
      style={{
        background:
          `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${photo})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
      className="h-[500px] w-[350px] relative"
    >
      <div className="absolute bottom-12 bg-white w-full">
        <div className="p-4 font-roboto font-bold text-gray-400">
          <h4 className="font-roboto font-bold uppercase tracking-widest">{name}</h4>
          <p className="text-gray-500">{price}</p>
        </div>
      </div>
    </div>
  );
};
