import Image from "next/image";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import email from "../../public/IMAGES/b1.jpg";
const Contact = () => {
  return (
    <div className="bg-slate-800 py-10">
      <div className="flex flex-col flex-start px-10">
        <h2 className="text-red-600 text-4xl font-bold">Get in Touch</h2>
        <p className="text-lg py-2 text-gray-200">
          Get in touch to discuss how I can bring your ideas to life with
          cutting-edge front-end solutions. Let's build something amazing
          together!
        </p>
        <div className="flex py-6 gap-4">
          <p className="text-red-600 text-3xl">
            <FaFacebookSquare />
          </p>
          <p className="text-red-600 text-3xl">
            <FaInstagram />
          </p>
          <p className="text-red-600 text-3xl">
            <FaLinkedin />
          </p>
        </div>
      </div>
      <div className="mx-auto container grid lg:grid-cols-2 grid-cols-1 items-center gap-6 lg:px-0 px-10">
        <div className="1st" data-aos="zoom-in-left" data-aos-duration="1000">
          <div>
            <Image src={email} alt="email" />
          </div>
        </div>
        <div
          className="2nd bg-[#f4f1ea] rounded-xl border-2 border-red-600 py-10 px-10 shadow-lg shadow-red-200"
          data-aos="flip-right"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl font-bold capitalize">contact me</h2>
          <div>
            <div className="py-4">
              <h2 className="text-md">Name</h2>
              <input
                type="text"
                placeholder="Full Name"
                className="pl-2 w-full py-2"
              />
            </div>
            <div className="py-4">
              <h2>Email</h2>
              <input
                type="email"
                placeholder="Email"
                className="pl-2 w-full py-2"
              />
            </div>
            <div className="py-4">
              <h2>Message</h2>
              <textarea
                name=""
                id=""
                placeholder="Enter your message"
                className="pl-2 w-full p-6"
              ></textarea>
            </div>
            <button className="text-gray-200 bg-red-600 cursor-pointer py-2 px-6 rounded-xl capitalize my-6">
              send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
