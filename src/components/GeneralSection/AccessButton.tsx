import { Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import { HTMLAttributeAnchorTarget } from "react";

export const AccessButton = ({
  href,
  text,
  srcImg,
  width,
  height,
  target,
}: {
  href: string;
  text: string;
  srcImg: string;
  width: number;
  height: number;
  target?: HTMLAttributeAnchorTarget;
}) => {
  return (
    <Link
      target={target}
      href={href}
      className="flex gap-1 justify-center items-center border border-cyan-400 rounded-lg p-1 xl:p-1.5"
    >
      <Image
        as={NextImage}
        src={srcImg}
        alt={`icon_${text}`}
        width={width}
        height={height}
        loading="eager"
        radius="none"
      />
      <p className="text-cyan-400 hidden xl:flex">{text}</p>
    </Link>
  );
};
