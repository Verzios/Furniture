import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import {motion} from 'framer-motion'
type Props = {
  title: string;
  children: React.ReactNode;
};
 
export const Dropdown = ({ title,children }: Props) => {
    const [isOpen,setIsOpen] = React.useState(false);
  return (
    <>
      <div>
        <div className="flex flex-row justify-between py-4 items-center cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
          <div>
            <h4 className="font-bold text-sm uppercase">{title}</h4>
          </div>
          <motion.div className="font-bold " animate={{rotateZ: isOpen? 180: 0 }}>
            <AiOutlineArrowDown className="font-bold" size={18} />
          </motion.div>
        </div>
        <motion.div className="py-2" initial={false} animate={{height: isOpen? "auto":  0,opacity: isOpen? 1:0, zIndex: isOpen? 10: -10,position:'relative'}}>
            {children}
        </motion.div>
        <hr className="mt-1"/>
      </div>
     
    </>
  );
};
