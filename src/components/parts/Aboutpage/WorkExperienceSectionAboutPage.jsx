"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const dataExperience = [
  {
    logo: "/aboutpage/sore-logo.svg",
    companyName: "SORE Pixel Crafters",
    position: "UI/UX Designer",
    date: "July 2023 - Now",
    category: "Freelance",
  },
  {
    logo: "/aboutpage/maritimmuda-logo.svg",
    companyName: "Maritim Muda Nusantara",
    position: "Graphic Designer and Social Media Staff",
    date: "February - June 2023",
    category: "Internship",
  },
];

function WorkExperienceSectionAboutPage() {
  // Create refs to target the elements for animation
  const sectionRef = useRef(null);
  const tableRef = useRef(null);
  const mobileItemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 500 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-4 lg:px-10 xl:px-20 pt-3 lg:pt-14 pb-6 mt-12 lg:mt-[9.5rem] mb-32 flex flex-col md:flex-row items-start lg:gap-16 gap-4 relative"
    >
      <div className="w-full md:w-[18.75%] ">
        <h3 className="heading-3 text-text-primary pb-3 ">
          Work <br className="lg:block hidden" /> Experience
        </h3>
      </div>
      <div className="w-full md:w-[81.25%]">
        <table className="w-full text-left lg:inline-table hidden">
          <tbody>
            {dataExperience.map((item, idx) => (
              <tr key={idx} className="border-b border-tertiary-200">
                <td className="w-16 h-16 ">
                  <Image
                    width={128}
                    height={128}
                    quality={100}
                    src={item.logo}
                    loading="lazy"
                    className="w-full h-full"
                  />
                </td>
                <td className="pl-4 py-6">
                  <p className="font-medium heading-5 text-text-primary">
                    {item.companyName}
                  </p>
                  <p className="body-2 text-text-secondary">{item.position}</p>
                </td>
                <td className="text-left py-6 body-2 text-text-secondary">
                  {item.date}
                </td>
                <td className="text-right py-6">
                  <Button
                    variant="secondary"
                    className={"text-text-secondary body2 cursor-default"}
                  >
                    {item.category}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile view with flex items */}
        <div className="lg:hidden flex flex-col gap-8">
          {dataExperience.map((item, idx) => (
            <div key={idx} className="flex flex-col ">
              <div className="flex items-start gap-2">
                <div className="w-10 h-10 ">
                  <Image
                    width={128}
                    height={128}
                    quality={100}
                    loading="lazy"
                    src={item.logo}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <p className="heading-5 text-text-primary">
                    {item.companyName}
                  </p>
                  <p className="body-2 text-text-secondary mt-2">
                    {item.position}
                  </p>
                  <p className="body-2 text-text-secondary mt-3">{item.date}</p>
                  <div className="mt-4 w-full">
                    <Button
                      variant="secondary"
                      className={"body-2 text-text-secondary"}
                    >
                      {item.category}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperienceSectionAboutPage;
