"use client";
import AboutSection from "@/components/AboutSection/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import EducationSection from "@/components/EducationSection/EducationSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import GeneralSection from "@/components/GeneralSection/GeneralSection";
import InterestSection from "@/components/InterestSection/InterestSection";
import { Loader } from "@/components/Loader/Loader";
import NavBar from "@/components/NavBar/NavBar";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import SkillSection from "@/components/SkillSection/SkillSection";
import { useConfig } from "@/contexts/portafolio.context";

export default function HomePage() {
  const { data, isLoading } = useConfig()!;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <GeneralSection />
          <AboutSection />
          <SkillSection />
          <ExperienceSection />
          <EducationSection />
          <InterestSection />
          <ProjectSection />
          <ContactSection />
        </>
      )}
    </>
  );
}
