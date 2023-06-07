import React from "react";

const Works = () => {
  return (
    <div
      id="works"
      className=" w-full h-full text-gray-300 bg-[#264c86] py-[80px]  "
      style={{ backgroundImage: `url(${"/coding_image.jpg"})` }}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" pb-8 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold border-b-4  border-cyan-500 mb-3">
            Work
          </p>
          <p className="text-lg font-normal text-white hover:text-teal-100 hover:text-[20px] hover duration-200 ">
            Check out some of recent Works
          </p>
        </div>
        <div className="grid md:col-span-3 gap-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Grid Item */}
            <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
              {/* Hover Effects */}
              <div className=" group-hover:opacity-100 flex justify-center items-center flex-col">
                <span className=" text-lg font-bold text-white tracking-wider">
                  Real Estate Property Listing site
                </span>
                <p className="text-center">
                  a website built based on react and bootstarp to list
                  properties.
                </p>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: "url(/assets/coding image.jpg)" }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className=" group-hover:opacity-100 flex justify-center items-center flex-col">
                <span className=" text-lg font-bold text-white tracking-wider">
                  Pizza Restaurant
                </span>
                <p className="text-center">
                  a website based on react and bootstarp to feature food items
                  of Restaurent.
                </p>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${""})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className=" group-hover:opacity-100 flex justify-center items-center flex-col">
                <span className=" text-lg font-bold text-white tracking-wider">
                  Library Management System
                </span>
                <p className="text-center">
                  a C++ based project to manage student details ,books in
                  Library.
                </p>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${""})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className=" group-hover:opacity-100 flex justify-center items-center flex-col">
                <span className=" text-lg font-bold text-white tracking-wider">
                  Sports Management System
                </span>
                <p className="text-center">
                  A web application built with React to organise sports events.
                </p>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url($})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="group-hover:opacity-100 flex justify-center items-center flex-col">
                <span className=" text-lg font-bold text-white tracking-wider">
                  Pokemon website
                </span>
                <p className="text-center">
                  a Beginner projects to gain handons experience on react,APIs.
                </p>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url($})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className=" group-hover:opacity-100 flex justify-center items-center flex-col">
                <span className=" text-lg font-bold text-white tracking-wider">
                  Yep!
                </span>
                <p className="text-center">
                  Contributed some UI and front-end part on yep.co.za
                </p>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Works;
