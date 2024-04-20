"use client";
import { useConfig } from "@/contexts/portafolio.context";
import { Avatar, Image } from "@nextui-org/react";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import { AccessButton } from "./AccessButton";
import { IconsDefault } from "@/configuration/images.icons.default";

const GeneralSection = () => {
  const { data, translations } = useConfig()!;

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
    <div
      id="home"
      className="relative h-full xl:h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 z-10 overflow-hidden">
        <Image
          as={NextImage}
          src={data.general?.backgroundPicture}
          alt="General Section Background"
          width={screenSize.width}
          height={screenSize.height}
          radius="none"
          loading="eager"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-65 z-20"></div>
      <div className="z-30 py-14 sm:py-26 md:py-32 lg:py-38 xl:py-0">
        <div className="flex flex-row-reverse xl:flex-col items-center justify-center text-white gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <Avatar
            src={data.general?.avatarPicture}
            className="h-20 w-20 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-52 lg:w-52 xl:h-64 xl:w-64"
          />
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-cyan-400 font-bold text-center">
              {data.general?.firstName} {data.general?.firstLastName}
            </h1>
            <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
              {data.general?.profession}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full p-2 md:p-4 lg:p-6 xl:p-8 z-20 absolute bottom-0">
        <div className="flex gap-4 ">
          {data.contact?.github && (
            <AccessButton
              target="_blank"
              height={23}
              href={data.contact?.github}
              srcImg={IconsDefault.ICON_GITHUB_CYAN}
              text={translations.github}
              width={23}
            />
          )}
          {data.contact?.linkedin && (
            <AccessButton
              target="_blank"
              height={23}
              href={data.contact?.linkedin}
              srcImg={IconsDefault.ICON_LINKEDIN_CYAN}
              text={translations.linkedin}
              width={23}
            />
          )}
        </div>
        {/* <div>
          <AccessButton
            height={23}
            href={`#${order[order.length - 1]}`}
            srcImg="/icons/icon_arrow-down_cyan.png"
            text="Bajar"
            width={23}
          />
        </div> */}
      </div>
    </div>
  );
};

export default GeneralSection;
