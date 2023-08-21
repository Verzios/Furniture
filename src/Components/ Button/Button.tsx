import React from 'react'

type Props = {
    text: string;
    icon ?: string;
    bgColor?: string;
}

export const Button = ({text,icon,bgColor}: Props) => {
  return (
    <div style={{backgroundColor: bgColor ? bgColor: "transparent"}} className='cursor-pointer rounded-md p-4 border-2 w-full border-white text-gray-100 hover:bg-white hover:text-gray-800 transition-all duration-500'>{text}</div>
  )
}