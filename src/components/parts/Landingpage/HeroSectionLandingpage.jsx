import Image from "next/image";
import React from "react";

function HeroSectionLandingpage() {
  return (
    <section className="px-4 lg:px-20 pt-3 lg:pt-14 pb-6">
      <div className="w-full flex justify-between">
        <div className="flex gap-9 lg:gap-[15.625rem]">
          <Image
            src={"/frame-vi.svg"}
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
        <div className="flex gap-9 lg:gap-[15.625rem]">
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
      </div>
      <div className="my-6 flex flex-col md:flex-row justify-between w-full gap-">
        <div className="flex flex-col md:w-2/3 lg:w-full gap-3">
          <h2 className="w-full heading-1 ">
            UI/UX & Web Designer Focused on
            <br className="lg:block hidden" />
            Crafting Intuitive Interfaces, Seamless{" "}
            <br className="lg:block hidden" /> User Experiences That Solve Real
            Problems.
          </h2>
          <p className="body-1 text-text-secondary">
            Crafting modern, minimalist solutions for ui/ux challenges.
          </p>
        </div>
        <div className="hidden md:block">
          <Image
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
            src={"/frame-vi.svg"}
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
        <div className="flex gap-9 lg:gap-[15.625rem]">
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
      </div>
    </section>
  );
}

export default HeroSectionLandingpage;
