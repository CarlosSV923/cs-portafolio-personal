"use client";
import { useTranslations } from "next-intl";
import { useConfig } from "@/contexts/portafolio.context";
import { TitleSection } from "../Shared/TitleSection/TitleSection";
import { CardItemContact } from "./CardItemContact";
import { IconsDefault } from "@/configuration/images.icons.default";

const ContactSection = () => {
  const { data } = useConfig()!;
  const translations = useTranslations("contact");

  return (
    <div
      id="contact"
      className="bg-gray-800 h-full flex flex-col items-center justify-center p-8 xl:p-12 gap-8 xl:gap-16"
    >
      <TitleSection
        title={translations("title")}
        classNames={{ divider: "w-16 xl:w-24", base: "justify-center" }}
      />
      <div className="w-full flex justify-center flex-row flex-wrap gap-8 xl:gap-12">
        {data?.contact.linkedin && (
          <CardItemContact
            icon={IconsDefault.ICON_LINKEDIN_WHITE}
            conatactValue={data?.contact.linkedin}
            label={translations("linkedin")}
            action={() => window.open(data?.contact.linkedin, "_blank")}
            actionText={translations("actionTextLinkedin")}
            classNameFrontCard="bg-cyan-400"
          />
        )}
        {data?.contact.github && (
          <CardItemContact
            icon={IconsDefault.ICON_GITHUB_WHITE}
            conatactValue={data?.contact.github}
            label={translations("github")}
            action={() => window.open(data?.contact.github, "_blank")}
            actionText={translations("actionTextGithub")}
            classNameFrontCard="bg-cyan-400"
          />
        )}
        {data?.contact.email && (
          <CardItemContact
            icon={IconsDefault.ICON_EMAIL_WHITE}
            conatactValue={data?.contact.email}
            label={translations("email")}
            action={() => window.open(`mailto:${data?.contact.email}`)}
            actionText={translations("actionTextEmail")}
            classNameFrontCard="bg-cyan-400"
          />
        )}
        {data?.contact.phone && (
          <CardItemContact
            icon={IconsDefault.ICON_WHATSAPP_WHITE}
            conatactValue={data?.contact.phone}
            label={translations("phone")}
            action={() =>
              window.open(`https://wa.me/${data?.contact.phone}`, "_blank")
            }
            actionText={translations("actionTextPhone")}
            classNameFrontCard="bg-cyan-400"
          />
        )}
        {data?.contact.address && (
          <CardItemContact
            icon={IconsDefault.ICON_ADDRESS_WHITE}
            conatactValue={data?.contact.address}
            label={translations("address")}
            classNameFrontCard="bg-cyan-400"
          />
        )}
      </div>
    </div>
  );
};

export default ContactSection;
