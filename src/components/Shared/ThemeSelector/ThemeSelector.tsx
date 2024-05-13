"use client";
import { Switch, Image } from "@nextui-org/react";
import NextImage from "next/image";
import { useTheme } from "next-themes";

import { IconsDefault } from "@/configuration/images.icons.default";
import { DARK_THEME, LIGHT_THEME } from "@/configuration/theme";

const ImgIcon = ({ src, alt }: { src: string; alt: string }) => (
  <Image as={NextImage} width={16} height={16} src={src} alt={alt} />
);

const ThumbIcon = ({ isSelected }: { isSelected: boolean }) => {
  return isSelected ? (
    <ImgIcon src={IconsDefault.ICON_MOON} alt="dark mode icon" />
  ) : (
    <ImgIcon src={IconsDefault.ICON_SUN} alt="light mode icon" />
  );
};

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      size="md"
      isSelected={theme === DARK_THEME}
      classNames={{
        wrapper: "group-data-[selected=true]:bg-cyan-400",
      }}
      onValueChange={(isSelect) =>
        setTheme(isSelect ? DARK_THEME : LIGHT_THEME)
      }
      thumbIcon={({ isSelected }) => <ThumbIcon isSelected={isSelected} />}
    />
  );
};

export default ThemeSelector;
