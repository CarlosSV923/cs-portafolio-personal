"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { data } from "../configuration/data";
import { PortafolioContextModel } from "@/models/portafolio.context.model";
import { DataModel } from "@/models/data.model";
import { LANGUAGE_ES } from "@/configuration/language";
import { translations } from "@/configuration/translations";
import { TranslationModel } from "@/models/translations.model";

export const PortafolioContext = createContext<PortafolioContextModel | null>(
  null
);

export const useConfig = () => {
  return useContext(PortafolioContext);
};

export const PortafolioProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dataPortDefault = data.find((d) => LANGUAGE_ES === d.language)?.data;
  const translationsDefault = translations.find(
    (t) => LANGUAGE_ES === t.language
  )?.data;

  const [language, setLanguage] = useState<string>(LANGUAGE_ES);
  const [dataPort, setDataPort] = useState<DataModel>(dataPortDefault!);
  const [translationsPort, setTranslationsPort] = useState<TranslationModel>(
    translationsDefault!
  );
  const [sectionSelected, setSectionSelected] = useState<string>("");

  const contextValue = useMemo(
    () => ({
      data: dataPort,
      setData: setDataPort,
      translations: translationsPort,
      setTranslations: setTranslationsPort,
      language,
      setLanguage,
      sectionSelected,
      setSectionSelected,
    }),
    [
      dataPort,
      setDataPort,
      translationsPort,
      setTranslationsPort,
      language,
      setLanguage,
      sectionSelected,
      setSectionSelected,
    ]
  );

  useEffect(() => {
    const dataPortDefault = data.find((d) => language === d.language)?.data;
    const translationsDefault = translations.find(
      (t) => language === t.language
    )?.data;

    setDataPort(dataPortDefault!);
    setTranslationsPort(translationsDefault!);
  }, [language]);

  return (
    <PortafolioContext.Provider value={contextValue}>
      {children}
    </PortafolioContext.Provider>
  );
};
