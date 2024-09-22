import { IoMdMenu } from "react-icons/io";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import AK from "./images/huhu-t.png"
const Heading: React.FC = () => {
    
    const [setdata,showdata]= useState(false);
    return (
    <div className="bg-gray-900 p-4">
        <div className=" max-w-[1240px] py-[3px] items-center  flex justify-between mx-auto">
            <div className="  ">
                <img src={AK} alt="logo" className=" w-[90px] h-[55px]"/>
         
            </div>
            { setdata ? <FiX onClick={()=> showdata(!setdata)} className="text-white text-2xl md:hidden block"/>
           : <IoMdMenu onClick={()=> showdata(!setdata)} className="text-white text-2xl md:hidden block"/> }

                <ul className="gap-10  hidden md:flex text-white pr-[70px]">

                    <li className="hover:text-yellow-500 cursor-pointer underline ">Home</li>
                    <li className="hover:text-yellow-500 cursor-pointer underline">About</li>
                    <li className="hover:text-yellow-500 cursor-pointer underline">Photos</li>
                    <li className="hover:text-yellow-500 cursor-pointer underline">Servics</li>
                    <li className="hover:text-yellow-500 cursor-pointer underline">Contact us</li>
                </ul>
                { /* Mobile phone */}
                <ul className={`w-full h-screen md:hidden text-white fixed   bg-black top-[73px]  duration-300 ${setdata ? "left-0" : "left-[-100%]"}`}>
                    <li className="p-6 border-b-[1px] border-gray-500">Home</li>
                    <li className="p-6 border-b-[1px] border-gray-500">About</li>
                    <li className="p-6 border-b-[1px] border-gray-500"> Photos</li>
                    <li className="p-6 border-b-[1px] border-gray-500">Servics</li>
                    <li className="p-6">Contact</li>
                </ul>
        </div>

        
    </div>

    )
}
export default Heading;