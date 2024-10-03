"use client";
import Button from "@/components/ui/Button";
import gsap from "gsap";
import { ArrowUpRight } from "iconoir-react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const dataCertificate = [
  {
    title: "BuiltWithAngga - React JS",
    date: "August 2024",
    category: "Dev",
    link: "https://drive.google.com/file/d/10z_PBI5VdPWJ4CryDeS6O6rTHrVu4aqG/view?usp=sharing",
  },
  {
    title: "BuildWithAngga - HTML5 Tailwind CSS",
    date: "May 2024",
    category: "Dev",
    link: "https://drive.google.com/file/d/1AsdIa_dmtNgt-X5R8rPfESF1S4F6KTPu/view?usp=sharing",
  },
  {
    title: "Maritim Muda Nusantara - Graphic Designer Internship",
    date: "June 2023",
    category: "Graphic Design",
    link: "https://drive.google.com/file/d/1AsdIa_dmtNgt-X5R8rPfESF1S4F6KTPu/view?usp=sharing",
  },
  {
    title: "Universitas Esa Unggul - UI/UX Speaker",
    date: "May 2023",
    category: "UI/UX Design",
    link: "https://drive.google.com/file/d/1ovFJxI2jo4EC1mPwRh2zexePxYgXdHVL/view?usp=sharing",
  },
  {
    title: "BuildWithAngga - Dart Programming",
    date: "May 2023",
    category: "Dev",
    link: "https://drive.google.com/file/d/1KzAI3n7fEzDlcZ1xdv-TnAzwf3F85RZH/view?usp=sharing",
  },
  {
    title: "2022 Gemastik XV - UX Design",
    date: "November 2022",
    category: "UI/UX Design",
    link: "https://drive.google.com/file/d/1bVZ3MnFnkqLxlYLTnYgNNeLrqdetKXir/view?usp=sharing",
  },
  {
    title: "Dicoding - Front End Developer",
    date: "November 2022",
    category: "Dev",
    link: "https://drive.google.com/file/d/18m-Wi-zw6fQV6mlEzfQuZLl5Yx9Yn3Ea/view?usp=sharing",
  },
  {
    title: "ITEBA - Ideation UI/UX Competition HIMATEK & HMSI",
    date: "January 2022",
    category: "UI/UX Design",
    link: "https://drive.google.com/file/d/110yqjkvpkmZzBTrTMtIAXnAjx2rqXuTk/view?usp=sharing",
  },
];

function CertificateAboutPage() {
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
    <div ref={sectionsRef} className="pt-8 overflow-x-auto">
      <table className="min-w-full lg:inline-table hidden">
        <tbody>
          {dataCertificate.map((item, idx) => (
            <tr key={idx} className="align-middle">
              <td className="py-2.5 body-2 text-text-secondary w-[18%]">
                {item.date}
              </td>
              <td className="py-2.5 heading-5 text-text-primary w-[45%]">
                {item.title}
              </td>
              <td className="py-2.5 w-[37%] text-right">
                <div className="flex justify-end items-center gap-2">
                  <span>
                    <Button
                      variant="secondary"
                      className="body-2 text-text-secondary cursor-default"
                    >
                      {item.category}
                    </Button>
                  </span>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="relative  group"
                  >
                    <Button
                      variant="secondary"
                      className="absolute -top-5 -left-32 scale-0 group-hover:scale-100 px-0 w-36 text-sm bg-primary-500 text-text-white border-none"
                    >
                      <span className="tooltip-text">View</span>{" "}
                      {/* Tooltip text */}
                    </Button>
                    <Button
                      variant="secondary"
                      className="body-2 text-tertiary-800 border-none rounded-xl bg-secondary-600 hover:rounded-none hover:bg-primary-500 hover:text-text-white px-[10px] py-[10px]"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* mobile view */}

      <div className="lg:hidden flex flex-col gap-5">
        {dataCertificate.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col border-b border-tertiary-200 pb-4"
          >
            <div className="body-2 text-text-primary">{item.date}</div>
            <div className="heading-5 text-text-primary">{item.title}</div>
            <div className="body-2 text-text-secondary mt-5">
              <Button
                className="body-2 text-text-secondary w-full"
                variant="secondary"
              >
                {item.category}
              </Button>
            </div>
            <Link
              href={item.link}
              target="_blank"
              className="body-2 text-text-secondary mt-3"
            >
              <Button
                className="body-2 flex items-center justify-center w-full"
                variant="primary"
              >
                View Certificate <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificateAboutPage;
