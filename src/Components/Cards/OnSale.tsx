import React from "react";
import {motion} from 'framer-motion';
import { QuickView } from "../Modal";
type Props = {};

const buttonVariant={
    hidden: {opacity:0,y:0},
    visible:{
        opacity: 1,
        y: 0,
        transition:{
            delay: .2
        },
    },
}
const saleVariant={
    visible: {opacity:1,y:0},
    hidden:{
        opacity: 0,
        y: 0,
        transition:{
            delay: .2
        },
    },
}
export const OnSale = (props: Props) => {
  const [show,setShow] = React.useState<Boolean>(false);
  const [open,setOpen] = React.useState<Boolean>(false);
  return (
    <div className="flex flex-col relative gap-4" onMouseEnter={()=>setShow(!show)} onMouseLeave={()=>setShow(!show)}>
      <div className="relative">
        <img
          src="https://www.parkmanwoodworks.com/cdn/shop/products/PW1605Large-277582_1080x.jpg?v=1682972005"
          height={250}
        />
        <motion.div className="absolute top-0 justify-end flex w-full" variants={saleVariant} animate={show? "hidden": "visible"}>
          <div className="bg-zinc-900 px-4 py-1">
            <h3 className="uppercase text-gray-100 text-sm">save 400$</h3>
          </div>
        </motion.div>
        <motion.div  className="absolute -top-8 -right-6 justify-end flex w-full" variants={buttonVariant} animate={show? "visible": "hidden"}>
            <motion.button whileHover={{scale:1.1}} className="bg-zinc-900 rounded-full w-16 h-16 flex justify-center items-center text-center cursor-pointer" onClick={()=>setOpen(!open)}>
                <p className="text-sm text-white justify-center">Quick View</p>
            </motion.button>
        </motion.div>
        <div>
            <h2 className="font-roboto text-gray-500 text-xl tracking-widest mt-2">The Benjamin Dining Table</h2>
            <p className="text-gray-600"><span className="line-through">$2,195.00</span> from $1,795.00</p>
        </div>
      </div>
      <QuickView open={open} setIsOpen={setOpen} />
    </div>
  );
};
