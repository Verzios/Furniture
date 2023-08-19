import React from 'react'
import { Button } from '../ Button'
import { motion } from 'framer-motion'
type Props = {
    image: string;
    title: string;
    subtitle: string;
    children?: React.ReactNode;
    position?: "top" | "center" | "bottom"
}

const sentence = {
    hidden: {opacity:1},
    visible:{
        opacity: 1,
        transition:{
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}

const letter = {
    hidden: {opacity:0,y:30},
    visible:{
        opacity: 1,
        y: 0,
    }
}
const subtitleAn = {
    hidden: {opacity:0,y:30},
    visible:{
        opacity: 1,
        y: 0,
        transition:{
            delay: .2
        },
    },
    
}
const SingleHero = ({title,subtitle,image,children}: Props) => {
  return (
    <div style={{
        backgroundSize:'cover',
        backgroundPosition: 'center',
        backgroundImage:`linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,0.5)),url(${image})`,
  }} className='h-[40vw]'>
    <div className='w-full h-full justify-center flex flex-col items-start px-32 gap-4 '>
        <motion.h4 variants={letter} initial="hidden" animate="visible" className='text-4xl text-gray-100 font-roboto tracking-widest'>{title}</motion.h4>
        <motion.h5 variants={subtitleAn} initial="hidden" animate="visible" className='text-gray-300 font-roboto tracking-widest text-2xl'>{subtitle}</motion.h5>
        <Button text="Shop Design"/>
    </div>
  </div>
  )
}

export default SingleHero