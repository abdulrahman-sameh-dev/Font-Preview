"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "ar";

interface LanguageProviderProps {
  children: React.ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
}

interface LanguageProviderState {
  language: Language;
  setLanguage: (language: Language) => void;
}

const initialState: LanguageProviderState = {
  language: "en",
  setLanguage: () => null,
};

const LanguageContext = createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage = "en",
  storageKey = "app-language",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(
    () => (typeof window !== 'undefined' && localStorage.getItem(storageKey) as Language) || defaultLanguage
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.dir = language === "ar" ? "rtl" : "ltr";
    root.lang = language;
    localStorage.setItem(storageKey, language);
  }, [language, storageKey]);

  const value = {
    language,
    setLanguage: (language: Language) => {
      setLanguage(language);
    },
  };

  return (
    <LanguageContext.Provider {...props} value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
};
