import { IoMdMenu } from "react-icons/io";
import { FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import AK from "./images/huhu-t.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Heading: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [setdata, showdata] = useState(false);
  
  useEffect(() => {
    // Add nav-specific styles to head with unique class names to avoid conflicts
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      @keyframes nav-spin-reverse {
        from { transform: rotate(0deg); }
        to { transform: rotate(-360deg); }
      }

      @keyframes nav-fadeInRight {
        from { opacity: 0; transform: translateX(50px); }
        to { opacity: 1; transform: translateX(0); }
      }

      .nav-spin-reverse {
        animation: nav-spin-reverse 1s linear infinite;
      }

      .nav-fadeInRight {
        animation: nav-fadeInRight 0.5s ease-out forwards;
      }
    `;
    document.head.appendChild(styleElement);

    // Loading timeout
    const timer = setTimeout(() => setLoading(false), 2500);
    
    // Scroll handler for navbar background change
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active menu based on scroll position
      const sections = menuItems.map(item => item.to);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveItem(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(styleElement);
    };
  }, );

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Photos", to: "photo" },
    { name: "Contact Me", to: "contact" },
  ];

  const reload = () => {
    window.location.reload();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center fixed bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 w-full h-screen z-50">
        <div className="relative">
          <div className="w-24 h-24 border-t-4 border-b-4 border-blue-400 rounded-full animate-spin">
            <div className="w-16 h-16 m-4 border-t-4 border-r-4 border-purple-500 rounded-full nav-spin-reverse"></div>
          </div>
          <div className="absolute top-0 left-0 w-24 h-24 flex justify-center items-center">
            <span className="text-white text-xl font-bold animate-pulse">Loading</span>
          </div>
        </div>
      </div>
    );
  }

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="w-full h-16 mx-auto top-0 left-0 items-center fixed flex justify-between z-50 transition-all duration-500 bg-opacity-90 backdrop-blur-md shadow-xl"
      style={{
        background: scrolled ? 'rgba(17, 24, 39, 0.95)' : 'transparent',
        boxShadow: scrolled ? '0 10px 25px -5px rgba(0, 0, 0, 0.2)' : 'none'
      }}
    >
      <motion.div 
        className="ml-6 flex items-center"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={AK}
          alt="logo"
          onClick={() => reload()}
          className="w-24 h-12 transition-all duration-500 hover:scale-110 hover:rotate-2 cursor-pointer"
        />
      </motion.div>
      
      <div className="mr-6">
        {setdata ? (
          <motion.div
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiX
              onClick={() => showdata(!setdata)}
              className="text-white text-3xl cursor-pointer transition-all duration-300 hover:text-blue-400 md:hidden block"
            />
          </motion.div>
        ) : (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IoMdMenu
              onClick={() => showdata(!setdata)}
              className="text-white text-3xl cursor-pointer transition-all duration-300 hover:text-blue-400 md:hidden block"
            />
          </motion.div>
        )}
      </div>

      <ul className="gap-12 hidden md:flex text-white pr-20 font-medium text-lg">
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className={`relative group cursor-pointer overflow-hidden ${
              activeItem === item.to ? "text-blue-400" : ""
            }`}
          >
            <Link
              to={item.to}
              offset={-100}
              spy={true}
              smooth={true}
              duration={500}
              href={`./${item.to}`}
              className="transition-colors duration-300 hover:text-blue-400"
              onSetActive={() => setActiveItem(item.to)}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-500 ease-in-out ${
                activeItem === item.to ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
          </motion.li>
        ))}
      </ul>
      
      {/* Mobile menu */}
      <motion.ul
        initial={{ x: "100%" }}
        animate={{ 
          x: setdata ? 0 : "100%",
          transition: { duration: 0.3, ease: "easeInOut" }
        }}
        className="w-full h-screen md:hidden text-white font-bold fixed bg-gradient-to-b from-gray-900 to-blue-900 bg-opacity-95 backdrop-blur-md top-16 z-40"
      >
        {menuItems.map((item, index) => (
          <motion.li 
            key={index} 
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: setdata ? 1 : 0, 
              x: setdata ? 0 : 50,
              transition: { 
                delay: setdata ? index * 0.1 : 0,
                duration: 0.3
              }
            }}
            className={`p-6 border-b border-gray-800 hover:bg-blue-800 hover:bg-opacity-30 transition-all duration-300 ${
              activeItem === item.to ? "bg-blue-900 bg-opacity-30" : ""
            }`}
          >
            <Link
              to={item.to}
              offset={-100}
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => {
                showdata(false);
                setActiveItem(item.to);
              }}
              className="block w-full"
            >
              <span className="relative">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Heading;