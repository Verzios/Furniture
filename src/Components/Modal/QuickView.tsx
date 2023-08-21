import React from "react";
import "./modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { Dropdown, Texture } from "../ Button";
import { AskQuestion } from "../Form";
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
      <div className="modal-content border-2 rounded p-4 items-center  flex justify-center min-h-[40vw] w-[60vw]">
        <div className="flex w-full justify-end">
          <AiOutlineClose
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
          />
        </div>
        <div className="flex w-full justify-between gap-12  mt-8 ">
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
          <div className="overflow-y-scroll h-[30vw] px-4">
            <h2 className="font-roboto text-gray-500 text-2xl tracking-widest mt-2">
              The Benjamin Dining Table
            </h2>
            <p className="text-gray-600 mt-4">
              <span className="line-through">$2,195.00</span> from $1,795.00
            </p>
            <hr className="mt-8" />

            <div className="mt-8 flex flex-col ">
              <h5 className="text-sm font-bold tracking-widest">SIZE</h5>
              <div className="mt-4 flex justify-start gap-2 flex-wrap">
                <button className={`border-2 p-2 border-gray-800`}>
                  24" diameter
                </button>
                <button className={`border-2 p-2`}>24" diameter</button>
                <button className={`border-2 p-2`}>24" diameter</button>
                <button className={`border-2 p-2`}>24" diameter</button>
              </div>
              <h6 className="text-gray-600 mt-2">
                Need custom sizing or other specifactions?
                <span className="text-gray-900">Click Here</span>
              </h6>
              <h6 className="mt-4">
                <span className="font-bold  ">Wood Type</span> — reclaimed
                douglas fir - preserved texture{" "}
              </h6>
              <div className="mt-4 flex flex-row gap-2 flex-wrap">
                <Texture background="https://www.parkmanwoodworks.com/cdn/shop/files/reclaimed-douglas-fir-preserved-patina_50x50.png" />
                <Texture background="https://www.parkmanwoodworks.com/cdn/shop/files/reclaimed-douglas-fir-natural-blonde_50x50.png" />
                <Texture background="https://www.parkmanwoodworks.com/cdn/shop/files/naturally-fallen-elm_50x50.png" />
                <Texture background="https://www.parkmanwoodworks.com/cdn/shop/files/naturally-fallen-elm_50x50.png" />
                <Texture background="https://www.parkmanwoodworks.com/cdn/shop/files/naturally-fallen-elm_50x50.png" />
              </div>
              <h6 className="mt-2">
                Not sure which wood to choose? Learn about Our Materials{" "}
                <span className="cursor-pointer font-bold">here.</span>
              </h6>
              <div className="mt-4 flex flex-col gap-4">
                <Dropdown title="Ask a question">
                  <AskQuestion />
                </Dropdown>
                <Dropdown title="Specifications">
                   <p className="max-w-[500px]">
                    Made from: - 1.5"-thick solid wood tabletop and legs made
                    from SoCal-sourced lumber (reclaimed Douglas fir or urban
                    lumber) - 3.5"-wide legs Default Table Height: 18" Finishes:
                    - Reclaimed wood finished with matte water-based conversion
                    varnish - Urban lumber finished with satin-matte hard-wax
                    oil - See Care Instructions page for more information on
                    wood and metal finishes. Additional: - Email us at
                    Furniture@ParkmanWoodworks.com for additional questions
                    about product specifications. 
                   </p> 
                </Dropdown>
                <Dropdown title="Shipping Information"> </Dropdown>
                <Dropdown title="Description"> </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
