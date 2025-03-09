import RA from "./images/RA.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Body() {
  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  const [refCenter, inViewCenter] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  const [refMobile, inViewMobile] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const fadeLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };
  
  const fadeRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };
  
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      } 
    }
  };
  
  const socialLinkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      } 
    })
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 0.5,
        duration: 0.5
      }
    },
    hover: { 
      scale: 1.05,
      backgroundColor: "#f97316",
      boxShadow: "0px 5px 15px rgba(249, 115, 22, 0.4)",
      transition: { 
        duration: 0.3
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div id="home" className="bg-gradient-to-b from-gray-900 to-gray-800 flex justify-between items-center px-10 py-20">
      {/* Desktop */}
      <motion.div 
        ref={refLeft}
        initial="hidden"
        animate={inViewLeft ? "visible" : "hidden"}
        variants={fadeLeftVariants}
        className="text-left mb-[60px] hidden md:block"
      >
        <h1 className="text-6xl font-bold text-white pb-5">
          Rajani <br /> 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">Chhetri</span>.
        </h1>
        
        <div className="text-white font-bold py-3 flex flex-col space-y-2">
          <motion.a
            custom={0}
            variants={socialLinkVariants}
            whileHover={{ x: 5, color: "#f97316" }}
            href="https://www.instagram.com/ra_ja_ni_28"
            className="hover:text-orange-600 cursor-pointer transition-all duration-300 w-fit"
          >
            Instagram
          </motion.a>
          <motion.a
            custom={1}
            variants={socialLinkVariants}
            whileHover={{ x: 5, color: "#f97316" }}
            href="https://www.facebook.com/profile.php?id=100085781894180"
            className="hover:text-orange-600 cursor-pointer transition-all duration-300 w-fit"
          >
            Facebook
          </motion.a>
          <motion.a
            custom={2}
            variants={socialLinkVariants}
            whileHover={{ x: 5, color: "#f97316" }}
            href="#"
            className="hover:text-orange-600 cursor-pointer transition-all duration-300 w-fit"
          >
            Whatsapp
          </motion.a>
          <motion.a
            custom={3}
            variants={socialLinkVariants}
            whileHover={{ x: 5, color: "#f97316" }}
            href="#"
            className="hover:text-orange-600 cursor-pointer transition-all duration-300 w-fit"
          >
            LinkedIn
          </motion.a>
        </div>
        
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white border-none px-8 py-3 rounded-lg font-semibold shadow-lg"
        >
          <a href="#contact">Contact me</a>
        </motion.button>
      </motion.div>

      <motion.div 
        ref={refCenter}
        initial="hidden"
        animate={inViewCenter ? "visible" : "hidden"}
        variants={imageVariants}
        className="hidden md:flex justify-center items-center"
        whileHover={{ 
          scale: 1.03,
          transition: { duration: 0.3 } 
        }}
      >
        <img 
          src={RA} 
          alt="Profile" 
          className="w-100 h-101 drop-shadow-2xl rounded-2xl" 
        />
      </motion.div>

      <motion.div 
        ref={refRight}
        initial="hidden"
        animate={inViewRight ? "visible" : "hidden"}
        variants={fadeRightVariants}
        className="mb-[50px] hidden md:block"
      >
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-yellow-400 font-bold tracking-widest"
        >
          INTRODUCTION
        </motion.h2>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white text-3xl font-bold mb-4"
        >
          Learner,
          <br />
          Nature Lover,
          <br />
          Video Editor.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-gray-300 leading-relaxed"
        >
          My name is Rajani Chhetri, and I am a passionate learner with <br />
          skills in photo and video editing. I also enjoy cooking <br />
          and experimenting with new recipes. I love exploring creative
          <br />
          challenges and am always eager to learn and grow in everything I do.
        </motion.p>
      </motion.div>

      {/* Mobile */}
      <motion.div 
        id="home1"
        ref={refMobile}
        initial="hidden"
        animate={inViewMobile ? "visible" : "hidden"}
        variants={fadeUpVariants}
        className="container mx-auto max-w-full h-full text-white p-4 md:hidden"
      >
        <motion.div 
          variants={fadeUpVariants}
          className="mb-7 text-center md:hidden"
        >
          <h1 className="text-3xl mt-[17px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">
            Rajani Chhetri
          </h1>
          
          <div className="font-bold mt-4 flex flex-wrap justify-center gap-4">
            <motion.a
              custom={0}
              variants={socialLinkVariants}
              whileHover={{ scale: 1.1, color: "#f97316" }}
              href="https://www.instagram.com/ra_ja_ni_28/"
              className="hover:text-orange-600 cursor-pointer transition-all duration-300"
            >
              Instagram
            </motion.a>
            <span className="text-gray-500">|</span>
            <motion.a
              custom={1}
              variants={socialLinkVariants}
              whileHover={{ scale: 1.1, color: "#f97316" }}
              href="https://www.facebook.com/profile.php?id=100085781894180"
              className="hover:text-orange-600 cursor-pointer transition-all duration-300"
            >
              Facebook
            </motion.a>
            <br />
            <motion.a
              custom={2}
              variants={socialLinkVariants}
              whileHover={{ scale: 1.1, color: "#f97316" }}
              href="#"
              className="hover:text-orange-600 cursor-pointer transition-all duration-300"
            >
              Whatsapp
            </motion.a>
            <span className="text-gray-500">|</span>
            <motion.a
              custom={3}
              variants={socialLinkVariants}
              whileHover={{ scale: 1.1, color: "#f97316" }}
              href="#"
              className="hover:text-orange-600 cursor-pointer transition-all duration-300"
            >
              LinkedIn
            </motion.a>
          </div>
          
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white border-none px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            <a href="#contact">Contact me</a>
          </motion.button>
        </motion.div>

        <motion.div
          variants={imageVariants}
          className="mb-8 flex justify-center md:hidden"
          whileHover={{ 
            scale: 1.03,
            transition: { duration: 0.3 } 
          }}
        >
          <img src={RA} alt="Profile" className="w-64 h-64 rounded-2xl shadow-lg object-cover" />
        </motion.div>

        <motion.div 
          variants={fadeUpVariants}
          className="text-center md:hidden"
        >
          <h2 className="text-yellow-400 font-bold tracking-widest">INTRODUCTION</h2>
          <p className="leading-relaxed mt-4 text-gray-300">
            My name is Rajani Chhetri, and I am a passionate learner with skills
            in photo and video editing. I also enjoy cooking and experimenting
            with new recipes. I love exploring creative challenges and am always
            eager to learn and grow in everything I do.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Body;