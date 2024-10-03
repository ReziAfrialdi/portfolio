"use client";
import React, { useState, useEffect } from "react";
import moment from "moment";
import LogoBrand from "../ui/LogoBrand";
import { useRouter } from "next/navigation";
import { Menu, Xmark } from "iconoir-react";
import Link from "next/link";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(moment().format("hh:mm A"));
  const navigate = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment().format("hh:mm A"));
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup timer
  }, []);

  // Handle scrolling when menu is open
  useEffect(() => {
    if (showMenu) {
      // Add class to body to prevent scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Remove the class to allow scrolling
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount or when showMenu changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  return (
    <header className="w-full px-4 lg:px-10 xl:px-20 pt-7">
      <nav className="w-full flex justify-between lg:justify-normal items-center lg:items-start border-t border-b border-tertiary-200">
        <h1
          onClick={() => navigate.push("/")}
          className="flex lg:w-[35.54%] py-5 heading-5 items-center gap-2 cursor-pointer"
        >
          <LogoBrand />
          <span>Rezi Afrialdi</span>
        </h1>
        <div className="py-6 nav w-[28.90%] items-center hidden lg:flex justify-center border-s border-e border-tertiary-200">
          Batam, Indonesia. {currentTime}
        </div>
        <ul className=" py-6 hidden lg:flex justify-end items-center gap-6 xl:gap-12 w-[35.54%] nav">
          <li className="cursor-pointer hover:text-text-secondary ease-in-out transition-all duration-200 transform">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="cursor-pointer hover:text-text-secondary ease-in-out transition-all duration-200 transform">
            <Link href={"/archive"}>Archive</Link>
          </li>
          <li className="cursor-pointer hover:text-text-secondary ease-in-out transition-all duration-200 transform">
            <a href="mailto:rezi.afrialdi46@gmail.com">Get in Touch</a>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="bg-tertiary-50 p-2 rounded-md"
          >
            <Menu />
          </button>
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-backgroundGradient z-50 transition-transform transform ease-in-out duration-300 ${
            showMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end pr-4 pt-11">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 bg-tertiary-50 rounded-md"
            >
              <Xmark />
            </button>
          </div>
          <ul className=" py-6 flex flex-col  items-start gap-12  nav text-3xl px-4">
            <li
              onClick={() => setShowMenu(false)}
              className="cursor-pointer hover:text-text-secondary ease-in-out transition-all duration-200 transform"
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              onClick={() => setShowMenu(false)}
              className="cursor-pointer hover:text-text-secondary ease-in-out transition-all duration-200 transform"
            >
              <Link href={"/about"}>About</Link>
            </li>
            <li
              onClick={() => setShowMenu(false)}
              className="cursor-pointer hover:text-text-secondary ease-in-out transition-all duration-200 transform"
            >
              <Link href={"/archive"}>Archive</Link>
            </li>
            <li
              onClick={() => setShowMenu(false)}
              className="cursor-pointer hover:text-text-secondary ease-in-out transition-all duration-200 transform"
            >
              <a href="mailto:rezi.afrialdi46@gmail.com">Get in Touch</a>
            </li>
          </ul>
          <div className="my-16 py-6 px-4 nav text-xl items-center flex justify-start border-t border-b border-tertiary-200">
            Batam, Indonesia. {currentTime}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
