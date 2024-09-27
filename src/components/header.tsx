import { IoMdMenu } from "react-icons/io";
import { FiX } from "react-icons/fi";
import { useState,useEffect } from "react";
import AK from "./images/huhu-t.png";
import { Link } from "react-scroll";

const Heading: React.FC = () => {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds loading time
    return () => clearTimeout(timer);
  }, []);

  const [setdata, showdata] = useState(false);
  const menuItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Photos", to: "photo1" },
    { name: "Contact Me", to: "contact" },
  ];

  const reload = () => {
    window.location.reload();
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center fixed bg-gray-900 w-full h-screen">
        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full  animate-spin"></div>
      </div>
    );
  }
  return (
    
    <div id="home" className="bg-gray-900 p-4 ">
      <div className=" w-[100%] h-[55px] mx-auto top-0 shadow-lg left-0  items-center  bg-gray-900 fixed flex justify-between">
        <div className="ml-6 mt-[15px] ">
          <img
            src={AK}
            alt="logo"
            onClick={() => reload()}
            className="w-[90px] h-[55px]"
            
          />
        </div>
        <div className="mr-6">
          {setdata ? (
            <FiX
              onClick={() => showdata(!setdata)}
              className="text-white  text-2xl   md:hidden block"
            />
          ) : (
            <IoMdMenu
              onClick={() => showdata(!setdata)}
              className="text-white  text-2xl md:hidden block"
            />
          )}
        </div>

        <ul className="gap-10 hidden md:flex text-white pr-[115px] pl-[20px]">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:underline underline-offset-[9px] decoration-4 decoration-blue-500 cursor-pointer hover:text-blue-500"
            >
              <Link
                to={item.to}
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
                href={`./${item.to}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile phone */}

        <ul
          className={`w-full h-screen  md:hidden text-white font-bold fixed   bg-gray-900 top-[55px]  duration-300 ${
            setdata ? "left-[0%]" : "left-[-100%]"
          }`}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="p-5 border-b-[1px] border-gray-500">
              <Link
                to={item.to}
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => showdata(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Heading;
