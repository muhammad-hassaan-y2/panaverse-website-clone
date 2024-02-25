import Wrapper from "../shared/Wrapper";
import Logo from "/public/logo.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <div >
     <div className='border-secondary border-t-2  mt-44 mb-14 '></div>

     
     <Wrapper>
     <div className="flex">
     <div className="w-6/12 ">
      <Image src={Logo} alt="panaverse-dao-logo" className="w-32"/>

      <p className="mt-8 ">
      Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
      </p>

     </div>
     
     <div className="p-5 ml-7">
      
      <h2 className="font-bold text-xl">Programs</h2>

      <div className="mt-5 text-base text-gray-600">
      <p className="mt-1">Web 3.0 and Metaverse Developer</p>
      <p className="mt-1">Artifical Intelligence</p>
      <p className="mt-1">Cloud-Native Computing</p>
      <p className="mt-1">Ambient Computing and IoT</p>
      </div>

     </div>

     <div className="p-5 ml-16">
      
      <h2 className="font-bold text-xl">Quarters</h2>

      <div className="mt-5 text-lg text-gray-700">
      <p className="mt-1">Quarter-I</p>
      <p className="mt-1">Quarter-II</p>
      <p className="mt-1">Quarter-III</p>
      <p className="mt-1">Quarter-IV</p>
      </div></div>
     </div>
     </Wrapper></div>
    
  )
}

export default Footer