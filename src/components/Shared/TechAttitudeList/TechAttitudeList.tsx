import { TechAttitude } from "@/models/data.model";
import { Chip, Image } from "@nextui-org/react";
import NextImage from "next/image";

export const TechAttitudeList = ({
  attitudes,
  limit,
}: {
  attitudes: TechAttitude[];
  limit?: number;
}) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {attitudes
        .filter((attitude, index) => !limit || index < limit)
        .map((attitude, index) => (
          <Chip
            startContent={
              <Image
                as={NextImage}
                src={attitude.logo || "/icons/icon_code_white.png"}
                fallbackSrc="/icons/icon_code.png"
                alt={attitude.name}
                width={20}
                height={20}
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
