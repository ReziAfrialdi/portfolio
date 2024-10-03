"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function BackroundAboutPage() {
  const sectionsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate opacity from 0 to 1 for each section
      gsap.fromTo(
        sectionsRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <div ref={sectionsRef} className="mt-8 flex flex-col gap-6 ">
      <div className="border-b border-tertiary-200 pb-6">
        <h5 className="heading-5 text-text-primary">Hi, I'm Rezi Afrialdi</h5>
        <p className="body-1 text-text-secondary mt-2">
          A dedicated UI/UX & Web Designer <br /> Thriving on crafting intuitive
          and seamless digital experiences.
        </p>
      </div>
      <div className="border-b border-tertiary-200 pb-6">
        <h5 className="heading-5 text-text-primary">My Passion</h5>
        <p className="body-1 text-text-secondary mt-2">
          Solving real-world problems through modern and minimalist design.
          <br /> Simplicity doesn't compromise functionality.
        </p>
      </div>
      <div className="border-b border-tertiary-200 pb-6">
        <h5 className="heading-5 text-text-primary">4+ Years of Experience</h5>
        <p className="body-1 text-text-secondary mt-2">
          Helping businesses and individuals transform their ideas into clean,{" "}
          <br /> user-friendly interfaces.Optimized for usability and
          aesthetics.
        </p>
      </div>
      <div className="">
        <h5 className="heading-5 text-text-primary">Approach</h5>
        <p className="body-1 text-text-secondary mt-2">
          Whether designing full-scale websites or refining mobile app user
          journeys, <br />
          my goal is to deliver solutions that meet both user needs and business
          objectives.
        </p>
      </div>
    </div>
  );
}

export default BackroundAboutPage;
