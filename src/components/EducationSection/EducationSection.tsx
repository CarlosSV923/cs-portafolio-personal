"use client";
import { useConfig } from "@/contexts/portafolio.context";
import { Divider } from "@nextui-org/react";
import { CardItemEducation } from "./CardItemEducation";

export const EducationSection = () => {
  const { data, translations } = useConfig()!;

  return (
    <div
      style={{
        backgroundColor: "#1A1A2E",
      }}
      id="education"
      className="h-full flex flex-col items-center justify-center p-8 xl:p-12 gap-8 xl:gap-20"
    >
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-white text-2xl xl:text-4xl font-bold">
            {translations.education}
          </h1>
          <Divider className="mt-2 bg-cyan-400 w-32 h-1" />
        </div>
      </div>

      <div className="flex justify-center flex-col xl:flex-row flex-wrap gap-8 xl:gap-20">
        {data.education?.map((education, index) => (
          <CardItemEducation key={index} index={index} education={education} />
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
