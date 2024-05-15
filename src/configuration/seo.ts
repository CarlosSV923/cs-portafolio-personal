import type { Metadata } from "next";
import { IconsDefault } from "./images.icons.default";

export const metadata: Metadata = {
    metadataBase: new URL("https://portafolio-personal-ecru-pi.vercel.app/"),
    authors: {
        name: "Carlos Sesme",
        url: "https://www.linkedin.com/in/carlos-sesme-vera-342769172/"
    },
    robots: {
        index: true,
        follow: true,
    },
    title: "Carlos Sesme - Desarrollador Web Full Stack",
    description: "Portafolio personal de Carlos Sesme, Desarrollador Web Full Stack",
    icons: {
        icon: IconsDefault.SOFTWARE_ENGINEER,
    },
    openGraph: {
        url: "https://portafolio-personal-ecru-pi.vercel.app/",
        type: "website",
    },
    appleWebApp: {
        title: "Carlos Sesme - Desarrollador Web Full Stack",
    }
};

export default metadata;