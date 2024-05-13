import { SkillType } from "@/models/data.model";
import { Progress } from "@nextui-org/react";

export const CardSkills = ({
  skillTitle,
  skillList,
}: {
  skillTitle: string;
  skillList: SkillType[];
}) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <h2 className="text-[#333333] dark:text-white text-xl xl:text-2xl font-bold">{skillTitle}</h2>
      <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {skillList.map((skill, index) => (
          <Progress
            key={`${skill.name}-card-skill-${index}`}
            label={skill.name}
            size="md"
            value={skill.percentage}
            maxValue={100}
            showValueLabel={true}
            classNames={{
              label: "text-[#333333] dark:text-white",
              base: "max-w-md",
              indicator: "bg-gradient-to-r from-[#CC5500] dark:from-cyan-400 to-[#B44B00] dark:to-cyan-600",
              value: "text-[#333333] dark:text-white",
              track: "bg-zinc-700",
            }}
          />
        ))}
      </div>
    </div>
  );
};
