import { FaFacebookSquare,FaInstagram,FaTiktok  } from "react-icons/fa";

 function Footer() {
  return (
     
<div> {/*mobile */}
    <div className="container  bg-gray-900  mx-auto max-w-full h-1/6 text-white p-5 md:hidden">
      <h1 className="text-center text-2xl text-white  font-bold">  Rajani Baniya</h1>
      <div className="flex flex-row gap-7 py-7 justify-center items-center">  
      <a href="https://www.instagram.com/ra_ja_ni_28/"> <FaFacebookSquare className="size-5"/></a>
     <a href="https://www.instagram.com/ra_ja_ni_28/"><FaInstagram className="size-5"/> </a>
      <a href="#"><FaTiktok className="size-5"/></a>
          </div>
      <p className="text-center text-sm mt-1 font-bold ">
        © Rajani Chhetri 2024 <br />  All rights reserved.
      </p>
    </div>

   {/*desktop*/}

    <div className="container  bg-gray-900  mx-auto max-w-full h-auto text-white p-10 hidden md:block">
      <h1 className="text-center text-3xl text-white  font-bold">  Rajani Baniya</h1>
      <div className="flex flex-row gap-9 py-12 justify-center items-center">  
     <a href="https://www.instagram.com/ra_ja_ni_28/"> <FaFacebookSquare className="size-6"/></a>
     <a href="https://www.instagram.com/ra_ja_ni_28/"><FaInstagram className="size-6"/> </a>
      <a href="#"><FaTiktok className="size-6"/></a>
       </div>
       <div>
      <p className="text-center font-bold ">
        © Rajani Chhetri 2024 <br />  All rights reserved.
      </p>
    </div>

       </div>
       

  </div>
  )
}
export default Footer
