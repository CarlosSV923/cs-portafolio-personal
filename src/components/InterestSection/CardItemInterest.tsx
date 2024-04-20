"use client";
import { useConfig } from "@/contexts/portafolio.context";
import { Interest } from "@/models/data.model";
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

export const CardItemInterest = ({ interest }: { interest: Interest }) => {
  const { translations } = useConfig()!;
  return (
    <Card
      shadow="sm"
      fullWidth
      style={{
        backgroundColor: "#1A1A2E",
      }}
      className="w-full md:w-5/12 xl:w-1/4 p-2 h-max"
    >
      <CardHeader className="flex flex-col item-center justify-center gap-2">
        <Image
          as={NextImage}
          src={interest.logo || IconsDefault.ICON_INTEREST_CYAN}
          alt={interest.name}
          width={40}
          height={40}
          isZoomed
          loading="eager"
          radius="none"
        />

        {/* <div className="flex flex-col w-full"> */}
        {interest.name && (
          <h3 className="text-cyan-400 text-lg font-bold">{interest.name}</h3>
        )}
        {interest.description && (
          <p className="text-white text-md">{interest.description}</p>
        )}
        {/* </div> */}
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
            className="text-white text-md hover:text-cyan-400"
            isExternal
            showAnchorIcon
            href={interest.url}
          >
            {translations.interesUrl}
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};
