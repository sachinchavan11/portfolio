import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import me from "../assets/me.png";
import { Link } from "react-scroll";
import "../../src/App.css";

const Home = () => {
  return (
    <>
      <div id="home" className="h-full w-full bg-[#5d7eaf]">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row py-[100px]">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm a Web Developer
            </h2>
            <p className="text-blue-100 py-4 max-w-md">
              I have 1 years of experience in web development. Currently, I love
              to work on web application using technologies like React,
              Tailwind, Next.js and Bootstrap Javascript.
            </p>
            <div>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="group text-white font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer"
              >
                About Me
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight size={25} className="ml-3" />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img
              src={me}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
