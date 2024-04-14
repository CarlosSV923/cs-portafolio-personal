import { Image } from "@nextui-org/react";
import NextImage from "next/image";
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
          src="/icons/icon_right-arrow.png"
          alt="Company"
          width={20}
          height={20}
          loading="eager"
        />
      </div>
    </div>
  );
};
