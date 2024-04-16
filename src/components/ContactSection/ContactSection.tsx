"use client";
import { useConfig } from "@/contexts/portafolio.context";
import { TitleSection } from "../Shared/TitleSection/TitleSection";
import { CardItemContact } from "./CardItemContact";

const ContactSection = () => {
  const { translations } = useConfig()!;

  return (
    <div
      id="contact"
      className="bg-gray-800 h-full flex flex-col items-center justify-center p-8 xl:p-12 gap-8 xl:gap-16"
    >
      <TitleSection
        title={translations.contact}
        classNames={{ divider: "w-16 xl:w-24", base: "justify-center" }}
      />
      <div className="w-full flex justify-center flex-row flex-wrap gap-8 xl:gap-12">
        <CardItemContact />
        <CardItemContact />
        <CardItemContact />
        <CardItemContact />

        <CardItemContact />
      </div>
    </div>
  );
};

export default ContactSection;
