"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
} from "@nextui-org/react";
import { useConfig } from "@/contexts/portafolio.context";
import { order } from "@/configuration/order";

const NavBarNextUI = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const { data, translations, sectionSelected, setSectionSelected } =
    useConfig()!;

  return (
    <Navbar
      className="bg-transparent fixed"
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand className="gap-4">
          <Avatar size="sm" src="/logo_brand.jpg" />
          <div className="flex">
            {data.general.textBrand?.split("").map((item, index) => (
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
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {order.map(
          (item, index) =>
            translations[item as keyof typeof translations] &&
            data[item as keyof typeof data] && (
              <NavbarItem key={`${index}-${item}-navbar-item`}>
                <Link
                  onClick={() => setSectionSelected(item)}
                  className={
                    sectionSelected === item ? "text-cyan-400" : "text-white"
                  }
                  href={`#${item}`}
                >
                  {translations[item as keyof typeof translations]}
                </Link>
              </NavbarItem>
            )
        )}
      </NavbarContent>
      <NavbarMenu className="bg-transparent gap-4">
        {order.map(
          (item, index) =>
            translations[item as keyof typeof translations] &&
            data[item as keyof typeof data] && (
              <NavbarMenuItem key={`${index}-${item}-navbar-menu-item`}>
                <Link
                  onClick={() => setSectionSelected(item)}
                  className={
                    sectionSelected === item ? "text-cyan-400" : "text-white"
                  }
                  href={`#${item}`}
                  size="lg"
                >
                  {translations[item as keyof typeof translations]}
                </Link>
              </NavbarMenuItem>
            )
        )}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBarNextUI;
