import React from "react";
import "../../src/App.css";

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="hidden lg:flex">
        <div class="ocean">
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 ">
            <div className="sm:text-right text-4xl font-bold">
              <p className="text-white">
                Hi. I'm <b>Sachin Chavan</b>, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div>
              <p className="text-gray-300">
                A software developer with experience in building Responsive and
                Scalable Web apps. I am well-knowledged in UI/UX principles and
                practices. In addition to software development, I am also a
                technical writer-simplifying topics/concepts on the web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
