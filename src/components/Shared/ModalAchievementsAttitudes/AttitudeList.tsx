import { Attitude } from "@/models/data.model";
import { Chip, Image } from "@nextui-org/react";
import NextImage from "next/image";

export const AttitudeList = ({ attitudes }: { attitudes: Attitude[] }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {attitudes.map((attitude, index) => (
        <Chip
          startContent={
            <Image
              as={NextImage}
              src={attitude.logo || "/icons/icon_code_white.png"}
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
  );
};
