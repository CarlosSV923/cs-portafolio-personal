"use client";
import { useConfig } from "@/contexts/portafolio.context";
import { ExperienceModel } from "@/models/data.model";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
  useDisclosure,
} from "@nextui-org/react";
import NextImage from "next/image";
import { ModalAchievements } from "./ModalAchievements";

export const CardItemEducation = ({
  index,
  education,
}: {
  index: number;
  education: ExperienceModel;
}) => {
  const { translations } = useConfig()!;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <Card
      key={`${education.title}-card-education-${index}`}
      shadow="sm"
      fullWidth
      className="w-full xl:w-2/5 p-3 h-max border-2 border-cyan-400 bg-transparent"
    >
      <CardHeader className="flex item-center flex-col md:flex-row justify-between gap-2">
        <div className="flex gap-3">
          <Image
            as={NextImage}
            src={"/icons/icon_graduation-cap.png"}
            alt={education.title}
            width={45}
            height={45}
          />
          <div className="flex flex-col">
            <h3 className="text-white text-md font-bold">
              {education.degree ?? education.title}
            </h3>
            {education.degree && (
              <p className="text-white text-md">{education.title}</p>
            )}
          </div>
        </div>
        {education.dateFrom && (
          <div className="border-2 py-1.5 px-2.5 rounded-2xl">
            <p className="text-white text-md">
              {education.dateFrom}
              {education.dateTo ? ` - ${education.dateTo}` : ""}
            </p>
          </div>
        )}
      </CardHeader>
      <CardBody className="flex flex-col gap-2">
        {education.institution && (
          <div className="flex flex-col md:flex-row gap-2">
            <p className="text-cyan-400 text-md">{translations.intitution}:</p>
            <p className="text-white text-md">{education.institution}</p>
          </div>
        )}
        {education.location && (
          <div className="flex flex-col md:flex-row gap-2">
            <p className="text-cyan-400 text-md">{translations.location}:</p>
            <p className="text-white text-md">{education.location}</p>
          </div>
        )}
        {education.mode && (
          <div className="flex flex-col md:flex-row gap-2">
            <p className="text-cyan-400 text-md">{translations.mode}:</p>
            <p className="text-white text-md">{education.mode}</p>
          </div>
        )}
      </CardBody>
      {(education.url || education.achievements?.length) && (
        <CardFooter
          className={`flex ${
            education.url && education.achievements?.length
              ? "justify-between"
              : "justify-end"
          }`}
        >
          {education.url && (
            <Link
              className="text-white text-md hover:text-cyan-400"
              isExternal
              showAnchorIcon
              href={education.url}
            >
              {translations.degreeUrl}
            </Link>
          )}
          {education.achievements?.length && (
            <>
              <Button
                size="sm"
                variant="bordered"
                className="rounded-2xl text-white text-md border-white hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
                onClick={onOpen}
            >
                {translations.achievements}
            </Button>
             
              <ModalAchievements
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                achievements={education.achievements}
              />
            </>
          )}
        </CardFooter>
      )}
    </Card>
  );
};
