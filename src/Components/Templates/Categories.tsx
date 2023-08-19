import React from "react";

type Props = {};

export const Categories = (props: Props) => {
  return (
    <div className="h-[50vw] text-center">
      <h4 className="font-roboto tracking-widest font-semibold text-2xl">
        WHAT'LL IT BE?
      </h4>
      <div className="px-32 bg-red-500 mt-12 h-[40vw] w-inherit">
        <div className="bg-gray-600 h-full flex flex-row">
          <div  >
            <img src="https://www.parkmanwoodworks.com/cdn/shop/collections/7B5A5689_1296x.jpg?v=1685068119"/>
          </div>
          <div>2</div>
          <div>3</div>
          <div><img src="https://www.parkmanwoodworks.com/cdn/shop/collections/7B5A7249_540x.jpg?v=1685069183"/></div>
          <div>5</div>
          <div>6</div>
        </div>
      </div>
    </div>
  );
};
