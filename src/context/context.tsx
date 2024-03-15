import { createContext, useEffect, useState } from "react";

type LangType = "en" | "pt";

export const LangContext = createContext<{
  lang: LangType;
  setCurrentLang: (lang: LangType) => void;
}>({
  lang: "en",
  setCurrentLang: (lang) => {},
});

export const LangContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<LangType>("en");

  const setCurrentLang = (lang: LangType) => {
    setLang(lang);
    window.sessionStorage.setItem("lang", lang);
  };

  useEffect(() => {
    const lang = window.sessionStorage.getItem("lang") as LangType;
    if (lang === "en" || lang === "pt") {
      setLang(lang);
    }
  }, []);

  const contextValue = {
    lang,
    setCurrentLang,
  };

  return (
    <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
  );
};
