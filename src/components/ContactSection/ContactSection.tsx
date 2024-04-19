"use client";
import { useConfig } from "@/contexts/portafolio.context";
import { TitleSection } from "../Shared/TitleSection/TitleSection";
import { CardItemContact } from "./CardItemContact";

const ContactSection = () => {
  const { data, translations } = useConfig()!;

  return (
    <div
      id="contact"
      className="bg-gray-800 h-full flex flex-col items-center justify-center p-8 xl:p-12 gap-8 xl:gap-16"
    >
      <TitleSection
        title={translations.contact}
        classNames={{ divider: "w-16 xl:w-24", base: "justify-center" }}
      />
      <div className="w-full flex justify-center flex-row flex-wrap gap-8 xl:gap-12">
        <CardItemContact 
          icon={"/icons/icon_linkedin_white.png"}
          conatactValue={data.contact.linkedin}
          label="LinkedIn"
          action={() => window.open(data.contact.linkedin, "_blank")}
          actionText="Ver perfil"
          classNameFrontCard="bg-cyan-400"
        />
        <CardItemContact 
          icon={"/icons/icon_github_white.png"}
          conatactValue={data.contact.github}
          label="GitHub"
          action={() => window.open(data.contact.github, "_blank")}
          actionText="Ver perfil"
          classNameFrontCard="bg-cyan-400"
        />
        <CardItemContact 
          icon={"/icons/icon_email_white.png"}
          conatactValue={data.contact.email}
          label="Email"
          action={() => window.open(`mailto:${data.contact.email}`)}
          actionText="Enviar correo"
          classNameFrontCard="bg-cyan-400"
        />
        <CardItemContact 
          icon={"/icons/icon_call_white.png"}
          conatactValue={data.contact.phone}
          label="Celular"
          action={() => window.open(`tel:${data.contact.phone}`)}
          actionText="Llamar"
          classNameFrontCard="bg-cyan-400"
        />

        <CardItemContact 
          icon={"/icons/icon_address_white.png"}
          conatactValue={data.contact.address}
          label="Dirección"
          classNameFrontCard="bg-cyan-400"
        />
      </div>
    </div>
  );
};

export default ContactSection;
