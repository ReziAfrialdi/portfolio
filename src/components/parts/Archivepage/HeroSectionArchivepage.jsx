"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "@/components/ui/Button";

function HeroSectionArchivePage() {
  const textRef = useRef(null);
  const pRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { rotationY: 90, opacity: 0 },
        {
          rotationY: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
        }
      );
      gsap.fromTo(
        pRef.current,
        { rotationY: 90, opacity: 0 },
        {
          rotationY: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
        }
      );

      imageRefs.current.forEach((img, index) => {
        gsap.fromTo(
          img,
          { rotationY: 90, opacity: 0 },
          { rotationY: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
      });
    });

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section className="px-4 lg:px-10 xl:px-20 pt-3 lg:pt-14 pb-6 mb-7 overflow-hidden w-1/2">
      <div className="flex justify-between w-full md:w-[274px]">
        <div className="flex gap-9 lg:gap-[15.625rem]">
          <Image
            ref={(el) => (imageRefs.current[0] = el)}
            src={"/frame-vi.svg"}
            loading="lazy"
            width={12}
            height={12}
            quality={100}
            className="w-3 h-3 lg:w-3 lg:h-3 object-cover object-center"
          />
          <Image
            ref={(el) => (imageRefs.current[1] = el)}
            src={"/frame-vi.svg"}
            loading="lazy"
            width={12}
            height={12}
            quality={100}
            className="w-3 h-3 lg:w-3 lg:h-3 object-cover object-center"
          />
        </div>
      </div>

      <div className="my-6 flex flex-col md:flex-row justify-between w-full md:w-[274px]">
        <div className="flex flex-col md:w-2/3 lg:w-full gap-3">
          <h2 ref={textRef} className="w-full heading-1">
            My Archive
          </h2>
          <p ref={pRef} className="body-1 text-text-secondary">
            Work from 2020 to 2024
          </p>
        </div>
      </div>

      <div className="flex justify-between w-full md:w-[274px]">
        <div className="flex gap-9 lg:gap-[15.625rem]">
          <Image
            ref={(el) => (imageRefs.current[4] = el)}
            src={"/frame-vi.svg"}
            loading="lazy"
            width={12}
            height={12}
            quality={100}
            className="w-3 h-3 lg:w-3 lg:h-3 object-cover object-center"
          />
          <Image
            ref={(el) => (imageRefs.current[5] = el)}
            src={"/frame-vi.svg"}
            loading="lazy"
            width={12}
            height={12}
            quality={100}
            className="w-3 h-3 lg:w-3 lg:h-3 object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSectionArchivePage;
