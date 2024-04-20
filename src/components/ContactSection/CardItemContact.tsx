"use client";
import { useState } from "react";
import { IconsDefault } from "@/configuration/images.icons.default";
import { Button, Image, Tooltip } from "@nextui-org/react";
import NextImage from "next/image";

export const CardItemContact = ({
  icon,
  label,
  conatactValue,
  action,
  classNameFrontCard,
  actionText,
}: {
  icon: string;
  label: string;
  conatactValue: string;
  action?: () => void;
  actionText?: string;
  classNameFrontCard?: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      onMouseEnter={toggleCard}
      onMouseLeave={toggleCard}
      className={`contact-card w-full md:w-5/12 xl:w-1/6 h-40`}
    >
      <div
        className={`relative w-full h-full contact-card-item  ${
          isFlipped ? "contact-card-flipped" : ""
        }`}
      >
        <div
          className={`absolute w-full h-full flex flex-col gap-4 justify-center item-center contact-card-item-front p-3 rounded-lg ${classNameFrontCard} ${
            isFlipped ? "" : "z-10"
          }`}
        >
          <div className="flex justify-center item-center">
            <Image
              as={NextImage}
              src={icon}
              alt={"Contact-" + label}
              width={60}
              height={60}
              loading="eager"
              radius="none"
            />
          </div>
          <div className="flex justify-center item-center">
            <p className="text-white text-md">{label}</p>
          </div>
        </div>

        <div
          className={`absolute w-full h-full bg-cyan-400 rounded-lg p-4 contact-card-item-back ${
            isFlipped ? "z-10" : ""
          }`}
        >
          <div className="flex flex-col gap-4 w-full h-full justify-center item-center">
            {action && actionText && (
              <div className="w-full flex justify-center item-center">
                <Tooltip showArrow={true} content={actionText}>
                  <Button
                    onClick={action}
                    className="w-1/2 bg-cyan-600 border-cyan-600"
                    isIconOnly
                  >
                    <Image
                      as={NextImage}
                      src={IconsDefault.ICON_PAPER_PLANE_WHITE}
                      alt={"Link-" + label}
                      width={24}
                      height={24}
                      loading="eager"
                      radius="none"
                    />
                  </Button>
                </Tooltip>
              </div>
            )}
            <div className="w-full flex justify-center item-center">
              <Tooltip
                showArrow={true}
                placement="bottom"
                content={"Copiar al portapapeles"}
              >
                <Button
                  className="w-1/2 bg-cyan-600 border-cyan-600"
                  onClick={() => navigator.clipboard.writeText(conatactValue)}
                  isIconOnly
                >
                  <Image
                    as={NextImage}
                    src={IconsDefault.ICON_COPY_WHITE}
                    alt={"Copy-" + label}
                    width={24}
                    height={24}
                    loading="eager"
                    radius="none"
                  />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
