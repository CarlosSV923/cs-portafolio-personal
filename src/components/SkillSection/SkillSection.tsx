"use client";
import { useConfig } from "@/contexts/portafolio.context";
import { CardSkills } from "./CardSkills";
import { TitleSection } from "../Shared/TitleSection/TitleSection";
import { useTranslations } from "next-intl";

const SkillSection = () => {
  const { data } = useConfig()!;
  const translations = useTranslations("skills");
  return (
    <div
      id="skils"
      className="bg-[#E8E8E8] dark:bg-zinc-800 h-full flex flex-col items-center justify-center p-8 xl:p-12 gap-8 xl:gap-16"
    >
      <TitleSection
        title={translations("title")}
        classNames={{
          divider: "bg-[#CC5500] dark:bg-cyan-400 w-16 xl:w-24",
          base: "justify-center",
          text: "text-[#333333] dark:text-white",
        }}
      />
      <div className="flex flex-col w-full gap-8 xl:gap-16">
        {data?.skills?.tech && (
          <CardSkills
            skillTitle={translations("techSkills")}
            skillList={data?.skills.tech}
          />
        )}
        {data?.skills?.soft && (
          <CardSkills
            skillTitle={translations("softSkills")}
            skillList={data?.skills.soft}
          />
        )}
      </div>
    </div>
  );
};

export default SkillSection;
