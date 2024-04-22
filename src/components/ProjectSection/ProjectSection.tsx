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
      style={{
        backgroundColor: "#1A1A2E",
      }}
      id="projects"
      className="h-full flex flex-col items-center justify-center p-8 gap-8 xl:gap-16"
    >
      <TitleSection
        title={translations("title")}
        classNames={{ divider: "w-16 xl:w-24", base: "justify-center" }}
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
