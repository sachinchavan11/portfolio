import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="bg-[#85ace7] w-full h-full mb-4"
      style={{
        backgroundImage: `url("/skills wallpaper.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row py-[180px]">
        <div className="max-w-[1000px]">
          <div className="flex flex-col justify-center items-center ">
            <p
              className="text-gray-100 font-bold text-[34px] py-2 px-2  rounded-[20px] mb-3 hover:text-teal-100 hover:text-[38px] hover duration-200 "
              style={{ textShadow: "4px 4px 4px black" }}
            >
              SKILLS
            </p>
            <p
              className="py-4 px-2 md:text-2xl text-xl  text-white opacity-100  bg-[#8daeb9] rounded-[20px]"
              style={{ textShadow: "4px 4px 4px black" }}
            >
              I enjoy diving into and learning new things. Here's a list of
              technologies I've worked with
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4  text-center py-8">
            <div className="shadow-md bg-[#7baabb] shadow-[#040c16] rounded-[10px]  hover:scale-110 duration-500">
              <p className="my-4 text-black font-bold">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] rounded-[10px] bg-[#7baabb]  hover:scale-110 duration-500">
              <p className="my-4 text-black font-bold">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16]  rounded-[10px] bg-[#7baabb] hover:scale-110 duration-500">
              <p className="my-4  text-black font-bold">JAVASCRIPT</p>
            </div>
            <div className="shadow-md shadow-[#040c16]  rounded-[10px] bg-[#7baabb] hover:scale-110 duration-500">
              <p className="my-4  text-black font-bold">REACT</p>
            </div>
            <div className="shadow-md shadow-[#040c16]  rounded-[10px] bg-[#7baabb] hover:scale-110 duration-500">
              <p className="my-4  text-black font-bold">CPP</p>
            </div>
            <div className="shadow-md shadow-[#040c16]  rounded-[10px] bg-[#7baabb] hover:scale-110 duration-500">
              <p className="my-4  text-black font-bold">NEXT JS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] rounded-[10px] bg-[#7baabb] hover:scale-110 duration-500">
              <p className="my-4  text-black font-bold">REDUX</p>
            </div>
            <div className="shadow-md shadow-[#040c16] rounded-[10px] bg-[#7baabb] hover:scale-110 duration-500">
              <p className="my-4  text-black font-bold">DATA STRUCTURES</p>
            </div>
            <div className="shadow-md shadow-[#040c16] rounded-[10px] bg-[#7baabb] hover:scale-110 duration-500">
              <p className="my-4  text-black font-bold">OPERATING SYSTEM</p>
            </div>
            <div className="shadow-md shadow-[#040c16]  rounded-[10px] bg-[#7baabb] hover:scale-110 duration-500">
              <p className="my-4  text-black font-bold">TAILWIND</p>
            </div>
            <div className="shadow-md shadow-[#040c16]  rounded-[10px] bg-[#7baabb] hover:scale-110 duration-500">
              <p className="my-4  text-black font-bold">BOOTSTRAP</p>
            </div>
            <div className="shadow-md shadow-[#040c16] rounded-[10px] bg-[#7baabb] hover:scale-110 duration-500">
              <p className="my-4  text-black font-bold">MATERIAL UI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
