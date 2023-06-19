import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="bg-[#23416d] h-[80px] fixed inset-0 w-full flex justify-between px-5 items-center text-white">
      <div className="flex flex-col gap-1 mt-2">
        <h1 className="font-thin text-2xl text-center text-[29px] font-serif inline border-b-4 border-white-500 ">
          SACHIN
        </h1>
        <h2>FRONTEND DEVELOPER</h2>
      </div>
      <ul className="hidden text-[20px] md:flex gap-x-8 font-semibold ">
        <li className="hover:text-teal-100 hover:text-[22px] hover duration-200">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-teal-100 hover:text-[22px] hover duration-200">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-teal-100 hover:text-[22px] hover duration-200">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-teal-100 hover:text-[22px] hover duration-200">
          <Link to="works" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:text-teal-100 hover:text-[22px] hover duration-200">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars />
        ) : (
          <div className="mb-10 duration-400">
            <FaTimes />
          </div>
        )}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-[200px] rounded-[10px]  w-full h-[300px] bg-[#5b7191]  flex flex-col gap-1 justify-center items-start"
        }
      >
        <li className="w-full h-[50px] border-b-4 border-white rounded-[5px]">
          <Link to="home" onClick={handleClick} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="w-full h-[50px] border-b-4 border-white rounded-[5px]">
          <Link to="about" onClick={handleClick} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="w-full h-[50px] border-b-4 border-white rounded-[5px]">
          <Link to="skills" onClick={handleClick} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="w-full h-[50px] border-b-4 border-white rounded-[5px]">
          <Link to="work" onClick={handleClick} smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="w-full h-[50px] border-b-4 border-white rounded-[5px]">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="hidden lg:flex fixed items-center justify-center flex-col top-[25%] left-0">
        <ul className="">
          <li className="bg-blue-400 flex justify-between items-center w-[160px] h-[60px] duration-300 ml-[-100px] hover:ml-[-10px]">
            <a
              className="flex justify-between  items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/sachin-chavan-425615208/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="bg-blue-400 w-[160px] ml-[-100px] flex justify-between items-center h-[60px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:lavudyasachinchavan@gmail.com"
            >
              Gmail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="bg-blue-400 w-[160px] flex justify-between items-center h-[60px] ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.instagram.com/thesachinchavan_/"
            >
              Phone <FaPhone size={30} />
            </a>
          </li>
          <li className="bg-blue-400 w-[160px] flex justify-between items-center h-[60px] ml-[-100px] hover:ml-[-10px]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/sachinchavan11"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1zWQ9jyDMgt2C7bJx5M5u29zL3xz0wDJE/view?usp=sharing"
            >
            
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
