"use client";
import { useConfig } from "@/contexts/portafolio.context";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import React from "react";

export const AboutSection = () => {
  const { data, translations } = useConfig()!;

  return (
    <div className="bg-black h-full xl:h-screen flex gap-12 items-center justify-center">
      <Image 
        as={NextImage}
        src={data.about?.aboutPicture}
        alt="About Section Background"
        width={400}
        height={1000} 
        isBlurred
        // className="flex-1"
    />
    <div
        className="flex flex-col w-1/2 gap-6"
    >
        <h1 className="text-white text-2xl xl:text-4xl">
            {translations.about}
        </h1>
        <p className="text-white text-sm xl:text-lg">
            {data.about?.description}
        </p>
    </div>
    </div>
  );
};

export default AboutSection;
