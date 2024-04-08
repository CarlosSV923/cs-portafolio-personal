"use client";
import { useConfig } from "@/contexts/portafolio.context";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

export const ModalAchievements = ({
  isOpen,
  onOpenChange,
  achievements,
}: {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  achievements: string[] | string;
}) => {
  const { translations } = useConfig()!;
  return (
    <Modal
      style={{
        backgroundColor: "#1A1A2E",
      }}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="lg"
      shadow="lg"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-cyan-400 font-bold">
              {translations.achievements}
            </ModalHeader>
            <ModalBody className="flex flex-col gap-1">
              {Array.isArray(achievements) ? (
                <ul className="list-disc list-inside">
                  {achievements.map((achievement, index) => (
                    <li
                      key={`${achievement}-achievement-${index}`}
                      className="text-white text-md"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-white text-md">{achievements}</p>
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
