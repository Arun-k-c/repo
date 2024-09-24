import about from "./images/rajani.jpg";
import { ReactTyped } from "react-typed";
function About() {
  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="max-w-[1240px] mx-auto px-4 md:px-0">
        {/* Mobile */}
        <div className="md:hidden text-center">
          <img
            src={about}
            alt="About Image"
            className="rounded-[5.5rem] shadow-[5.5rem] mb-6"
          />
          <p className="text-lg font-light text-gray-700 leading-relaxed">
            Hey, <br />
              Thank you for visiting. I am
              <span className="font-semibold"> Rajani Baniya</span>from Nepal,
              currently in the USA.I am a passionate learner with
              skills in photo video editing. I also enjoy cooking. <br />
              I am <span > 
              <ReactTyped strings={["Nature Lover.","Learner.","Beautiful." ] } typeSpeed={40}
      backSpeed={50} loop/> </span>
          </p>
          <button className="border border-orange-500 bg-orange-500 text-white rounded-lg py-2 px-6 mt-6 transition duration-300 ease-in-out hover:bg-orange-600">
            Get in touch
          </button>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-2 gap-8 items-center">
          <img
            src={about}
            alt="About Image"
            className="max-w-[455px] max-h-[410px] rounded-[13.5rem] shadow-lg w-full h-auto"
          />
          <div>
            <p className="text-xl font-light text-gray-700 leading-relaxed">
              Hey, <br />
              Thank you for visiting. I am
              <span className="font-semibold"> Rajani Baniya</span> from Nepal,
              currently in the USA.I am a passionate learner with
              skills in photo video editing. I also enjoy cooking.
              I am <span > 
              <ReactTyped strings={["Nature Lover.", "Learner.","Beautiful." ] } typeSpeed={40}
      backSpeed={50} loop/> </span>
      
            </p>
            
            <button className="border border-orange-500 bg-orange-500 text-white rounded-lg py-3 px-8 mt-8 transition duration-300 ease-in-out hover:bg-orange-600">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
