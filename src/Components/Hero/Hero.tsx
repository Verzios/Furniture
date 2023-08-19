import React from "react";
import { BigCard, CardHero } from "../Cards";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative px-0 h-[50vw]">
      {/* <div className="absolute top-1/3 left-[33%] text-[82px] z-10 tracking-wider text-[#ab8156] uppercase  flex flex-col font-semibold gap-4 font-roboto">
        <h3 className="">
          Made
        </h3>
        <h3>For You</h3>
      </div> */}
      <div className="pl-6 mt-6 flex flex-row justify-between ">
        <div className="flex flex-col flex-none justify-center items-center px-12"><h4>.</h4><h4>.</h4><h4>.</h4><h4>.</h4><h4>.</h4></div>
        <div className="flex flex-1 items-center">
          <CardHero
            photo="https://media.istockphoto.com/id/1266344041/photo/3d-rendering-of-rough-edge-plank-dining-table.jpg?s=612x612&w=0&k=20&c=jJZvW8F_WdvJSIAZ5iJMVRChxyBQEuOdX-gTMc9qeRc="
            price="20 $"
            name="Wooden table"
          />
        </div>

        <div>
          <BigCard
            photo="https://media.istockphoto.com/id/1266344041/photo/3d-rendering-of-rough-edge-plank-dining-table.jpg?s=612x612&w=0&k=20&c=jJZvW8F_WdvJSIAZ5iJMVRChxyBQEuOdX-gTMc9qeRc="
            price="20 $"
            name="Wooden table"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
