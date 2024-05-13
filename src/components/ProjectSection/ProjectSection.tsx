"use client";
import { useConfig } from "@/contexts/portafolio.context";
import { TitleSection } from "../Shared/TitleSection/TitleSection";
import { CardItemProject } from "./CardItemProject";
import { useTranslations } from "next-intl";

const ProjectSection = () => {
  const { data } = useConfig()!;
  const translations = useTranslations("projects");


  return (
    <div
      id="projects"
      className="bg-white dark:bg-[#1A1A2E] h-full flex flex-col items-center justify-center p-8 gap-8 xl:gap-16"
    >
      <TitleSection
        title={translations("title")}
        classNames={{
          divider: "bg-[#CC5500] dark:bg-cyan-400 w-16 xl:w-24",
          base: "justify-center",
          text: "text-[#333333] dark:text-white",
        }}
      />

      <div className="w-full flex justify-center flex-row flex-wrap gap-8 xl:gap-16">
        {data?.projects.map((project) => (
          <CardItemProject
            key={`${project.name}-project-id`}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
