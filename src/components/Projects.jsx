import React from "react";
import streamit from "../../public/IMAGES/streamit.png";
import eshop from "../../public/IMAGES/eshop.png";
import doctors from "../../public/IMAGES/Doctor's.png";
import estate from "../../public/IMAGES/realestate.png";
import burgers from "../../public/IMAGES/burgers.png";
import branded from "../../public/IMAGES/Branded.png";
import eatright from "../../public/IMAGES/eatright.png";
import sunon from "../../public/IMAGES/sunon.png";
import extraction from "../../public/IMAGES/extraction.png";
import { FaGithubSquare } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      <div className="bg-slate-700 py-20">
        <div className="flex flex-start px-10">
          <h2 className="text-5xl border-b-2 border-red-600 text-gray-200 my-6">
            Projects
          </h2>
        </div>
        <div className="mx-auto container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-6 lg:px-0 px-10">
          <div className="1st bg-pink-100 border-2 border-red-200 rounded-2xl">
            <Link href="https://stream-rose.vercel.app">
              <Image src={streamit} alt="projects" className="rounded-2xl" />
            </Link>
            <div className="p-4">
              <h2 className="text-2xl capitalize font-semibold">streamit</h2>
              <p className="text-lg py-4">
                A simple movie website which provides information about trending
                movies with the help of TMDB Api. It is completely responsive
                accross all devices with a smooth navigation.
              </p>
              <div className="flex gap-2">
                <Link href="https://stream-rose.vercel.app">
                  <button className="text-white bg-red-600 py-2 px-4 rounded-lg text-md font-semibold capitalize">
                    live preview
                  </button>
                </Link>

                <button className="flex items-center text-white bg-black py-2 px-4 font-semibold text-md capitalize rounded-lg gap-2">
                  <span>
                    <FaGithubSquare />
                  </span>
                  github link
                </button>
              </div>
            </div>
          </div>
          <div className="1st bg-pink-100 border-2 border-red-200 rounded-2xl">
            <Link href="https://appointment-olive.vercel.app">
              <Image src={doctors} alt="projects" className="rounded-2xl" />
            </Link>
            <div className="p-4">
              <h2 className="text-2xl capitalize font-semibold">
                Doctor's Appointment
              </h2>
              <p className="text-lg py-4">
                A simple UI of a Doctor's Appointment website with seamless
                navigation and top-notch design. It is completely responsive
                accross all devices with a smooth navigation.
              </p>
              <div className="flex gap-2">
                <Link href="https://appointment-olive.vercel.app">
                  <button className="text-white bg-red-600 py-2 px-4 rounded-lg text-md font-semibold capitalize">
                    live preview
                  </button>
                </Link>

                <button className="flex items-center text-white bg-black py-2 px-4 font-semibold text-md capitalize rounded-lg gap-2">
                  <span>
                    <FaGithubSquare />
                  </span>
                  github link
                </button>
              </div>
            </div>
          </div>
          <div className="1st bg-pink-100 border-2 border-red-200 rounded-2xl">
            <Link href="https://e-shopping-beta.vercel.app">
              <Image src={eshop} alt="projects" className="rounded-2xl" />
            </Link>

            <div className="p-4">
              <h2 className="text-2xl capitalize font-semibold">E-Shop</h2>
              <p className="text-lg py-4">
                A simple E-commerce website with a product list and cart
                functionality. It is completely responsive accross all devices
                with a smooth navigation.
              </p>
              <div className="flex gap-2">
                <Link href="https://e-shopping-beta.vercel.app">
                  <button className="text-white bg-red-600 py-2 px-4 rounded-lg text-md font-semibold capitalize">
                    live preview
                  </button>
                </Link>

                <button className="flex items-center text-white bg-black py-2 px-4 font-semibold text-md capitalize rounded-lg gap-2">
                  <span>
                    <FaGithubSquare />
                  </span>
                  github link
                </button>
              </div>
            </div>
          </div>
          <div className="1st bg-pink-100 border-2 border-red-200 rounded-2xl">
            <Link href="https://burgers-pi.vercel.app">
              <Image src={burgers} alt="projects" className="rounded-2xl" />
            </Link>

            <div className="p-4">
              <h2 className="text-2xl capitalize font-semibold">Burgers</h2>
              <p className="text-lg py-4">
                A commercial burger website with a detailed description of menu
                list. It is completely responsive accross all devices with a
                smooth navigation.
              </p>
              <div className="flex gap-2">
                <Link href="https://burgers-pi.vercel.app">
                  <button className="text-white bg-red-600 py-2 px-4 rounded-lg text-md font-semibold capitalize">
                    live preview
                  </button>
                </Link>
                <button className="flex items-center text-white bg-black py-2 px-4 font-semibold text-md capitalize rounded-lg gap-2">
                  <span>
                    <FaGithubSquare />
                  </span>
                  github link
                </button>
              </div>
            </div>
          </div>
          <div className="1st bg-pink-100 border-2 border-red-200 rounded-2xl">
            <Link href="https://branded-mayor.vercel.app">
              <Image src={branded} alt="projects" className="rounded-2xl" />
            </Link>
            <div className="p-4">
              <h2 className="text-2xl capitalize font-semibold">Branded</h2>
              <p className="text-lg py-4">
                A branding agency website with a detailed description of company
                duties and experiences. It is completely responsive accross all
                devices with a smooth navigation.
              </p>
              <div className="flex gap-2">
                <Link href="https://branded-mayor.vercel.app">
                  <button className="text-white bg-red-600 py-2 px-4 rounded-lg text-md font-semibold capitalize">
                    live preview
                  </button>
                </Link>
                <button className="flex items-center text-white bg-black py-2 px-4 font-semibold text-md capitalize rounded-lg gap-2">
                  <span>
                    <FaGithubSquare />
                  </span>
                  github link
                </button>
              </div>
            </div>
          </div>
          <div className="1st bg-pink-100 border-2 border-red-200 rounded-2xl">
            <Link href="https://eatright-restaurant.vercel.app">
              <Image src={eatright} alt="projects" className="rounded-2xl" />
            </Link>
            <div className="p-4">
              <h2 className="text-2xl capitalize font-semibold">EAT-RIGHT</h2>
              <p className="text-lg py-4">
                A simple food landing page which provides information about
                trending meals. It is completely responsive accross all devices
                with a smooth navigation.
              </p>
              <div className="flex gap-2">
                <Link href="https://eatright-restaurant.vercel.app">
                  <button className="text-white bg-red-600 py-2 px-4 rounded-lg text-md font-semibold capitalize">
                    live preview
                  </button>
                </Link>
                <button className="flex items-center text-white bg-black py-2 px-4 font-semibold text-md capitalize rounded-lg gap-2">
                  <span>
                    <FaGithubSquare />
                  </span>
                  github link
                </button>
              </div>
            </div>
          </div>
          <div className="1st bg-pink-100 border-2 border-red-200 rounded-2xl">
            <Link href="https://king-mayor.github.io/seating1/">
              {" "}
              <Image src={sunon} alt="projects" className="rounded-2xl" />
            </Link>
            <div className="p-4">
              <h2 className="text-2xl capitalize font-semibold">Sunon</h2>
              <p className="text-lg py-4">
                A simple furniture landing page built with HTML & CSS which
                displays a list of available office and leissure chairs for
                sale. It is completely responsive accross all devices with a
                smooth navigation.
              </p>
              <div className="flex gap-2">
                <Link href="https://king-mayor.github.io/seating1/">
                  <button className="text-white bg-red-600 py-2 px-4 rounded-lg text-md font-semibold capitalize">
                    live preview
                  </button>
                </Link>
                <button className="flex items-center text-white bg-black py-2 px-4 font-semibold text-md capitalize rounded-lg gap-2">
                  <span>
                    <FaGithubSquare />
                  </span>
                  github link
                </button>
              </div>
            </div>
          </div>
          <div className="1st bg-pink-100 border-2 border-red-200 rounded-2xl">
            <Link href="https://movie-finder-mayor.vercel.app">
              <Image src={extraction} alt="projects" className="rounded-2xl" />
            </Link>
            <div className="p-4">
              <h2 className="text-2xl capitalize font-semibold">
                Movie Finder
              </h2>
              <p className="text-lg py-4">
                A movie finder website incorporated with an external API which
                provides movie information through a simple search. It is
                completely responsive accross all devices with a smooth
                navigation.
              </p>
              <div className="flex gap-2">
                <Link href="https://movie-finder-mayor.vercel.app">
                  <button className="text-white bg-red-600 py-2 px-4 rounded-lg text-md font-semibold capitalize">
                    live preview
                  </button>
                </Link>
                <button className="flex items-center text-white bg-black py-2 px-4 font-semibold text-md capitalize rounded-lg gap-2">
                  <span>
                    <FaGithubSquare />
                  </span>
                  github link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
