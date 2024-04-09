"use client";
import { useConfig } from "@/contexts/portafolio.context";
import { Divider } from "@nextui-org/react";
import { CardItemExperience } from "./CardItemExperience";

const ExperienceSection = () => {
  const { data, translations } = useConfig()!;

  return (
    <div
      id="experience"
      className="bg-gray-800 h-full flex flex-col items-center justify-center p-8 xl:p-12 gap-8 xl:gap-20"
    >
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-white text-2xl xl:text-4xl font-bold">
            {translations.experience}
          </h1>
          <Divider className="mt-2 bg-cyan-400 w-32 h-1" />
        </div>
      </div>

      <div className="w-full flex justify-center flex-row flex-wrap gap-8 xl:gap-20">
        {data.experience?.map((experience, index) => (
          <CardItemExperience
            experience={experience}
            key={`${experience.position}-card-experience-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
