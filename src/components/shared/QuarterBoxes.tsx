import React from 'react';
import { FC } from 'react';



interface IProps {
    header: string,
    description: string,
    number: number,
    haveBorder? : Boolean,
}

const QuarterBoxes:FC<IProps> = ({header, description, number, haveBorder = true}) => {
  return (
    <div className={` rounded-md relative -left-7  flex-1 flex
                   flex-col justify-center px-8 py-12 xl:py-16 ${haveBorder && "border"} `}>
                  <h4 className='font-bold text-lg'>{header}</h4>
                  <p className='mt-2 text-slate-600 z-0'>{description}</p>
                  <div className='absolute -top-10 right-10 text-[170px] font-extrabold -z-10
                   text-gray-200'>{number}</div>
              </div>
  )
}

export default QuarterBoxes
