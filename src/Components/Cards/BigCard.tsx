import React from "react";

type Props = {
  name: string;
  price: string;
  photo: string;
};

export const BigCard = ({ name, price, photo }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${photo})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: 'no-repeat'
      }}
      className="h-[600px] w-[750px] relative"
    >
      <div className="absolute bottom-0 bg-white w-5/12">
        <div className="p-4 font-roboto font-bold text-gray-400">
          <h4 className="font-roboto font-bold uppercase tracking-widest">{name}</h4>
          <p className="text-gray-500">{price}</p>
        </div>
      </div>
    </div>
  );
};
