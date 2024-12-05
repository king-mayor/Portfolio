"use client";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { LuQuote } from "react-icons/lu";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1200, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1,
  },
};
const Testimonial = () => {
  return (
    <div>
      <div>
        <div>
          <h2 className="text-3xl font-semibold text-center py-10">
            Testimonials
          </h2>
        </div>
        <div className="py-20 px-10 overflow-x-hidden overflow-y-hidden">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={1000}
            autoPlay={true}
            transitionDuration={1000}
            showDots={false}
            arrows={false}
          >
            <div className="1st border-2 border-gray-200 p-4 mx-2 rounded-xl shadow-md shadow-pink-600">
              <div className="flex">
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaRegStarHalfStroke />
                </p>
              </div>
              <p className="text-md py-2">
                Mayor is an exceptional front-end developer who delivered
                high-quality work on our project. His attention to detail,
                creativity, and commitment to excellence are truly impressive.
                He is a good team player.
              </p>
              <div className="flex items-center justify-between">
                <div className="1st">
                  <h2 className="text-red-600 text-xl font-semibold">
                    Michael Chen
                  </h2>
                  <p className="text-md">Client</p>
                </div>
                <div>
                  <p className="text-2xl font-bold  text-red-600">
                    <LuQuote />
                  </p>
                </div>
              </div>
            </div>
            <div className="1st border-2 border-gray-200 p-4 mx-2 rounded-xl shadow-md shadow-pink-600">
              <div className="flex">
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaRegStarHalfStroke />
                </p>
              </div>
              <p className="text-md py-2">
                I had the pleasure of working with Mayor on a recent project,
                and I was blown away by his technical expertise and
                collaborative spirit. He is proactive and dedicated to
                delivering high-quality work.
              </p>
              <div className="flex items-center justify-between">
                <div className="1st">
                  <h2 className="text-red-600 text-xl font-semibold">
                    David Baker
                  </h2>
                  <p className="text-md">Client</p>
                </div>
                <div>
                  <p className="text-2xl font-bold  text-red-600">
                    <LuQuote />
                  </p>
                </div>
              </div>
            </div>
            <div className="1st border-2 border-gray-200 p-4 mx-2 rounded-xl shadow-md shadow-pink-600">
              <div className="flex">
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaRegStarHalfStroke />
                </p>
              </div>
              <p className="text-md py-2">
                Mayor is a talented front-end developer who brouht our vision to
                life. His ability to understand our needs, provide innovative
                solutions, and deliver results on time and on budget is
                impressive.
              </p>
              <div className="flex items-center justify-between">
                <div className="1st">
                  <h2 className="text-red-600 text-xl font-semibold">
                    Akinade Deborah
                  </h2>
                  <p className="text-md">Client</p>
                </div>
                <div>
                  <p className="text-2xl font-bold  text-red-600">
                    <LuQuote />
                  </p>
                </div>
              </div>
            </div>
            <div className="1st border-2 border-gray-200 p-4 mx-2 rounded-xl shadow-md shadow-pink-600">
              <div className="flex">
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaRegStarHalfStroke />
                </p>
              </div>
              <p className="text-md py-2">
                I have worked with several front-end developers in the past, but
                Mayor stands out from the crowd. His passion for development,
                combined with his technical expertise and excellent
                communicationn skills, makes him a joy to work with.
              </p>
              <div className="flex items-center justify-between">
                <div className="1st">
                  <h2 className="text-red-600 text-xl font-semibold">
                    Victoria Makanjuola
                  </h2>
                  <p className="text-md">Client</p>
                </div>
                <div>
                  <p className="text-2xl font-bold  text-red-600">
                    <LuQuote />
                  </p>
                </div>
              </div>
            </div>
            <div className="1st border-2 border-gray-200 p-4 mx-2 rounded-xl shadow-md shadow-pink-600">
              <div className="flex">
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaStar />
                </p>
                <p className="text-2xl font-bold">
                  <FaRegStarHalfStroke />
                </p>
              </div>
              <p className="text-md py-2">
                Mayor is a true professional who exceeded our expectations in
                every way. His ability to balance technical requirements with
                creative vision is impressive, and his dedication to delivering
                quality work is unwavering.
              </p>
              <div className="flex items-center justify-between">
                <div className="1st">
                  <h2 className="text-red-600 text-xl font-semibold">
                    Traversy Jones
                  </h2>
                  <p className="text-md">Client</p>
                </div>
                <div>
                  <p className="text-2xl font-bold  text-red-600">
                    <LuQuote />
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
