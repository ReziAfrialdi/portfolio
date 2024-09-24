"use client";
import ButtonTab from "@/components/ui/ButtonTab";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import BackroundAboutPage from "./BackroundAboutPage";
import CertificateAboutPage from "./CertificateAboutPage";
import { gsap } from "gsap";

function InformationSectionAboutpage() {
  const [activeTab, setActiveTab] = useState("background");
  const infoRef = useRef(null);

  const handleClickTab = (name) => {
    setActiveTab(name);
    const targetElement = document.getElementById("info");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(infoRef.current, { y: 5000, duration: 1, ease: "power2.out" });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={infoRef}
      className="px-4 lg:px-10 xl:px-20 pt-3 lg:pt-14 pb-6 mb-48 flex flex-col md:flex-row items-start gap-16 relative"
    >
      <div className="w-full md:w-[18.75%] lg:sticky top-0 z-20">
        <h3 className="heading-3 text-text-primary pb-3 border-b border-tertiary-200">
          About Me
        </h3>
        <div className="flex flex-col mt-8 gap-4 items-start">
          <ButtonTab
            onClick={() => handleClickTab("background")}
            variant={activeTab === "background" ? "active" : "default"}
            color={activeTab === "background" ? "carnation" : "default"}
          >
            Background
          </ButtonTab>
          <ButtonTab
            onClick={() => handleClickTab("certificate")}
            variant={activeTab === "certificate" ? "active" : "default"}
            color={activeTab === "certificate" ? "screaminGreen" : "default"}
          >
            Certificate
          </ButtonTab>
          <ButtonTab
            onClick={() => handleClickTab("tools")}
            variant={activeTab === "tools" ? "active" : "default"}
            color={activeTab === "tools" ? "lemon" : "default"}
          >
            Tools
          </ButtonTab>
        </div>
        <div className="mt-4 w-full">
          <div className="w-full">
            <Image
              src={"/aboutpage/img1.png"}
              width={960}
              height={640}
              quality={100}
              className="w-full  object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div id="info" className="w-full md:w-[81.25%] ">
        <p className="heading-6 md:mt-1 lg:mt-4 text-text-primary pb-3 border-b border-tertiary-200">
          Info
        </p>
        {activeTab === "background" && <BackroundAboutPage />}
        {activeTab === "certificate" && <CertificateAboutPage />}
        {activeTab === "tools" && <div className="mt-8">tools</div>}
      </div>
    </section>
  );
}

export default InformationSectionAboutpage;
