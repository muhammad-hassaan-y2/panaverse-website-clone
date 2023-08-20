import React from 'react';
import Wrapper from '@/components/shared/Wrapper';
import Image from 'next/image';
import HeroPoster from "@/app/assets/images/hero-poster.webp";

// COMPONENTS
import Button from '@/components/shared/Button';


const Hero = () => {
  return (
    <section className='  '>
    <Wrapper>
    <div className='flex flex-col md:flex-row items-center'>
      {/* Left Side */}
      <div className='flex-1'>
        <h4 className='text-teal-700 font-bold text-lg mt-4'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
        <h1 className={`text-5xl font-bold mt-3 sm:text-6xl`}>Certified Web 3.0 and Metaverse Developer</h1>
        <p className='text-xl mt-6 text-slate-600'>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting<br />
         Ready for the Next Generation of the Internet</p>
         <p className='text-lg mt-1 text-slate-600'>Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge,
          Ambient Computing/IoT, Network Automation, and Bioinformatics<br/>
          Technologies</p>
          
          <div className='mt-14'>
          <Button text={"Enroll Now"}/>
          </div>
          

      </div>


      {/* Right Side */}
        
        <div className='flex-1 flex-grow'>
        <Image src={HeroPoster} alt='poster'/>
        </div>
        


    </div>
    </Wrapper>
    </section>
  )
}

export default Hero
