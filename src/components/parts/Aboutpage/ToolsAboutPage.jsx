"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const dataTools = [
  {
    name: "Figma",
    description: "UI design and interactive prototypes",
    icon: "/aboutpage/tools/figma.svg",
    category: "UI/UX Design",
  },
  {
    name: "Maze",
    description: "User testing based on research.",
    icon: "/aboutpage/tools/maze.svg",
    category: "UI/UX Design",
  },
  {
    name: "Notion",
    description: "Project management and documentation.",
    icon: "/aboutpage/tools/notion.svg",
    category: "UI/UX Design",
  },
  {
    name: "Framer",
    description: "Interactive prototypes with animations.",
    icon: "/aboutpage/tools/framer.svg",
    category: "UI/UX Design",
  },
  {
    name: "Visual Studio Code",
    description: "Primary code editor for front-end.",
    icon: "/aboutpage/tools/vscode.svg",
    category: "Dev",
  },
  {
    name: "Javascript Programming Language",
    description: "Web logic and interactivity.",
    icon: "/aboutpage/tools/js.svg",
    category: "Dev",
  },
  {
    name: "React JS",
    description: "Building dynamic and interactive UIs.",
    icon: "/aboutpage/tools/reactjs.svg",
    category: "Dev",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS for fast styling.",
    icon: "/aboutpage/tools/tailwind.svg",
    category: "Dev",
  },
  {
    name: "Framer Motion",
    description: "Animations for React with Framer.",
    icon: "/aboutpage/tools/framerMotion.svg",
    category: "Dev",
  },
  {
    name: "GSAP",
    description: "Smooth and responsive animations.",
    icon: "/aboutpage/tools/gsap.svg",
    category: "Dev",
  },
  {
    name: "Next JS",
    description: "Web apps with server-side rendering.",
    icon: "/aboutpage/tools/nextjs.svg",
    category: "Dev",
  },
  {
    name: "Github",
    description: "Version control and collaboration for code.",
    icon: "/aboutpage/tools/github.svg",
    category: "Dev",
  },
  {
    name: "HTML",
    description: "Basic structure of web pages.",
    icon: "/aboutpage/tools/html.svg",
    category: "Dev",
  },
  {
    name: "CSS",
    description: "Responsive and aesthetic design.",
    icon: "/aboutpage/tools/css.svg",
    category: "Dev",
  },
];

function ToolsAboutPage() {
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
    <div ref={sectionsRef} className="mt-8 flex flex-col gap-4 ">
      {dataTools.map((item, idx) => (
        <div
          key={idx}
          className="border-b border-tertiary-200 pb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8">
              <Image
                src={item.icon}
                width={48}
                height={48}
                loading="lazy"
                quality={100}
                className="w-full h-full "
              />
            </div>
            <div className="">
              <p className="heading-5 text-text-primary">{item.name}</p>
              <p className="mt-2 body-2 text-text-secondary">
                {item.description}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-auto mt-3 lg:mt-0">
            <Button
              variant="secondary"
              className={"text-text-secondary body-2 cursor-default w-full"}
            >
              {item.category}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToolsAboutPage;
