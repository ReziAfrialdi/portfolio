"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function HeroSectionLandingpage() {
  const heroImgRef = useRef(null);
  const textRef = useRef(null);
  const pRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi untuk h2 dan p dengan efek cinema-flip
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 500, rotationX: 90 }, // Mulai dari bawah dengan rotasi
        {
          opacity: 1,
          y: 0,
          rotationX: 0, // Akhir dengan posisi normal
          duration: 1.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        pRef.current,
        { opacity: 0, y: 500, rotationX: 90 }, // Mulai dari bawah dengan rotasi
        {
          opacity: 1,
          y: 0,
          rotationX: 0, // Akhir dengan posisi normal
          duration: 1.2,
          delay: 0.2, // Sedikit keterlambatan untuk paragraf
          ease: "power3.out",
        }
      );

      // Animasi untuk gambar hero
      if (heroImgRef.current) {
        gsap.fromTo(
          heroImgRef.current,
          { x: 200, opacity: 0 }, // Mulai dari kanan dengan opacity 0
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "elastic.out(1, 0.3)", // Easing elastic
          }
        );
      }
      imageRefs.current.forEach((img, index) => {
        gsap.fromTo(
          img,
          { rotationY: 90, opacity: 0 },
          { rotationY: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
      });
      // Animasi untuk gambar
      // imageRefs.current.forEach((imageRef, index) => {
      //   gsap.fromTo(
      //     imageRef,
      //     {
      //       scale: 1,
      //       y: gsap.utils.random(20, -20),
      //       x: gsap.utils.random(20, -20),
      //     }, // Mengatur posisi awal dengan translateX acak
      //     {
      //       scale: 1.1,
      //       y: gsap.utils.random(-20, 20),
      //       x: gsap.utils.random(-20, 20),
      //       repeat: -1,
      //       yoyo: true,
      //       ease: "sine.inOut",
      //       duration: gsap.utils.random(1, 2),
      //     }
      //   );
      // });
    });

    return () => {
      // Clean up animasi
      ctx.revert();
    };
  }, []);

  return (
    <section className="px-4 lg:px-10 xl:px-20 mt-5 lg:mt-20">
      <div className="w-full flex justify-between">
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
        <div className="flex gap-9 lg:gap-[15.625rem]">
          <Image
            ref={(el) => (imageRefs.current[2] = el)}
            src={"/prompt-vi.svg"}
            loading="lazy"
            width={12}
            height={12}
            quality={100}
            className="w-3 h-3 lg:w-3 lg:h-3 object-cover object-center"
          />
          <Image
            ref={(el) => (imageRefs.current[3] = el)}
            src={"/frame-vi.svg"}
            loading="lazy"
            width={12}
            height={12}
            quality={100}
            className="w-3 h-3 lg:w-3 lg:h-3 object-cover object-center"
          />
        </div>
      </div>
      <div className="my-6 flex flex-col md:flex-row justify-between w-full">
        <div className="flex flex-col md:w-2/3 lg:w-full gap-3">
          <h2 ref={textRef} className="w-full heading-1">
            UI/UX & Web Designer Focused on
            <br className="lg:block hidden" />
            Crafting Intuitive Interfaces, Seamless{" "}
            <br className="lg:block hidden" /> User Experiences That Solve Real
            Problems.
          </h2>
          <p ref={pRef} className="body-1 text-text-secondary">
            Crafting modern, minimalist solutions for ui/ux challenges.
          </p>
        </div>
        <div className="hidden md:block">
          <Image
            ref={heroImgRef}
            src={"/hero-vi.svg"}
            loading="lazy"
            width={58}
            height={120}
            quality={100}
            className="w-[58px] h-[120px]"
          />
        </div>
      </div>
      <div className="w-full flex justify-between">
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
        <div className="flex gap-9 lg:gap-[15.625rem]">
          <Image
            ref={(el) => (imageRefs.current[6] = el)}
            src={"/prompt-vi.svg"}
            loading="lazy"
            width={12}
            height={12}
            quality={100}
            className="w-3 h-3 lg:w-3 lg:h-3 object-cover object-center"
          />
          <Image
            ref={(el) => (imageRefs.current[7] = el)}
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

export default HeroSectionLandingpage;
