"use client"


import React, { useState } from 'react';
import Wrapper from '@/components/shared/Wrapper';
import QuarterBoxes from '@/components/shared/QuarterBoxes';
import Image from 'next/image';
import { ProgramData } from './Data';





export const SpecializedTracks = () => {

   const [selectedItem, setSelectedItem] = useState("wmd") 
   const selectedItemData = ProgramData.find((item) => item.slug === selectedItem )

  return (
       <section>
        
        <Wrapper>
          
            {/* Header */}
            <div>
           <h2 className={`text-5xl font-bold mt-3 whitespace-pre-line`}>Specialized Tracks:</h2>
              <p className='text-xl mt-6 text-slate-600 max-w-screen-sm'>After completing the first three quarters
               the participants will select one or more specializations consisting of two courses 
               each:  </p>
               </div>
               
               <div className='mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8'>

            {/* Content Left */}

            <div className='shadow-xl rounded-xl border border-slate-200 py-8 px-8 w-8/12 self-start sticky top-28
             mt-3 ml-10'>
              <h4 className=' text-pr text-lg mt-3 font-medium'>Specialized Program</h4>
              <h3 className='text-2xl font-extrabold mt-4'>{selectedItemData?.header}
              </h3>
              <p className='text-lg text-slate-600 mt-4'>{selectedItemData?.description}</p>
                 <button className='text-primary text-xl mt-4 underline flex items-end gap-x-2
                 '>Learn More
                 <svg className='mb-1.5' width="10" height="13" viewBox="0 0 8 11" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C"
                   strokeWidth="2"/>
                 </svg>
                 </button>
                  

                 <div className='flex flex-col sm:flex-row gap-5  mt-16 ml-4'>
                 {
                    
                    selectedItemData?.quarters.map((item) => (
                         
                      <div>
                      <QuarterBoxes 
                      key = {item.number}
                 header= {item.header}
                 description = {item.description}
                 number = {item.number}
                 haveBorder={false}/>

            

                 </div>
                      
                      
                    ))

                  }

                 

                 </div>
                  </div>
 

                 {/* Content Right */}
                  
                 <div className='flex-1 space-y-4 ml-4 px-4 py-6 w-4/12   '>

                  {
                    ProgramData.map((item, i) => (
                      <div>
                      
                      <div onClick={() => setSelectedItem(item.slug)} key={item.slug} className=' flex gap-x-4 items-center cursor-pointer '>
                    <div className='flex-shrink-0 w-36 h-24'>
                      {/*<div className='w-20 h-16 rounded bg-red-400'></div> */}
                      <Image src={item.image} alt={item.header} className=' h-24 rounded-md object-cover' />


                      
                    
                     </div>
                     <div>
                      <h4 className='text-primary font-medium'>Speacialized program</h4>
                      <p className='font-semibold text-xl'>{item.header}</p>
                       </div>
                       
                      </div>

                      <div className='border-t-4 border-gra mt-10 w-80 '></div>
                      </div>
                      

                     
                    
                     ))

                     }
                    
                    
                     
                   



                    

                 </div>

                 
                 



                 </div>
                 </Wrapper>
                 </section>
                 
                   )
                   
                 }
             
                       