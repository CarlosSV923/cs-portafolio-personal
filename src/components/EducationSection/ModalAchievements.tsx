"use client";
import { useConfig } from "@/contexts/portafolio.context";
import { Skills } from "@/models/data.model";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  Chip,
  Spacer,
} from "@nextui-org/react";
import NextImage from "next/image";
import { CSSProperties } from "react";

export const ModalAchievements = ({
  isOpen,
  onOpenChange,
  achievements,
  style,
  className,
  attitudes,
}: {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  achievements?: string[] | string;
  attitudes?: Skills[];
  style?: CSSProperties;
  className?: string;
}) => {
  const { translations } = useConfig()!;
  return (
    <Modal
      style={style}
      className={className}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="lg"
      shadow="lg"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-cyan-400 font-bold">
              {achievements && translations.achievements}
              {achievements && attitudes ? " y " : " "}
              {attitudes && translations.attitudes}
            </ModalHeader>
            <ModalBody className="flex flex-col gap-2">
              {achievements && (
                <>
                  {Array.isArray(achievements) ? (
                    <ul className="list-disc pl-4">
                      {achievements.map((achievement, index) => (
                        <li
                          key={`${achievement.length}-achievement-${index}`}
                          className="text-white text-md"
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-white text-justify text-md">
                      {achievements}
                    </p>
                  )}
                </>
              )}
              {(attitudes && achievements) && <Spacer y={3} />}
              {attitudes && (
                <div className="flex gap-2 flex-wrap">
                  {attitudes.map((attitude, index) => (
                    <Chip
                      startContent={
                        <Image
                          as={NextImage}
                          src={attitude.logo || "/icons/icon_code.png"}
                          fallbackSrc="/icons/icon_code.png"
                          alt={attitude.name}
                          width={25}
                          height={25}
                          loading="eager"
                        />
                      }
                      variant="bordered"
                      key={`${attitude.name}-actitud-${index}`}
                      className="text-white text-md bg-transparent border-white"
                    >
                      {attitude.name}
                    </Chip>
                  ))}
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={onClose}
                className="text-white"
              >
                Cerrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
