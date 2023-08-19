import React from 'react'
import Navbar from '../Navbar/Navbar';


type Props = {
    children: React.ReactNode;
}

export const Template = ({children}: Props) => {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}
