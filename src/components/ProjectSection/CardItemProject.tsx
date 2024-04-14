"use client";
import { Project } from "@/models/data.model";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import NextImage from "next/image";
import { ButtonRedirect } from "./ButtonRedirect";
import { TechAttitudeList } from "../Shared/TechAttitudeList/TechAttitudeList";
import { useConfig } from "@/contexts/portafolio.context";

export const CardItemProject = ({ project }: { project: Project }) => {
  const { translations } = useConfig()!;

  return (
    <Card
      shadow="sm"
      fullWidth
      className="w-full md:w-5/12 xl:w-1/4 p-2 h-max bg-gray-800"
    >
      <CardHeader className="flex flex-col item-center justify-center gap-4">
        <Image
          as={NextImage}
          src={project.backgroundPicture || "/default_bgProject.png"}
          fallbackSrc="/default_bgProject.png"
          alt={project.name}
          width={350}
          height={500}
          isZoomed
          loading="eager"
        />
        <div className="flex flex-col w-full">
          <h3 className="text-cyan-400 text-lg font-bold">{project.name}</h3>
          {project.owner && project.typeOwner && (
            <p className="text-white text-md">
              {translations.projectOwner}: {project.owner} {`(${project.typeOwner})`}
            </p>
          )}
          {project.type && <p className="text-white text-md">{project.type}</p>}
        </div>
      </CardHeader>
      <CardBody className="flex flex-col justify-center item-center gap-4">
        {project.description && (
          <p className="text-white text-md">{project.description}</p>
        )}
        {Boolean(project.technologies?.length) && (
          <TechAttitudeList attitudes={project.technologies!} limit={5} />
        )}
      </CardBody>
      <CardFooter className="flex flex-col item-center justify-center gap-4">
        {project.repositoryUrl && (
          <ButtonRedirect url={project.repositoryUrl} label={translations.repositoryUrl} />
        )}
        {project.companyUrl && (
          <ButtonRedirect url={project.companyUrl} label={translations.companyUrl} />
        )}
      </CardFooter>
    </Card>
  );
};
