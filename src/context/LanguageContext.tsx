'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, TranslationDictionary } from '@/content/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'pt',
  setLanguage: () => {},
  t: translations.pt,
});

const SPANISH_COUNTRIES = ['ES', 'MX', 'AR', 'CO', 'CL', 'PE', 'UY', 'VE', 'EC', 'GT', 'CR', 'BO', 'PY', 'DO', 'HN', 'SV', 'NI', 'PA'];
const PORTUGUESE_COUNTRIES = ['BR', 'PT', 'AO', 'MZ', 'CV'];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt');

  useEffect(() => {
    // 1. Verificar preferência do usuário salva em Cookie ou LocalStorage
    const savedLang = localStorage.getItem('web_lunar_lang') as Language | null;
    const cookieMatch = document.cookie.match(/web_lunar_lang=(pt|en|es)/);
    const cookieLang = cookieMatch ? (cookieMatch[1] as Language) : null;

    if (savedLang && ['pt', 'en', 'es'].includes(savedLang)) {
      setLanguageState(savedLang);
      return;
    }

    if (cookieLang && ['pt', 'en', 'es'].includes(cookieLang)) {
      setLanguageState(cookieLang);
      return;
    }

    // 2. Detecção Automática via Cloudflare header (/api/geo) + Navigator Language
    const detectAutoLanguage = async () => {
      try {
        const res = await fetch('/api/geo');
        if (res.ok) {
          const data = await res.json();
          const country = data.country as string;
          if (PORTUGUESE_COUNTRIES.includes(country)) {
            setLanguageState('pt');
            return;
          }
          if (SPANISH_COUNTRIES.includes(country)) {
            setLanguageState('es');
            return;
          }
          if (country) {
            setLanguageState('en');
            return;
          }
        }
      } catch (err) {
        console.warn('Geo detection error, falling back to navigator language:', err);
      }

      // Fallback para navigator.language do navegador
      if (typeof window !== 'undefined' && navigator.language) {
        const userLang = navigator.language.toLowerCase();
        if (userLang.startsWith('es')) {
          setLanguageState('es');
        } else if (userLang.startsWith('pt')) {
          setLanguageState('pt');
        } else {
          setLanguageState('en');
        }
      }
    };

    detectAutoLanguage();
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('web_lunar_lang', lang);
    document.cookie = `web_lunar_lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
