import Image from "next/image";
import React from "react";
import LogoBrand from "../ui/LogoBrand";
import { Github, Instagram, Linkedin } from "iconoir-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="pb-7 px-4 lg:px-20 relative">
      <div className="w-full flex justify-between items-center border-b border-tertiary-200 pb-6">
        <Image
          src={"/frame-vi.svg"}
          loading="lazy"
          width={12}
          height={12}
          quality={100}
          className="w-5 h-5 lg:w-3 lg:h-3 object-cover object-center"
        />
        <Image
          src={"/prompt-vi.svg"}
          loading="lazy"
          width={12}
          height={12}
          quality={100}
          className="w-5 h-5 lg:w-3 lg:h-3 object-cover object-center"
        />
        <Image
          src={"/frame-vi.svg"}
          loading="lazy"
          width={12}
          height={12}
          quality={100}
          className="w-5 h-5 lg:w-3 lg:h-3 object-cover object-center"
        />
      </div>
      <div className="w-full flex  flex-col lg:flex-row items-center mt-6">
        <div className="flex flex-row justify-between w-full lg:w-[51%]">
          <p className="nav text-text-secondary">Rezi Afrialdi, ©️ 2024.</p>
          <div className="inline">
            <LogoBrand />
          </div>
        </div>
        <div className="w-full mt-6 lg:mt-auto lg:w-[49%] flex justify-center lg:justify-end">
          <div className="flex items-center gap-3">
            <Link
              target="_blank"
              href={"https://instagram.com/rezi.afrialdi"}
              className={`text-tertiary-900 bg-primary-50 px-4 lg:px-2 py-2 h-12 lg:h-8 rounded-lg flex justify-center items-center gap-1 hover:bg-primary-500 hover:text-text-white group cursor-pointer duration-300 ease-in-out transition-all transform hover:rounded-none hover:px-7`}
            >
              <Instagram className="w-6 h-6 lg:w-4 lg:h-4" />
              <span className="nav hidden group-hover:inline-block transition-all transform translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-text-white duration-500 ease-in-out">
                Instagram
              </span>
            </Link>

            <Link
              target="_blank"
              href={"https://linkedin.com/in/reziafrialdi"}
              className={`text-tertiary-900 bg-primary-50 px-4 lg:px-2 py-2 h-12 lg:h-8 rounded-lg flex justify-center items-center gap-1 hover:bg-primary-500 hover:text-text-white group cursor-pointer duration-300 ease-in-out transition-all transform hover:rounded-none hover:px-7`}
            >
              <Linkedin className="w-6 h-6 lg:w-4 lg:h-4" />
              <span className="nav hidden group-hover:inline-block transition-all transform translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-text-white duration-500 ease-in-out">
                Linkedin
              </span>
            </Link>
            <Link
              target="_blank"
              href={"https://github.com/ReziAfrialdi"}
              className={`text-tertiary-900 bg-primary-50 px-4 lg:px-2 py-2 h-12 lg:h-8 rounded-lg flex justify-center items-center gap-1 hover:bg-primary-500 hover:text-text-white group cursor-pointer duration-300 ease-in-out transition-all transform hover:rounded-none hover:px-7`}
            >
              <Github className="w-6 h-6 lg:w-4 lg:h-4" />
              <span className="nav hidden group-hover:inline-block transition-all transform translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-text-white duration-500 ease-in-out">
                Github
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full relative z-[-1]">
        <div className="w-[250px] h-[250px] absolute -top-56 -left-4 lg:-left-20">
          <Image
            src={"/footer-vi-l.png"}
            width={150}
            height={150}
            quality={100}
            className="w-full h-full"
          />
        </div>
        <div className="w-[250px] h-[250px] absolute -top-56 -right-4 lg:-right-20">
          <Image
            src={"/footer-vi-r.png"}
            width={150}
            height={150}
            quality={100}
            className="w-full h-full"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
