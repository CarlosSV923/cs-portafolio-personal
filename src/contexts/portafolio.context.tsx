"use client";

import {
  createContext,
  use,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { PortafolioContextModel } from "@/models/portafolio.context.model";
import { DataModel } from "@/models/data.model";

export const PortafolioContext = createContext<PortafolioContextModel | null>(
  null
);

export const useConfig = () => {
  return useContext(PortafolioContext);
};

export const PortafolioProvider = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [language, setLanguage] = useState<string>(locale);
  const [data, setData] = useState<DataModel | null>(null);

  const [sectionSelected, setSectionSelected] = useState<string>("");

  const contextValue = useMemo(
    () => ({
      data,
      setData,
      language,
      setLanguage,
      sectionSelected,
      setSectionSelected,
      isLoading,
      setIsLoading,
    }),
    [
      data,
      setData,
      language,
      setLanguage,
      sectionSelected,
      setSectionSelected,
      isLoading,
      setIsLoading,
    ]
  );

  useEffect(() => {
    import(`../configuration/data/${locale}.json`).then((data: any) => {
      setData(data.default);
      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
    });
  }, [locale]);

  return (
    <PortafolioContext.Provider value={contextValue}>
      {children}
    </PortafolioContext.Provider>
  );
};
