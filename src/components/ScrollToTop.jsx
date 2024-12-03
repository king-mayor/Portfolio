"use client";
import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { useEffect, useState } from "react";
const ScrollToTop = () => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setMenu(true);
      } else {
        setMenu(false);
      }
    });
  }, []);
  useEffect(() => {
    const handleToggle = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  }, []);
  return (
    <div>
      <div>
        {menu && (
          <div className="fixed right-5 bottom-5" onClick={handleToggle}>
            <FaArrowCircleUp className="text-5xl font-bold text-red-600 cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollToTop;
