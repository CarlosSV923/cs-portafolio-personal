import { Card, Image, Button } from "@nextui-org/react";
import NextImage from "next/image";

export const CardItemContact = () => {
  return (
    <Card
      shadow="lg"
      fullWidth
      className="w-full md:w-5/12 xl:w-1/6 p-3 h-max bg-cyan-400"
    >
      <div className="flex flex-col gap-2 justify-center item-center">
        <div className="flex justify-center item-center">
          <Image
            as={NextImage}
            src="/icons/icon_linkedin_white.png"
            alt="Contact"
            width={45}
            height={45}
            loading="eager"
            radius="none"
          />
        </div>
        <div className="flex justify-center item-center">
          <p className="text-white text-md">Linkedin</p>
        </div>
      </div>
    </Card>
  );
};
