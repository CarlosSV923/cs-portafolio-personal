"use client";
import { useTranslations } from "next-intl";
import { useConfig } from "@/contexts/portafolio.context";
import { CardItemEducation } from "./CardItemEducation";
import { TitleSection } from "../Shared/TitleSection/TitleSection";

export const EducationSection = () => {
  const { data } = useConfig()!;
  const translations = useTranslations("education");

  return (
    <div
      style={{
        backgroundColor: "#1A1A2E",
      }}
      id="education"
      className="h-full flex flex-col items-center justify-center p-8 gap-8 xl:gap-16"
    >
      <TitleSection
        title={translations("title")}
        classNames={{ divider: "w-32", base: "justify-center" }}
      />

      <div className="w-full flex justify-center flex-col xl:flex-row flex-wrap gap-8 xl:gap-16">
        {data?.education?.map((education, index) => (
          <CardItemEducation
            key={`${education.title}-card-education-${index}`}
            education={education}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
