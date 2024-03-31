import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const NavbarPort = () => {
  return (
    <Navbar
      className="bg-transparent fixed top-0 left-0 right-0 z-50"
      shouldHideOnScroll
    >
      <NavbarBrand>
        <p className="font-bold text-cyan-400">C</p>
        <p className="font-bold text-white">S</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-white" href="#">
            Sobre mí
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" color="foreground" href="#">
            Formación
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" className="text-cyan-400" aria-current="page">
            Experiencia
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" color="foreground" href="#">
            Tecnologías
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" color="foreground" href="#">
            Habilidades
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" color="foreground" href="#">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" color="foreground" href="#">
            Más
          </Link>
        </NavbarItem>
        
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            radius="sm"
            href="#"
            variant="bordered"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
          >
            Contactar
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarPort;
