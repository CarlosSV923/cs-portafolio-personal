"use client";
import { Image } from "@nextui-org/react";
import { useTheme } from "next-themes";
import NextImage from "next/image";
import { IconsDefault } from "@/configuration/images.icons.default";
import { DARK_THEME } from "@/configuration/theme";

export const ButtonRedirect = ({
  url,
  label,
}: {
  url: string;
  label: string;
}) => {
  const { theme } = useTheme();
  return (
    <div
      onClick={() => window.open(url, "_blank")}
      className="flex item-center justify-center gap-2 cursor-pointer"
    >
      <p className="text-[#CC5500] dark:text-cyan-400 text-md">{label}</p>
      <div className="flex flex-col item-center justify-center">
        <Image
          as={NextImage}
          src={theme === DARK_THEME ? IconsDefault.ICON_RIGHT_ARROW_CYAN : IconsDefault.ICON_RIGHT_ARROW_ORANGE}
          alt="Company"
          width={20}
          height={20}
          loading="eager"
        />
      </div>
    </div>
  );
};
