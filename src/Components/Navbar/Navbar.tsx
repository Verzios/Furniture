import React from "react";
import {AiOutlineHeart} from 'react-icons/ai'
import {BsBag,BsHeart, BsSearch} from 'react-icons/bs'
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="px-12 py-6 sticky top-0 bg-slate-50 z-20">
      <div className="flex flex-row items-center gap-14 justify-between">
        <div className="flex flex-row gap-14 items-center">
          <h1 className="font-bold font-roboto text-2xl tracking-wider">
            COSY
          </h1>
          <div className="flex flex-row gap-8 font-roboto text-gray-500">
            <h3 className="underline underline-offset-8">Shop</h3>
            <h3>Catalog</h3>
            <h3>About</h3>
            <h3>Contacts</h3>

          </div>
        </div>
        <div className="flex flex-row gap-14">
          <h4 className="text-gray-400">+30 2104511835</h4>
          <div className="flex flex-row items-center gap-4">
          <BsHeart />
          <BsSearch/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
