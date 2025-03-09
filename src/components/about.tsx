import about from "./images/img10.jpeg";
import { ReactTyped } from "react-typed";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { 
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  };
  
  return ( 
    <motion.div 
      id="about" 
      ref={aboutRef}
      className="w-full bg-gradient-to-b from-gray-100 to-white py-16"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <div className="max-w-[1240px] mx-auto px-4 md:px-0">
        {/* Mobile */}
        <div className="md:hidden">
          <motion.div 
            variants={fadeIn}
            className="text-center"
          >
            <motion.div 
              className="text-2xl relative inline-block mb-10"
              initial={{ x: -50, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-blue-500 font-bold underline underline-offset-[9px] decoration-4">About</p>
              <motion.div 
                className="absolute -bottom-1 left-0 h-1 bg-blue-500"
                initial={{ width: 0 }}
                animate={isVisible ? { width: "100%" } : {}}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
            </motion.div>
            
            <motion.div 
              className="relative mx-auto w-64 h-64 mb-8 overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div className="absolute inset-2 bg-white rounded-full overflow-hidden">
                <img
                  src={about}
                  alt="About Image"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              variants={fadeIn}
            >
              Hey, <br />
              Thank you for visiting. I am
              <motion.span 
                className="font-semibold text-blue-600"
                animate={pulseAnimation}
              >  Rajani Baniya</motion.span> from Nepal,
              currently in the USA. I am a passionate learner with
              skills in photo video editing. I also enjoy cooking. <br />
              I am <span className="text-purple-600 font-medium"> 
              <ReactTyped 
                strings={["Nature Lover.", "Learner.", "Beautiful."]} 
                typeSpeed={40}
                backSpeed={50} 
                loop
              /> </span>
            </motion.p>
            
            <motion.button 
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full py-3 px-8 mt-6 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              variants={fadeIn}
            >
              Get in touch
            </motion.button>
          </motion.div>
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <motion.div 
            className="flex flex-col items-center mb-12"
            variants={fadeIn}
          >
            <motion.p 
              className="text-3xl text-blue-600 font-bold relative"
              initial={{ y: -20, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              About me
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500"
                initial={{ width: 0 }}
                animate={isVisible ? { width: "100%" } : {}}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </motion.p>
          </motion.div>
        </div>
        
        <motion.div 
          className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
        >
          <motion.div 
            className="relative mx-auto max-w-[455px] max-h-[410px] overflow-hidden"
            variants={fadeIn}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[16rem] opacity-70"
              animate={{ 
                rotate: 360,
                background: ["linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)", "linear-gradient(to right, #ec4899, #3b82f6, #8b5cf6)", "linear-gradient(to right, #8b5cf6, #ec4899, #3b82f6)"]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                background: { duration: 3, repeat: Infinity }
              }}
            />
            <motion.div className="relative z-10 bg-white rounded-[15rem] overflow-hidden p-2">
              <img
                src={about}
                alt="About Image"
                className="w-full h-auto rounded-[14rem] shadow-xl"
              />
            </motion.div>
          </motion.div>
          
          <motion.div variants={staggerContainer}>
            <motion.p 
              className="text-xl text-gray-700 leading-relaxed"
              variants={fadeIn}
            >
              Hey, <br />
              Thank you for visiting. I am
              <motion.span 
                className="font-semibold text-blue-600"
                animate={pulseAnimation}
              > Rajani Baniya</motion.span> from Nepal,
              currently in the USA. I am a passionate learner with
              skills in photo and video editing. I also enjoy cooking.
              <br />
              I am <span className="text-purple-600 font-medium inline-block"> 
              <ReactTyped 
                strings={["Nature Lover.", "Learner.", "Beautiful."]} 
                typeSpeed={40}
                backSpeed={50} 
                loop
              /> </span>
            </motion.p>
            
            <motion.button 
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full py-3 px-8 mt-8 shadow-lg"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                background: "linear-gradient(to right, #f97316, #ef4444, #f97316)"
              }}
              whileTap={{ scale: 0.95 }}
              variants={fadeIn}
              transition={{ background: { duration: 1 } }}
            >
              Get in touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;