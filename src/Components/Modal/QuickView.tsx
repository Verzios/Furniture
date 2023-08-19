import React from "react";
import "./modal.css";
import { AiOutlineClose } from "react-icons/ai";
type Props = {
  open: Boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<Boolean>>;
};

export const QuickView = ({ open, setIsOpen }: Props) => {
  console.log(open);
  return (
    <div
      id="myModal"
      className="modal mx-auto bg-red-500 flex justify-center items-center w-screen h-screen"
      style={{ display: open ? "flex" : "none" }}
    >
      <div className="modal-content border-2 rounded p-4 items-center  flex justify-center min-h-[50vw] w-[80vw]">
        <div className="flex w-full justify-end">
          <AiOutlineClose
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
          />
        </div>
        <div className="flex w-full justify-between  mt-8 px-24">
          <div className="flex h-[5vw] gap-2">
            <div className="flex flex-col gap-2">
              <img src="https://www.parkmanwoodworks.com/cdn/shop/products/1G1B1816_100x.jpg?v=1677117906" />
              <img src="https://www.parkmanwoodworks.com/cdn/shop/products/1G1B1816_100x.jpg?v=1677117906" />
              <img src="https://www.parkmanwoodworks.com/cdn/shop/products/1G1B1816_100x.jpg?v=1677117906" />
            </div>
            <div>
              <img
                src="https://www.parkmanwoodworks.com/cdn/shop/products/PW1403Large-464825_720x.jpg?v=1682958392"
                className="w-[400px]"
              />
            </div>
          </div>
          <div>
            <h2 className="font-roboto text-gray-500 text-2xl tracking-widest mt-2">
              The Benjamin Dining Table
            </h2>
            <p className="text-gray-600">
              <span className="line-through">$2,195.00</span> from $1,795.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
