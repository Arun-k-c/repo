import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/12.jpg";
import img8 from "./images/13.jpg";


function Photos() {
  return (
    <div id="photo"className="w-full py-7 bg-[#ecf4fb] h-auto">
      <div className="text-2xl ml-4 text-blue-500 font-bold md:ml-[6.25rem] ">
        <p className="underline underline-offset-[9px] decoration-4">My Gallary</p>
      </div>
      <div
        className=" id w-[80%] mx-auto mt-[40px] mb-[50px] grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-[30px] "
      >
        <img src={img1} className="hover:scale-75 hover:rounded-[10px] hover:-rotate-[15deg]" />
        <img src={img2} className="hover:scale-75 hover:rounded-[10px] hover:-rotate-[15deg]" />
        <img src={img3} className="hover:scale-75 hover:rounded-[10px] hover:-rotate-[15deg]" />
        <img src={img4} className="hover:scale-75 hover:rounded-[10px] hover:-rotate-[15deg]" />
        <img src={img5} className="hover:scale-75 hover:rounded-[10px] hover:-rotate-[15deg]" />
        <img src={img6} className="hover:scale-75 hover:rounded-[10px] hover:-rotate-[15deg]" />
        <img src={img7} className="hover:scale-75 hover:rounded-[10px] hover:-rotate-[15deg]" />
        <img src={img8} className="hover:scale-75 hover:rounded-[10px] hover:-rotate-[15deg]" />
      </div>
    </div>
  );
}

export default Photos;
