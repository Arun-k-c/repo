
import RA from "./images/RA.png";

function Body() {
  return (
    <div className="bg-gray-900   flex  justify-between items-center px-10 ">

    {/* Desktp*/}
   <div className="text-left mb-[160px] hidden md:block">
        <h1 className="text-5xl font-bold  text-white pb-5">
          Rajani <br /> Chhetri.
        </h1>
        <p className="text-white font-bold  py-3">
          <a href="https://www.instagram.com/ra_ja_ni_28" className="hover:text-orange-600 cursor-pointer">Instagram </a> 
           |<a href="https://www.facebook.com/profile.php?id=100085781894180"  className="hover:text-orange-600 cursor-pointer"> Facebook</a> <br />
           <a href="#"  className="hover:text-orange-600 cursor-pointer">Whatsapp </a> |
           <a href="#"  className="hover:text-orange-600 cursor-pointer"> Linkden</a>.
        </p>
        <button className="bg-gray-900 text-orange-500 border-2 px-6 py-3  rounded-lg font-semibold">
         <a href="https://www.facebook.com/profile.php?id=100085781894180"></a> Contact me
        </button>
      </div>
      
       <div className=" hidden md:flex justify-center  items-center">
        <img src={RA} alt="Profile" className="w-100 h-101 " />
      </div>
      
       <div className="mb-[150px] hidden md:block">
        <h2 className="text-yellow-500 font-bold">INTRODUCTION</h2>
        <h2 className="text-white text-3xl  font-bold mb-4">
        Learners,<br />Nature Lover,<br />Video Editor.
        </h2>
        <p className="text-white leading-relaxed ">
        My name is Rajani Chhetri, and I am a passionate learner with <br /> skills in photo and video editing. I also enjoy cooking <br />and experimenting with new recipes. I love exploring creative
         <br />challenges  and am always eager to learn and grow in everything I do.
        </p>
      </div> 

   
      { /* moblie phone */}
   <div className="container bg-gray-900  mx-auto max-w-full h-full text-white p-4 md:hidden">

        <div className="mb-7 text-center md:hidden">
            <h1 className="text-2xl font-bold">Rajani Chhetri</h1>
            <p className="font-bold mt-2"> <a href="https://www.instagram.com/ra_ja_ni_28/"  className="hover:text-orange-600 cursor-pointer">Instagram </a> 
              | <a href="https://www.facebook.com/profile.php?id=100085781894180" className="hover:text-orange-600 cursor-pointer">Facebook</a> <br /> 
            <a href="#"  className="hover:text-orange-600 cursor-pointer"> Whatsapp </a>
             | <a href="#"  className="hover:text-orange-600 cursor-pointer">Linkden</a></p>
            <button className="bg-gray-900 text-orange-500 border-2 border-orange-500 rounded-lg font-semibold px-4 py-2 mt-5"><a href="https://www.facebook.com/profile.php?id=100085781894180">Contact me</a></button>
        </div>

       
        <div className="mb-4 ml-2 flex  justify-center   md:hidden">
            <img src={RA} alt="Profile" className="w-90 h-90  "/>
        </div>

      
        <div className="text-center  md:hidden">
            <h2 className="text-yellow-500 font-bold">INTRODUCTION</h2>
            <p className="leading-relaxed">My name is Rajani Chhetri, and I am a passionate learner with skills in photo and video editing
              . I also enjoy cooking and experimenting with new recipes. I love exploring creative challenges and am always eager to learn and grow in everything I do.</p>
        </div>
    </div>

    </div>
  
)
}

export default Body;
