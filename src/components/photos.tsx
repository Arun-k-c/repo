import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/12.jpg";
import img8 from "./images/13.jpg";
import { useState} from "react";
import { FiX } from "react-icons/fi";

function Photos() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); 
  
  const images = [img1, img2, img3, img4, img5, img6, img7, img8]; 
 
  return (
    <div id="photo1" className="w-full py-7 bg-[#ecf4fb] h-auto">
      <div className="text-2xl ml-4 text-blue-500 font-bold md:ml-[6.25rem] ">
        <p className="underline underline-offset-[9px] decoration-4">My Gallery</p>
      </div>
 
     
      {selectedImage ? (
        <div className="w-[100%] h-[100vh] fixed z-[10] bg-[rgba(0,0,0,0.9)] top-0 left-0 flex justify-center items-center">
          <img src={selectedImage} className="w-[70%] max-w-[500px]"/>
          <FiX 
            onClick={() => setSelectedImage(null)} 
            className="text-white top-[5%] absolute right-[5%] text-2xl md:text-3xl cursor-pointer" 
          />
        </div>
      ) : (
        
        <div className="w-[80%] mx-auto mt-[40px] mb-[50px] grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-[30px]">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              onClick={() =>setSelectedImage(image)} 
              tabIndex={-1} 
              className="md:hover:scale-75 hover:rounded-[10px] hover:shadow-custom hover:rotate-[-15deg] cursor-pointer"
              alt={`Gallery Image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Photos;
