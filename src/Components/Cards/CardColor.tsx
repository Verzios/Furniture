import React from "react";
import { BsHeart } from "react-icons/bs";
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

type Props = {
  photo: string;
  size?: "lg" | "md";
  colors?: Array<string>;
};

export const CardColor = ({ photo, size, colors }: Props) => {
    const [like,setLike] = React.useState(false);
    const likedProduct = () =>{
        setLike(!like);
    }
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${photo})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      className={`${
        size === "lg" ? "h-full w-[500px]" : "h-full w-[300px]"
      } relative`}
    >
      <div className={`flex flex-row justify-end p-4 `} >
        {like?<AiFillHeart style={{fill: 'red',color:'red'}} onClick={likedProduct} size={"20"} className={`transition-colors duration-700 cursor-pointer`}/>:<AiOutlineHeart onClick={likedProduct} color={"white"} size={20} className="cursor-pointer"/>}
        
      </div>
      <div className="absolute bottom-0 w-full bg-white">
        <div className="flex flex-row justify-between w-full pt-2">
          <div>
            <h3 className="uppercase text-gray-600">Corner Sofa Baivin-2</h3>
          </div>
          <div className="flex flex-row gap-1">
            {colors?.map((color: string) => {
              return (
                <p className=" w-6 h-6" style={{ backgroundColor: color }}></p>
              );
            })}
          </div>
        </div>
        <div className="text-start">
          <h4>945 $</h4>
        </div>
        <div></div>
      </div>
    </div>
  );
};
