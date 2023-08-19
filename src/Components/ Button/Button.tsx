import React from 'react'

type Props = {
    text: string;
    icon ?: string;
}

export const Button = ({text,icon}: Props) => {
  return (
    <div className='cursor-pointer rounded-md p-4 border-2 border-white text-gray-100 hover:bg-white hover:text-gray-800 transition-all duration-500'>{text}</div>
  )
}