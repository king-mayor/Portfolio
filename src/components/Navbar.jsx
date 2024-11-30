import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/IMAGES/logo (3).png";
import { FaCode } from "react-icons/fa";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleToggle = () => {
    setMenu(!menu);
  };
  return (
    <div className="fixed right-0 left-0 z-50 opacity-95">
      <div className="flex justify-between lg:px-10 items-center border-b-2 border-gray-200 py-4 bg-gray-50 shadow-md shadow-red-200">
        <div className="1st">
          <h2 className="text-2xl text-black font-bold flex items-center">
            <span>
              <FaCode />
            </span>
            <span className="text-red-600">WEB</span>
            DEV
          </h2>
        </div>
        <div className="lg:flex flex-row gap-6 hidden">
          <Link
            href="#"
            className="text-lg text-black font-bold hover:text-red-600"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-lg text-black font-bold hover:text-red-600"
          >
            Project
          </Link>
          <Link
            href="#"
            className="text-lg text-black font-bold hover:text-red-600"
          >
            Testimonials
          </Link>
          <Link
            href="#"
            className="text-lg text-black font-bold hover:text-red-600"
          >
            Contact
          </Link>
        </div>
        {/* MOBILE SECTION */}

        {menu && (
          <div className="fixed top-16 left-0 right-0 w-full bg-black py-10 text-center">
            <div className="flex flex-col items-center justify-center text-center gap-10">
              <Link
                href="#"
                className="text-xl text-gray-200 hover:text-red-600 hover:bg-slate-900 w-full py-2 px-10"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-xl text-gray-200 hover:text-red-600 hover:bg-slate-900 w-full py-2 px-10"
              >
                Project
              </Link>
              <Link
                href="#"
                className="text-xl text-gray-200 hover:text-red-600 hover:bg-slate-900 w-full py-2 px-10"
              >
                Testimonials
              </Link>
              <Link
                href="#"
                className="text-xl text-gray-200 hover:text-red-600 hover:bg-slate-900 w-full py-2 px-10"
              >
                Contact
              </Link>
            </div>
          </div>
        )}

        <div onClick={handleToggle}>
          {menu ? (
            <div className="lg:hidden">
              <IoClose className="text-4xl font-bold cursor-pointer text-red-600" />
            </div>
          ) : (
            <div className="lg:hidden">
              <IoMenu className="text-4xl font-bold cursor-pointer text-red-600" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
