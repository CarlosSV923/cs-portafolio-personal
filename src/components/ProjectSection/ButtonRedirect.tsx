import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { IconsDefault } from "@/configuration/images.icons.default";

export const ButtonRedirect = ({
  url,
  label,
}: {
  url: string;
  label: string;
}) => {
  return (
    <div
      onClick={() => window.open(url, "_blank")}
      className="flex item-center justify-center gap-2 cursor-pointer"
    >
      <p className="text-cyan-400 text-md">{label}</p>
      <div className="flex flex-col item-center justify-center">
        <Image
          as={NextImage}
          src={IconsDefault.ICON_RIGHT_ARROW_CYAN}
          alt="Company"
          width={20}
          height={20}
          loading="eager"
        />
      </div>
    </div>
  );
};
