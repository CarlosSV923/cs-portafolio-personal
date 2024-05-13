"use client";

import { IconsDefault } from "@/configuration/images.icons.default";
import { LANGUAGE_EN, LANGUAGE_ES } from "@/configuration/language";
import { useConfig } from "@/contexts/portafolio.context";
import { Select, SelectItem, Image } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import NextImage from "next/image";
import { useRouter } from "next/navigation";

const SelectorLanguage = () => {
  const languages = [
    {
      name: "Español",
      value: LANGUAGE_ES,
      flag: IconsDefault.ICON_ECUADOR_FLAG,
    },
    {
      name: "English",
      value: LANGUAGE_EN,
      flag: IconsDefault.ICON_USA_FLAG,
    },
  ];

  const router = useRouter();

  const { language } = useConfig()!;
  const translations = useTranslations("selectorLanguage");


  return (
    <Select
      value={language}
      size="sm"
      aria-label="Language Selector"
      placeholder={translations("placeholder")}
      defaultSelectedKeys={[language]}
      items={languages}
      onChange={(event) => {
        router.push(`/${event.target.value}`);
      }}
      renderValue={(items) => {
        return items.map((item) => (
          <div key={item.key} className="flex justify-center item-center gap-4">
            <Image
              as={NextImage}
              src={item.data!.flag}
              alt="flag"
              width={24}
              height={24}
              radius="none"
            />
            <div className="hidden md:flex flex-col justify-center item-center">
              <p>{item.data!.name}</p>
            </div>
          </div>
        ));
      }}
    >
      {(item) => (
        <SelectItem
          startContent={
            <Image
              as={NextImage}
              src={item.flag}
              alt="flag"
              width={24}
              height={24}
              radius="none"
            />
          }
          key={item.value}
          value={item.value}
          textValue={item.value}
        >
          <p className="hidden md:flex">{item.name}</p>
        </SelectItem>
      )}
    </Select>
  );
};

export default SelectorLanguage;
