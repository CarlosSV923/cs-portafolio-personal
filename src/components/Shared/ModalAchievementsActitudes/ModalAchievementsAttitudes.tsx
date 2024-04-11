"use client";
import { useConfig } from "@/contexts/portafolio.context";
import { Attitude } from "@/models/data.model";
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
import { AttitudeList } from "./AttitudeList";

export const ModalAchievementsAttitudes = ({
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
  attitudes?: Attitude[];
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
              {achievements && <AchievementList achievements={achievements} />}
              {attitudes && achievements && <Spacer y={3} />}
              {attitudes && <AttitudeList attitudes={attitudes} />}
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
