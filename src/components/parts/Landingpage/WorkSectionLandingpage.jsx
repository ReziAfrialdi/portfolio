"use client";
import CardPortfolio from "@/components/atoms/CardPortfolio";
import ButtonTab from "@/components/ui/ButtonTab";
import { dataDesign } from "@/data_portfolio/design";
import { dataDevelopment } from "@/data_portfolio/development";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

function WorkSectionLandingpage() {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("design");
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animating the section's opacity
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 500 },
        { opacity: 1, y: 0, duration: 2, ease: "power2.out" }
      );

      // Animating cards only in the second row
      const startIndex = activeTab === "design" ? 3 : 3; // Assuming 3 cards per row, adjust this if needed

      cardRefs.current.forEach((cardRef, index) => {
        if (index >= startIndex) {
          // Only animate cards in the second row
          gsap.fromTo(
            cardRef,
            { y: 500, opacity: 0 }, // Starting position (slightly below) and opacity
            {
              y: 0, // Ending position (original)
              opacity: 1,
              duration: 1,
              delay: (index - startIndex) * 0.75, // Stagger the animation by 0.15 seconds based on index
              // scrollTrigger: {
              //   trigger: cardRef,
              //   start: "top 100%", // Start the animation when the top of the card is 80% down the viewport
              //   toggleActions: "play none none none", // Play on enter, reverse on leave
              //   markers: true // Uncomment this to see the markers for debugging
              // },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab]); // Re-run the effect when the active tab changes

  return (
    <section ref={sectionRef} className="px-4 lg:px-10 xl:px-20 mt-3 lg:mt-12">
      <div className="w-full flex flex-col md:flex-row md:justify-between mt-8 md:mt-0 md:items-center pb-3 border-b border-tertiary-200">
        <h3 className="heading-3">My Work</h3>
        <div className="flex items-center gap-2 mt-5 md:mt-0">
          <ButtonTab
            onClick={() => setActiveTab("design")}
            color="purple"
            variant={activeTab === "design" ? "active" : "default"}
          >
            Design
          </ButtonTab>
          <ButtonTab
            onClick={() => setActiveTab("development")}
            color="blue"
            variant={activeTab === "development" ? "active" : "default"}
          >
            Development
          </ButtonTab>
        </div>
      </div>
      {activeTab === "design" && (
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-x-7 gap-y-10">
          {dataDesign?.map((item, idx) => (
            <CardPortfolio
              ref={(el) => (cardRefs.current[idx] = el)} // Assign each card to cardRefs
              key={idx}
              category={item.category}
              abstract={item.abstract}
              brand_logo={item.brand_logo}
              finish_date={item.finish_date}
              link={item.link}
              thumbnail_img={item.thumbnail_img}
              title={item.title}
            />
          ))}
        </div>
      )}
      {activeTab === "development" && (
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-x-7 gap-y-10">
          {dataDevelopment?.map((item, idx) => (
            <CardPortfolio
              ref={(el) => (cardRefs.current[idx] = el)} // Assign each card to cardRefs
              key={idx}
              category={item.category}
              abstract={item.abstract}
              brand_logo={item.brand_logo}
              finish_date={item.finish_date}
              link={item.link}
              thumbnail_img={item.thumbnail_img}
              title={item.title}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default WorkSectionLandingpage;
