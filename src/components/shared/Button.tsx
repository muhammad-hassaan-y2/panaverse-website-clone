import Link from 'next/link';
import React from 'react';
import { FC } from 'react';

const Button:FC<{text: string}> = ({text}) => {
  
    return (
   <Link href={'https://www.piaic.org/'}>
       <button className='px-8 py-3 bg-[#00616c] rounded-3xl text-center text-white
           font-semibold text-lg  hover:scale-105 duration-300 shadow-[0_4px_9px_-4px_#3b71ca] transition  ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
          '>{text}</button>
    </Link>
  )
}


export default Button
