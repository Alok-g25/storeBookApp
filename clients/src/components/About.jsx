import React from "react";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";



function About() {
  return (
    <>
      <div className="text-black dark:text-white max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-8 md:my-16">
        <div className="w-full md:w-1/2">
          <img
            src="/aboutimg.jpg"
            alt="About Image"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-2xl md:text-4xl text-center font-semibold underline mb-6 ">
            Contact Us
          </h1>
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos nihil enim culpa, aperiam vel ducimus, ad est dolores
            porro ab unde, quia non sequi ipsa animi cupiditate exercitationem
            incidunt tempora illo tenetur sapiente distinctio ut blanditiis
            praesentium! Natus debitis fuga iure totam, cupiditate, ratione
            beatae alias repellat porro quisquam pariatur?
          </p>
          <p className="mt-6"><b>Address</b> : Noida secotor 59, Uttar Pardesh</p>
          <div className="flex justify-center space-x-4 mt-6">
            <Link className="text-2xl md:text-4xl hover:scale-110" to="mailto:alokkumar9506492158@gmail.com">
            <IoMail className=" hover:scale-110 duration-300"/>
            </Link>
            <Link className="text-2xl md:text-4xl hover:scale-110" to="https://www.linkedin.com/in/alok-gupta-68b3a7253/">
            <FaLinkedin className=" hover:scale-110 duration-300"/>
            </Link>
            <Link className="text-2xl md:text-4xl hover:scale-110" to="#">
            <FaInstagramSquare className=" hover:scale-110 duration-300"/>
            </Link>
            <Link className="text-2xl md:text-4xl hover:scale-110" to="https://wa.me/6392190896">
            <FaSquareWhatsapp className=" hover:scale-110 duration-300"/>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
