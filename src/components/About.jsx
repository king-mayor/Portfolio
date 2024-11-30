import React from "react";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
const About = () => {
  return (
    <div>
      <div className="flex flex-col justify-center text-center py-10">
        <h2 className="text-red-600 text-md font-semibold uppercase">
          About Me
        </h2>
        <h2 className="font-bold text-4xl py-4">Hi, I'm Mayor Odegbaro!</h2>
        <p className="text-xl lg:px-10 text-gray-600">
          A Front-End Developer with expertise in responsive design, web
          development, SEO and the ability to adopt latest technologies in
          building interactive and user-friendly web applications.
        </p>
      </div>
      <div className="mx-auto container grid lg:grid-cols-2 justify-items-center gap-10 py-10 items-center lg:px-0 px-10">
        <div className="1st">
          <h2 className="text-3xl">My Journey</h2>
          <p className="text-lg text-gray-600 py-4">
            As a passionate web developer, I've focused on crafting intuitive
            and scalable applications. With expertise in React and other
            front-end frameworks, I've succesfully developed several projects
            and website clones. My portfolio showcases my ability to seamlessly
            integrate robust frontend solutions with visually appealing,
            user-centric designs.
          </p>
          <div className="flex gap-2">
            <h2>
              <IoLogoHtml5 className="text-red-600 text-4xl font-bold" />
            </h2>
            <h2>
              <IoLogoJavascript className="text-black text-4xl font-bold" />
            </h2>
            <h2>
              <FaReact className="text-blue-600 text-4xl font-bold" />
            </h2>
            <h2>
              <SiNextdotjs className="text-black text-4xl font-bold" />
            </h2>
          </div>
        </div>
        <div className="2nd border-2 border-red-200 shadow-lg rounded-2xl py-4">
          <h2 className="text-red-600 text-4xl text-center">
            Skills & Expertise
          </h2>
          <div className="flex flex-wrap gap-4 justify-center items-center py-10">
            <button className="flex items-center text-2xl text-black border-red-300 border-2 py-1 px-2 gap-2 rounded-xl shadow-lg shadow-red-200">
              <span className="text-red-600">
                <IoLogoHtml5 />
              </span>
              HTML
            </button>
            <button className="flex items-center text-2xl text-black border-red-300 border-2 py-1 px-2 gap-2 rounded-xl shadow-lg shadow-red-200">
              <span className="text-blue-500">
                <IoLogoCss3 />
              </span>
              CSS
            </button>
            <button className="flex items-center text-2xl text-black border-red-300 border-2 py-1 px-2 gap-2 rounded-xl shadow-lg shadow-red-200">
              <span className="">
                <IoLogoJavascript />
              </span>
              JavaScript
            </button>
            <button className="flex items-center text-2xl text-black border-red-300 border-2 py-1 px-2 gap-2 rounded-xl shadow-lg shadow-red-200">
              <span className="text-blue-900">
                <FaBootstrap />
              </span>
              Bootstrap
            </button>
            <button className="flex items-center text-2xl text-black border-red-300 border-2 py-1 px-2 gap-2 rounded-xl shadow-lg shadow-red-200">
              <span className="text-white bg-black">
                <SiTailwindcss />
              </span>
              Tailwind
            </button>
            <button className="flex items-center text-2xl text-black border-red-300 border-2 py-1 px-2 gap-2 rounded-xl shadow-lg shadow-red-200">
              <span className="text-white bg-black">
                <SiNextdotjs />
              </span>
              Next Js
            </button>
            <button className="flex items-center text-2xl text-black border-red-300 border-2 py-1 px-2 gap-2 rounded-xl shadow-lg shadow-red-200">
              <span className="text-blue-700 font-bold bg-black rounded-full">
                <FaReact />
              </span>
              React Js
            </button>
            <button className="flex items-center text-2xl text-black border-red-300 border-2 py-1 px-2 gap-2 rounded-xl shadow-lg shadow-red-200">
              <span className="font-bold rounded-full">
                <FaGithubSquare />
              </span>
              GitHub
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-start px-10 py-10">
        <h2 className="text-4xl font-semibold">More About Me</h2>
        <p className="text-gray-600 text-xl py-2">
          Apart from coding, I am passionate about learning new technologies and
          keeping myself up-to-date with the latest trends in web development.
          I'm also a good team player with effective communication skill and
          team spirit, ready to work in a challenging, yet rewarding
          organization.
        </p>
      </div>
    </div>
  );
};

export default About;
