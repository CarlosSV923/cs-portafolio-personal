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
  styles,
  classNames,
  attitudes,
}: {
  isOpen: boolean;
  title: string;
  onOpenChange: (isOpen: boolean) => void;
  achievements?: string[] | string;
  attitudes?: TechAttitude[];
  styles?: {
    modal?: CSSProperties;
    header?: CSSProperties;
    body?: CSSProperties;
    footer?: CSSProperties;
  };
  classNames?: {
    modal?: string;
    header?: string;
    body?: string;
    footer?: string;
  };
}) => {
  return (
    <Modal
      style={styles?.modal}
      className={classNames?.modal}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="lg"
      shadow="lg"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-[#CC5500] dark:text-cyan-400 font-bold">
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
                className="text-[#333333] dark:text-white"
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
