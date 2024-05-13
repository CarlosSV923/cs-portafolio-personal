"use client";
import React from "react";
import { useTranslations } from "next-intl";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Avatar,
} from "@nextui-org/react";

import { useConfig } from "@/contexts/portafolio.context";
import SelectorLanguage from "../Shared/SelectorLanguage/SelectorLanguage";
import ThemeSelector from "../Shared/ThemeSelector/ThemeSelector";

const NavBar = () => {
  const { data, sectionSelected, setSectionSelected } = useConfig()!;

  const translations = useTranslations("navbar");

  const options = [
    "about",
    "education",
    "experience",
    "skills",
    "projects",
    "interests",
    "contact",
  ];

  return (
    <Navbar
      className={`bg-transparent absolute`}
      maxWidth="xl"
      isBlurred={false}
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href="#home" onClick={() => setSectionSelected("home")}>
            <div className="flex gap-4 items-center justify-center ">
              <Avatar size="sm" src={data?.general?.navbarPicture} />
              <div className="flex">
                {data?.general.navbarText?.split("").map((item, index) => (
                  <p
                    key={`${index}-${item}-navbar-brand`}
                    className={`font-bold ${
                      index % 2 === 0 ? "text-[#CC5500] dark:text-cyan-400" : "text-white"
                    }`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden xl:flex gap-4" justify="center">
        {options.map(
          (item, index) =>
            data?.[item as keyof typeof data] && (
              <NavbarItem key={`${index}-${item}-navbar-item`}>
                <Link
                  onClick={() => setSectionSelected(item)}
                  className={` ${
                    sectionSelected === item ? "text-cyan-400" : "text-white"
                  }`}
                  href={`#${item}`}
                >
                  {translations(item)}
                </Link>
              </NavbarItem>
            )
        )}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex w-1/2 xl:w-3/5">
          <SelectorLanguage />
        </NavbarItem>
        <NavbarItem>
          <ThemeSelector />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
