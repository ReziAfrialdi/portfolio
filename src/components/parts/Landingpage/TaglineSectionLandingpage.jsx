"use client";
import Image from "next/image";
import React, { Suspense, lazy } from "react";

// Lazy load Marquee component
const LazyMarquee = lazy(() => import("react-fast-marquee"));

function TaglineSectionLandingpage() {
  return (
    <section className="mt-12 mb-28 py-6 flex w-full border-t border-b border-tertiary-200 items-center justify-center">
      <Suspense
        fallback={<div className="text-transparent">Loading marquee...</div>}
      >
        <LazyMarquee autoFill loop={0}>
          <div className="flex items-center gap-4 mx-4">
            <Image
              src={"/prompt-vi.svg"}
              loading="lazy"
              width={36}
              height={36}
              quality={100}
              className="w-9 h-9"
            />
            <span className="heading-2">
              Bridging Creativity and Technology Through Thoughtful Design.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={"/frame-vi.svg"}
              loading="lazy"
              width={36}
              height={36}
              quality={100}
              className="w-9 h-9"
            />
            <span className="heading-2">
              Bridging Creativity and Technology Through Thoughtful Design.
            </span>
          </div>
        </LazyMarquee>
      </Suspense>
    </section>
  );
}

export default TaglineSectionLandingpage;
