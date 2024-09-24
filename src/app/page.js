import CollabSectionLandingpage from "@/components/parts/Landingpage/CollabSectionLandingpage";
import HeroSectionLandingpage from "@/components/parts/Landingpage/HeroSectionLandingpage";
import TaglineSectionLandingpage from "@/components/parts/Landingpage/TaglineSectionLandingpage";
import WorkSectionLandingpage from "@/components/parts/Landingpage/WorkSectionLandingpage";

export const metadata = {
  title: "Rezi Afrialdi - UI/UX Designer",
  description:
    "UI/UX & Web Designer focused on crafting intuitive and seamless user experiences.",
};
export default function Home() {
  return (
    <>
      <HeroSectionLandingpage />
      <WorkSectionLandingpage />
      <TaglineSectionLandingpage />
      <CollabSectionLandingpage />
    </>
  );
}
