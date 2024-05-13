"use client";
import { TechAttitude } from "@/models/data.model";
import { Chip, Image } from "@nextui-org/react";
import { useTheme } from "next-themes";
import NextImage from "next/image";
import { IconsDefault } from "@/configuration/images.icons.default";
import { DARK_THEME } from "@/configuration/theme";

export const TechAttitudeList = ({
  attitudes,
  limit,
}: {
  attitudes: TechAttitude[];
  limit?: number;
}) => {
  const { theme } = useTheme();
  return (
    <div className="flex gap-2 flex-wrap">
      {attitudes
        .filter((attitude, index) => !limit || index < limit)
        .map((attitude, index) => (
          <Chip
            startContent={
              <Image
                as={NextImage}
                src={attitude.logo || (theme === DARK_THEME ? IconsDefault.ICON_CODE_WHITE : IconsDefault.ICON_CODE_BLACK)}
                alt={attitude.name}
                width={20}
                height={20}
                loading="eager"
              />
            }
            variant="bordered"
            key={`${attitude.name}-actitud-${index}`}
            className="text-[#333333] dark:text-white text-md bg-transparent border-[#333333] dark:border-white"
          >
            {attitude.name}
          </Chip>
        ))}
    </div>
  );
};
