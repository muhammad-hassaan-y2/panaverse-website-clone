import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Button from '@/components/shared/Button'
import QuarterBoxes from '@/components/shared/QuarterBoxes'
import CoreTrackData from '@/components/shared/CoreTrackData'


const CoreTracks = () => {
  const header ="Core Courses \n (Common in All Specializations)"
    return (
    
    <section className='mt-16 lg:mt-28'>
        <Wrapper>

            {/*Content */}
             <div className='max-w-screen-md mt-4 '>
              <div className='rounded-2xl  w-[800px]  h-52
                bg-opacity-5   z-0 absolute'></div>

                <div className='ml-1 relative '>
              <h4 className='text-primary font-bold text-lg  '>Program of Studies</h4>
              <h2 className={`text-5xl font-bold mt-3 whitespace-pre-line `}>{header}</h2>
              <p className='text-base mt-6 text-slate-600 '>Every participant of the program will 
              start by
                 completing the following three core courses.</p>
                 </div>

                 <div className='mt-10'>
                 <Button text={'Learn More'}/> 
                 </div>


             </div>

             {/*Boxes */}
             <div className=' my-20 flex flex-col md:flex-row gap-x-8 px-14'>

                  <QuarterBoxes header="Quarter I" 
                  description = "CS-101: Object-Oriented Programming using TypeScript"
                  number = {1} />


                  <QuarterBoxes header="Quarter II" 
                  description = "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
                  number = {2} />


                  <QuarterBoxes header="Quarter III" 
                  description = "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
                  number = {3} />
                  </div>
                
               
             

        </Wrapper>
    </section>
  )
}

export default CoreTracks;
