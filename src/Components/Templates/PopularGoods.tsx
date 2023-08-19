import React from "react";
import { CardColor } from "../Cards/CardColor";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
type Props = {
    
};

export const PopularGoods = (props: Props) => {
  return (
    <div className="text-center relative h-screen pt-12 mt-12">
      <div className="flex flex-row justify-between  px-64">
        <div></div>
        <div>
          <h3 className="font-roboto text-4xl font-bold tracking-widest text-gray-700 uppercase">
            Popular Goods
          </h3>
        </div>
        <div className="underline underline-offset-8">
          <h6>SEE ALL</h6>
        </div>
      </div>
      <div className="flex flex-row mt-12 justify-between px-12 items-center">
        <div className="border-2 rounded-full p-2 border-gray-400 cursor-pointer shadow-lg">
          <AiOutlineArrowLeft size={24}/>
        </div>
        <div className="flex flex-row h-[40vw] gap-4">
          <div className="bg-red-500">
            <CardColor
              photo="https://media.istockphoto.com/id/1266344041/photo/3d-rendering-of-rough-edge-plank-dining-table.jpg?s=612x612&w=0&k=20&c=jJZvW8F_WdvJSIAZ5iJMVRChxyBQEuOdX-gTMc9qeRc="
              size={"lg"}
              colors={['#f32321','#aa1232']}
            />
          </div>
          <div className="gap-2 flex flex-col">
            <div className="h-1/2">
              <CardColor
                photo="https://media.istockphoto.com/id/1266344041/photo/3d-rendering-of-rough-edge-plank-dining-table.jpg?s=612x612&w=0&k=20&c=jJZvW8F_WdvJSIAZ5iJMVRChxyBQEuOdX-gTMc9qeRc="
                size={"md"}
              />
            </div>
            <div className="h-1/2">
              <CardColor
                photo="https://media.istockphoto.com/id/1266344041/photo/3d-rendering-of-rough-edge-plank-dining-table.jpg?s=612x612&w=0&k=20&c=jJZvW8F_WdvJSIAZ5iJMVRChxyBQEuOdX-gTMc9qeRc="
                size={"md"}
              />
            </div>
          </div>
          <div className="gap-2 flex flex-col">
            <div className="h-1/2">
              <CardColor
                photo="https://media.istockphoto.com/id/1266344041/photo/3d-rendering-of-rough-edge-plank-dining-table.jpg?s=612x612&w=0&k=20&c=jJZvW8F_WdvJSIAZ5iJMVRChxyBQEuOdX-gTMc9qeRc="
                size={"md"}
              />
            </div>
            <div className="h-1/2">
              <CardColor
                photo="https://media.istockphoto.com/id/1266344041/photo/3d-rendering-of-rough-edge-plank-dining-table.jpg?s=612x612&w=0&k=20&c=jJZvW8F_WdvJSIAZ5iJMVRChxyBQEuOdX-gTMc9qeRc="
                size={"md"}
              />
            </div>
          </div>
        </div>
        <div className="border-2 rounded-full p-2 border-gray-400 cursor-pointer shadow-lg">
          <AiOutlineArrowRight size={24}/>
        </div>
      </div>
    </div>
  );
};
