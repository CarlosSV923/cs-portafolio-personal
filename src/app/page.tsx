import AboutSection from "@/components/AboutSection/AboutSection";
import EducationSection from "@/components/EducationSection/EducationSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import GeneralSection from "@/components/GeneralSection/GeneralSection";
import NavBar from "@/components/NavBar/NavBar";
import SkillSection from "@/components/SkillSection/SkillSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <GeneralSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillSection />
    </>
  );
}
