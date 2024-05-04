import { Link, Button, Image, Spacer } from "@nextui-org/react";
import NextImage from "next/image";

import { IconsDefault } from "./../configuration/images.icons.default";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="bg-[#1A1A2E] w-screen h-screen">
        <div className="flex flex-col item-center justify-center w-full h-full gap-8 p-8">
          <div className="flex item-center justify-center">
            <h1 className="text-4xl md:text-6xl xl:text-9xl text-cyan-400 font-bold">
              404
            </h1>
          </div>
          <div className="flex item-center justify-center">
            <h2 className="text-center text-xl md:text-2xl xl:text-4xl text-cyan-400">
              {"WE COULDN'T FIND WHAT YOU'RE LOOKING FOR."}{" "}
            </h2>
          </div>
          <Spacer y={2} />
          <div className="flex item-center justify-center">
            <Button
              startContent={
                <Image
                  as={NextImage}
                  src={IconsDefault.ICON_LEFT_ARROW_CYAN}
                  alt="back Home"
                  width={24}
                  height={24}
                />
              }
              href="/"
              variant="bordered"
              as={Link}
              className="bg-transparent border-cyan-400 text-center text-lg md:text-xl xl:text-2xl text-cyan-400"
            >
              {"BACK TO HOME PAGE"}
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
