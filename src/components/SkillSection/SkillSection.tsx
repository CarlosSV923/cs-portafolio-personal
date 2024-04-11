"use client";
import { useConfig } from "@/contexts/portafolio.context";
import { Divider, Progress } from "@nextui-org/react";

const SkillSection = () => {
  const { data, translations } = useConfig()!;
  return (
    <div
      id="skils"
      className="bg-zinc-800 h-full flex flex-col items-center justify-center p-8 xl:p-12 gap-8 xl:gap-16"
    >
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-white text-2xl xl:text-4xl font-bold">
            {translations.skills}
          </h1>
          <Divider className="mt-2 bg-cyan-400 w-32 h-1" />
        </div>
      </div>
      <div className="flex flex-col w-full gap-8 xl:gap-16">
        {data.skills?.tech && (
          <div className="flex flex-col w-full gap-4">
            <h2 className="text-white text-xl xl:text-2xl font-bold">
              {translations.techSkills}
            </h2>
            <div className="grid grid-cols-4 gap-8">
              {data.skills.tech.map((tech, index) => (
                <Progress
                  key={`${tech.name}-card-skill-${index}`}
                  label={tech.name}
                  size="sm"
                  value={tech.percentage}
                  maxValue={100}
                  showValueLabel={true}
                  className="max-w-md text-white"
                />
              ))}
            </div>
          </div>
        )}
        {data.skills?.soft && (
          <div className="flex flex-col w-full gap-4">
            <h2 className="text-white text-xl xl:text-2xl font-bold">
              {translations.softSkills}
            </h2>
            <div className="grid grid-cols-4 gap-8">
              {data.skills.soft.map((soft, index) => (
                <Progress
                  key={`${soft.name}-card-skill-${index}`}
                  label={soft.name}
                  size="sm"
                  value={soft.percentage}
                  maxValue={100}
                  showValueLabel={true}
                  className="max-w-md text-white"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillSection;
