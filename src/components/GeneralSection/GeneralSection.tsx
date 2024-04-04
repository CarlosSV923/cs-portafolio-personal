"use client";
import { Avatar, Image } from "@nextui-org/react";
import NextImage from "next/image";
import { useEffect, useState } from "react";

const GeneralSection = () => {
  const [screenSize, setScreenSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  useEffect(() => {
    // Función para manejar el cambio de tamaño de la ventana
    const handleResize = () => {
      // Actualiza el estado con las nuevas dimensiones de la ventana
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Agrega un event listener para escuchar los cambios de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Llama a handleResize() para obtener las dimensiones iniciales del monitor
    handleResize();

    // Limpia el event listener cuando el componente se desmonta
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-full lg:h-screen flex items-center justify-center pt-12 sm:pt-24 lg:pt-0">
      <div className="absolute inset-0 z-10 overflow-hidden">
        <Image
          as={NextImage}
          src="/photo_wallpaper.jpg"
          alt="General Section Background"
          width={screenSize.width}
          height={screenSize.height}
          radius="none"
          loading="eager"
          className="object-cover h-full w-full"
        />
      </div>
      <div>
        <div className="absolute inset-0 bg-black opacity-65 z-20"></div>
      </div>
      <div className="z-20 flex items-center justify-center">
        <div className="flex flex-col items-center text-white gap-1 lg:gap-4">
          <Avatar
            src="/photo_avatar.jpg"
            className="h-20 w-20 sm:h-40 sm:w-40 lg:h-64 lg:w-64"
          />
          <h1 className="text-xl lg:text-4xl font-bold text-center">
            {"Hi, I'm John Doe"}
          </h1>
          <p className="text-base md:text-lg text-center">
            {"I'm a Software Engineer"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralSection;
