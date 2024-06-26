"use client";
import { useConfig } from "@/contexts/portafolio.context";
import { Image, Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import NextImage from "next/image";
import React from "react";
import { TitleSection } from "../Shared/TitleSection/TitleSection";

export const AboutSection = () => {
  const translations = useTranslations('about');
  const { data } = useConfig()!;

  return (
    <div
      id="about"
      className="bg-[#F7F7F7] dark:bg-zinc-800 h-full xl:h-screen flex flex-col xl:flex-row gap-8 xl:gap-12 items-center justify-center p-8 xl:p-0"
    >
      <div className="border-t-5 border-l-5 border-[#CC5500] dark:border-cyan-400 rounded-md overflow-hidden p-4">
        <Image
          as={NextImage}
          src={data?.about?.aboutPicture}
          alt="About Section Background"
          width={400}
          height={1000}
          loading="eager"
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col w-full xl:w-1/2 gap-8">
        <TitleSection
          title={translations("title")}
          classNames={{ divider: "bg-[#CC5500] dark:bg-cyan-400 w-16", base: "justify-start", text: "text-[#333333] dark:text-white" }}
        />

        <p className="text-[#333333] dark:text-white text-justify text-lg xl:text-xl">
          {data?.about?.description}
        </p>
        <div className="flex items-center justify-end">
          <Button
            size="lg"
            variant="bordered"
            className="border-[#CC5500] dark:border-cyan-400 text-[#CC5500] dark:text-cyan-400"
            onClick={() => window.open(data?.about?.urlCurriculum, "_blank")}
          >
            {translations("downloadCV")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
