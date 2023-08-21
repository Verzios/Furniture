import React from 'react'

type Props = {
    background: string;
}

export const Texture = ({background}: Props) => {
  return (
    <div className='border-2 w-10 h-10 rounded-full   flex justify-center items-center'>
        <button className='w-8 h-8 rounded-full   ' style={{backgroundImage:`url(${background})`,backgroundSize:'cover'}}></button>
    </div>
  )
}
 