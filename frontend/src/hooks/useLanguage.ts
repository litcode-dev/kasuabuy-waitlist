import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export type Language = 'en' | 'ha';

export function useLanguage() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  useEffect(() => {
    // Check if language is already selected and stored
    const storedLanguage = localStorage.getItem('preferred-language') as Language;
    
    if (storedLanguage && ['en', 'ha'].includes(storedLanguage)) {
      setSelectedLanguage(storedLanguage);
      // Change the locale if it's different
      if (router.locale !== storedLanguage) {
        router.push(router.asPath, router.asPath, { locale: storedLanguage });
      }
    } else {
      // Show language selection modal if no language is stored
      setShowLanguageModal(true);
    }
  }, [router]);

  const selectLanguage = (language: Language) => {
    setSelectedLanguage(language);
    localStorage.setItem('preferred-language', language);
    setShowLanguageModal(false);
    
    // Change the locale and reload the page to ensure all translations are loaded
    router.push(router.asPath, router.asPath, { locale: language }).then(() => {
      window.location.reload();
    });
  };

  const getCurrentLanguage = (): Language => {
    return selectedLanguage || (router.locale as Language) || 'en';
  };

  return {
    selectedLanguage,
    showLanguageModal,
    selectLanguage,
    getCurrentLanguage,
    setShowLanguageModal,
  };
}