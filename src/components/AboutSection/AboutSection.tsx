"use client";
import { useConfig } from "@/contexts/portafolio.context";
import { Image, Divider, Button } from "@nextui-org/react";
import NextImage from "next/image";
import React from "react";

export const AboutSection = () => {
  const { data, translations } = useConfig()!;

  return (
    <div 
    id="about"
    className="bg-zinc-800 h-full xl:h-screen flex flex-col xl:flex-row gap-8 xl:gap-12 items-center justify-center p-8 xl:p-0">
      <div
        className="border-t-5 border-l-5 border-cyan-400 rounded-md overflow-hidden p-4"
      >
        <Image
          as={NextImage}
          src={data.about?.aboutPicture}
          alt="About Section Background"
          width={400}
          height={1000}
          loading="eager"
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col w-full xl:w-1/2 gap-2">
        <h1 className="text-white font-bold text-2xl xl:text-4xl">
          {translations.about}
        </h1>
        <Divider className="mt-2 mb-5 xl:mb-8 bg-cyan-400 w-28 h-1" />
        <p className="text-white text-justify text-lg xl:text-xl">
          {data.about?.description}
        </p>
        <div className="flex items-center justify-end mt-8">
          <Button
            size="lg"
            variant="bordered"
            className="border-cyan-400 text-cyan-400"
            onClick={() => window.open(data.about?.urlCurriculum, "_blank")}
          >
            {translations.downloadCV}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
