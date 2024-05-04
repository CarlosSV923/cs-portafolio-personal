"use client";
import { useTranslations } from "next-intl";
import { CircularProgress } from "@nextui-org/react";

const Loader = () => {
  const translations = useTranslations("loader");
  return (
    <div className="flex flex-col gap-8 justify-center item-center w-screnn h-screen bg-[#1A1A2E]">
      <div className="flex justify-center item-center">
        <CircularProgress
          classNames={{
            indicator: "stroke-cyan-400",
            svg: "w-28 h-28 drop-shadow-md",
            track: "stroke-cyan-100",
          }}
          aria-label="Loading..."
        />
      </div>
      <div className="flex justify-center item-center">
        <p>
          <span className="text-cyan-400 text-lg">{translations("loading")}</span>
        </p>
      </div>
    </div>
  );
};

export default Loader;
