import HeroSectionAboutpage from "@/components/parts/Aboutpage/HeroSectionAboutpage";
import InformationSectionAboutpage from "@/components/parts/Aboutpage/InformationSectionAboutpage";
import React from "react";

export const metadata = {
  title: "About Rezi Afrialdi - UI/UX Designer",
  description:
    "UI/UX & Web Designer focused on crafting intuitive and seamless user experiences.",
};
function AboutPage() {
  return (
    <>
      <HeroSectionAboutpage />
      <InformationSectionAboutpage />
    </>
  );
}

export default AboutPage;
