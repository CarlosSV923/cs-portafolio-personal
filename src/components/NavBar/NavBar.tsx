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

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

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
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
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
                      index % 2 === 0 ? "text-cyan-400" : "text-white"
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
      <NavbarContent className="hidden xl:flex gap-4" justify="end">
        {options.map(
          (item, index) =>
            (data && data[item as keyof typeof data]) && (
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
    </Navbar>
  );
};

export default NavBar;
