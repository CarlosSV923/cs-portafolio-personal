import { useConfig } from "@/contexts/portafolio.context";
import { ExperienceModel } from "@/models/data.model";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
import NextImage from "next/image";

export const CardItemExperience = ({
  experience,
}: {
  experience: ExperienceModel;
}) => {
  const { translations } = useConfig()!;
  return (
    <Card
      shadow="sm"
      fullWidth
      className="w-full md:w-5/12 xl:w-1/4 p-3 h-max border-2 border-cyan-400 bg-transparent"
    >
      <CardHeader className="flex item-center flex-col justify-center gap-2">
        <Image
          as={NextImage}
          src={experience.logo || "/icons/icon_work.png"}
          fallbackSrc="/icons/icon_work.png"
          alt={experience.position} 
          width={45}
          height={45}
          loading="eager"
        />
        <h3 className="text-white text-center text-md font-bold">{experience.position}</h3>
      </CardHeader>
      <CardBody className="flex flex-col gap-2">
        <div className="flex flex-col justify-center item-center gap-2">
          {experience.company && (
            <p className="text-white text-center text-md">{experience.company}</p>
          )}
          {experience.time && (
            <p className="text-white text-center text-md">{experience.time}</p>
          )}
        </div>
        <div className="flex justify-center item-center gap-2">
          {experience.dateFrom && (
            <p className="text-white text-md">{experience.dateFrom}</p>
          )}
          {experience.dateTo && experience.dateFrom && (
            <p className="text-white text-md">-</p>
          )}
          {experience.dateTo && (
            <p className="text-white text-md">{experience.dateTo}</p>
          )}
        </div>
        <div className="flex justify-center item-center gap-2">
          {experience.location && (
            <p className="text-white text-md">{experience.location}</p>
          )}
          {experience.location && experience.mode && (
            <p className="text-white text-md">-</p>
          )}
          {experience.mode && (
            <p className="text-white text-md">{experience.mode}</p>
          )}
        </div>
      </CardBody>
      {Boolean(experience.achievements?.length) && (
        <CardFooter className="flex justify-center">
          <Button
            size="sm"
            variant="bordered"
            className="rounded-2xl text-white text-md border-white hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
            // onClick={onOpen}
          >
            {translations.achievements}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
