import Logo from "/public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/shared/Wrapper";



const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-10">
    <Wrapper>
    <div className="flex justify-between  bg-white py-6 px-2
     sticky top-0 items-center
     ">
         {/*LOGO*/}
         <div>

            <Image src={Logo} alt="panaverse-dao-logo" className="w-32"/>

          {/*<h2 className="text-xl font-bold">Panaverse Dao</h2>*/}
            

         </div>
         
         {/*Navigation Bar */}
         <ul className="flex space-x-4 font-medium">
           
           <Link href={"/"}>
            <li className="#">Home</li>
            </Link>
            <Link href={"/courses"}>
            <li className="#">Courses</li>
            </Link>
         </ul>

     </div>
     </Wrapper>
     </header>

  )
}

export default Header
