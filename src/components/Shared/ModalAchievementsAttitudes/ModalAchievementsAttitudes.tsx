"use client";
import { useConfig } from "@/contexts/portafolio.context";
import { TechAttitude } from "@/models/data.model";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spacer,
} from "@nextui-org/react";
import { CSSProperties } from "react";
import { AchievementList } from "./AchievementList";
import { TechAttitudeList } from "../TechAttitudeList/TechAttitudeList";

export const ModalAchievementsAttitudes = ({
  isOpen,
  title,
  onOpenChange,
  achievements,
  style,
  className,
  attitudes,
}: {
  isOpen: boolean;
  title: string;
  onOpenChange: (isOpen: boolean) => void;
  achievements?: string[] | string;
  attitudes?: TechAttitude[];
  style?: CSSProperties;
  className?: string;
  
}) => {
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
              {title}
            </ModalHeader>
            <ModalBody className="flex flex-col gap-2">
              {achievements && <AchievementList achievements={achievements} />}
              {attitudes && achievements && <Spacer y={3} />}
              {attitudes && <TechAttitudeList attitudes={attitudes} />}
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
