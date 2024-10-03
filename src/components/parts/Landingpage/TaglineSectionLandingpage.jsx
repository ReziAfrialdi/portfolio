"use client";
import Image from "next/image";
import React, { Suspense, lazy } from "react";

// Lazy load Marquee component
const LazyMarquee = lazy(() => import("react-fast-marquee"));

function TaglineSectionLandingpage() {
  return (
    <section className="mt-14 py-6 flex w-full border-t border-b border-tertiary-200 items-center justify-center">
      <Suspense
        fallback={<div className="text-transparent">Loading marquee...</div>}
      >
        <LazyMarquee autoFill loop={0}>
          <div className="flex items-center gap-2 mr-2">
            <Image
              src={"/prompt-vi.svg"}
              loading="lazy"
              width={12}
              height={12}
              quality={100}
              className="w-3 h-3"
            />
            <span className="heading-6">
              Bridging Creativity and Technology Through Thoughtful Design.
            </span>
          </div>
          <div className="flex items-center gap-2 mr-2">
            <Image
              src={"/frame-vi.svg"}
              loading="lazy"
              width={12}
              height={12}
              quality={100}
              className="w-3 h-3"
            />
            <span className="heading-6">
              Bridging Creativity and Technology Through Thoughtful Design.
            </span>
          </div>
        </LazyMarquee>
      </Suspense>
    </section>
  );
}

export default TaglineSectionLandingpage;
