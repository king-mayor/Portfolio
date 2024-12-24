import Image from "next/image";
import React from "react";
import avatar from "../../public/IMAGES/avatar1.png";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <div>
      <div className="flex lg:justify-around lg:flex-row flex-col items-center px-10 gap-10 py-20">
        <div className="1st" data-aos="zoom-in-up" data-aos-duration="1000">
          <div className="py-4">
            <h2 className="lg:text-6xl text-4xl font-bold">Hi There,</h2>
            <h2 className="lg:text-6xl text-4xl font-bold">
              I'm Mayor <span className="text-red-600">Odegbaro!</span>
            </h2>
          </div>

          <h3 className="text-3xl">Front end developer</h3>
          <p className="text-lg py-3">
            I'm a passionate web developer with expertise in front-end
            development, and modern web technologies. I love creating beautiful
            and functional websites that solve real world problems.
          </p>
          <button className="text-white py-2 px-6 cursor-pointer rounded-lg bg-black text-lg hover:bg-zinc-900">
            Download CV
          </button>
        </div>
        <div
          className="2nd lg:w-1/2 w-full flex items-center"
          data-aos="zoom-out-up"
          data-aos-duration="1000"
        >
          <div>
            <Image src={avatar} alt="logo" />
          </div>
          <div className="bg-gray-200 rounded-3xl p-6 lg:flex flex-col gap-3 hidden">
            <p>
              <FaFacebook className="text-red-600 text-5xl cursor-pointer" />
            </p>
            <p>
              <FaInstagram className="text-red-600 text-5xl cursor-pointer" />
            </p>
            <p>
              <FaTwitter className="text-red-600 text-5xl cursor-pointer" />
            </p>
            <p>
              <FaLinkedin className="text-red-600 text-5xl cursor-pointer" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
