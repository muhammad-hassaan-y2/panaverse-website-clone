import React from 'react';
import { FC } from 'react';

const Button:FC<{text: string}> = ({text}) => {
  
    return (
   
       <button className='px-8 py-3 bg-[#00616c] rounded-3xl text-center text-white
           font-semibold text-lg shadow-lg hover:scale-105 duration-300
          '>{text}</button>
  )
}


export default Button
