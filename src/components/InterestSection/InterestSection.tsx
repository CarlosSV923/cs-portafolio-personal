"use client";
import { useConfig } from "@/contexts/portafolio.context";
import { useTranslations } from "next-intl";
import { TitleSection } from "../Shared/TitleSection/TitleSection";
import { CardItemInterest } from "./CardItemInterest";

const InterestSection = () => {
  const { data } = useConfig()!;
  const translations = useTranslations("interests");

  return (
    <div
      id="interests"
      className="bg-zinc-800 h-full flex flex-col items-center justify-center p-8 xl:p-12 gap-8 xl:gap-16"
    >
      <TitleSection
        title={translations("title")}
        classNames={{ divider: "w-16 xl:w-24", base: "justify-center" }}
      />

      <div className="w-full flex justify-center flex-row flex-wrap gap-8 xl:gap-16">
        {data?.interests.map((interest) => (
          <CardItemInterest
            key={`${interest.name}-interest-id`}
            interest={interest}
          />
        ))}
      </div>
    </div>
  );
};

export default InterestSection;
