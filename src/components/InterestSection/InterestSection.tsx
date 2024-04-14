"use client";
import { useConfig } from "@/contexts/portafolio.context";
import { TitleSection } from "../Shared/TitleSection/TitleSection";

const InterestSection = () => {
  const { data, translations } = useConfig()!;
  return (
    <div
      id="interests"
      className="bg-zinc-800 h-full flex flex-col items-center justify-center p-8 xl:p-12 gap-8 xl:gap-16"
    >
      <TitleSection
        title={translations.interests}
        classNames={{ divider: "w-16 xl:w-24", base: "justify-center" }}
      />
    </div>
  );
};

export default InterestSection;
