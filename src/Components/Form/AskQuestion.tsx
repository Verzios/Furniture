import React from 'react'
import { Input } from '../Input/Input'
import { Button } from '../ Button'

type Props = {}

export const AskQuestion = (props: Props) => {
  return (
    <div>
        <div className='flex flex-row gap-4'>
            <Input label="name" type="text"/>
            <Input label="email" type="email"/>

        </div>
        <div className='mt-4'>
        <Input label="message" type="message"/>
        </div>
        <div className='mt-2 '>
          <button className='mt-2 px-8 py-2  bg-slate-950 text-gray-100 hover:bg-gray-100 transition-all duration-500 hover:text-gray-950'>Send</button>
        </div>
    </div>
  )
}

 