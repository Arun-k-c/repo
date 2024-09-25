import { IoMdMenu } from "react-icons/io";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import AK from "./images/huhu-t.png"
import {Link} from "react-scroll"

const Heading: React.FC = () => {
   

    
    const [setdata,showdata]= useState(false);
    return (
    <div id="home" className="bg-gray-900 p-4 ">
        <div className=" w-[100%] h-[55px] mx-auto top-0 shadow-lg left-0  items-center  bg-gray-900 fixed flex justify-between">
            <div className="ml-6 mt-[15px]">
                <img src={AK} alt="logo" className=" w-[90px] h-[55px]"/>
         
            </div>
            <div className="mr-6">{ setdata ? <FiX onClick={()=> showdata(!setdata)} className="text-white  text-2xl   md:hidden block"/>
           : <IoMdMenu onClick={()=> showdata(!setdata)} className="text-white  text-2xl md:hidden block"/> }</div>

                <ul className="gap-10  hidden md:flex text-white pr-[115px] pl-[20px]">

                    <li className="hover:underline underline-offset-[9px] decoration-4 decoration-blue-500 cursor-pointer "><Link  to="home" offset={-100} spy={true} smooth={true} duration={500}>Home</Link></li>
                    <li className="hover:underline underline-offset-[9px] decoration-4 decoration-blue-500 cursor-pointer  "><Link to="about" offset={-100} spy={true} smooth={true} duration={500}>About </Link></li>
                    <li className="hover:underline underline-offset-[9px] decoration-4 decoration-blue-500 cursor-pointer  "><Link to="photo" offset={-100} spy={true} smooth={true} duration={500}>Photos </Link></li>
                    <li className="hover:underline underline-offset-[9px] decoration-4 decoration-blue-500 cursor-pointer  ">Servics</li>
                    <li className="hover:underline underline-offset-[9px] decoration-4 decoration-blue-500 cursor-pointer  ">Contact us</li>
                </ul>
                { /* Mobile phone */}

                <ul className={`w-full h-screen  md:hidden text-white font-bold fixed   bg-black top-[55px]  duration-300 ${setdata ? "left-0" : "left-[-100%]"}`}>
                    <li className="p-5 border-b-[1px] border-gray-500"><Link  to="home1" offset={-100} spy={true} smooth={true} duration={500} onClick={()=>showdata(false)}>Home</Link></li>
                    <li className="p-5 border-b-[1px] border-gray-500"><Link  to="about" offset={-100} spy={true} smooth={true} duration={500} onClick={()=>showdata(false)}>About</Link></li>
                    <li className="p-5 border-b-[1px] border-gray-500"><Link to="photo" offset={-100} spy={true} smooth={true} duration={500} onClick={()=>showdata(false)}>Photos</Link></li>
                    <li className="p-5 border-b-[1px] border-gray-500"><Link to="" onClick={()=>showdata(false)}>Servics</Link></li>
                    <li className="p-5" onClick={()=>showdata(false)}>Contact</li>
                </ul>
        </div>

        
    </div>

    )
}
export default Heading;