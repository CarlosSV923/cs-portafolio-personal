"use client";
import { Interest } from "@/models/data.model";
import { useTheme } from "next-themes";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Link,
} from "@nextui-org/react";
import NextImage from "next/image";
import {
  IconsDefault,
  ImagesDefault,
} from "@/configuration/images.icons.default";
import { useTranslations } from "next-intl";
import { DARK_THEME } from "@/configuration/theme";

export const CardItemInterest = ({ interest }: { interest: Interest }) => {
  const translations = useTranslations("interests");
  const { theme } = useTheme();
  return (
    <Card
      shadow="sm"
      fullWidth
      className="bg-white dark:bg-[#1A1A2E] w-full md:w-5/12 xl:w-1/4 p-2 h-max"
    >
      <CardHeader className="flex flex-col item-center justify-center gap-2">
        <Image
          as={NextImage}
          src={interest.logo || (theme === DARK_THEME ? IconsDefault.ICON_INTEREST_CYAN : IconsDefault.ICON_INTEREST_ORANGE)}
          alt={interest.name}
          width={40}
          height={40}
          isZoomed
          loading="eager"
          radius="none"
        />

        {interest.name && (
          <h3 className="text-[#CC5500] dark:text-cyan-400 text-lg font-bold">{interest.name}</h3>
        )}
        {interest.description && (
          <p className="text-[#333333] dark:text-white text-md">{interest.description}</p>
        )}
      </CardHeader>
      <CardBody className="flex flex-col justify-center item-center gap-4">
        <Image
          as={NextImage}
          src={interest.image || ImagesDefault.IMAGE_BG_PROJECTS}
          alt={interest.name}
          width={550}
          height={800}
          isZoomed
          loading="eager"
        />
      </CardBody>
      {interest.url && (
        <CardFooter className="flex flex-col item-center justify-center gap-4">
          <Link
            className="text-[#333333] dark:text-white text-md hover:text-[#CC5500] dark:hover:text-cyan-400"
            isExternal
            showAnchorIcon
            href={interest.url}
          >
            {translations("interestUrl")}
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};
