'use client';

import { useTranslation } from 'next-i18next';
import { Globe, X } from 'lucide-react';
import { useLanguage, type Language } from '@/hooks/useLanguage';

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LanguageModal({ isOpen, onClose }: LanguageModalProps) {
  const { t } = useTranslation('common');
  const { selectLanguage } = useLanguage();

  if (!isOpen) return null;

  const handleLanguageSelect = (language: Language) => {
    selectLanguage(language);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {t('languageModal.title')}
              </h2>
              <p className="text-sm text-gray-600">
                {t('languageModal.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Language Options */}
        <div className="p-6 space-y-4">
          {/* English Option */}
          <button
            onClick={() => handleLanguageSelect('en')}
            className="w-full p-4 text-left transition-all duration-200 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">EN</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                  English
                </h3>
                <p className="text-sm text-gray-600">
                  Continue in English
                </p>
              </div>
            </div>
          </button>

          {/* Hausa Option */}
          <button
            onClick={() => handleLanguageSelect('ha')}
            className="w-full p-4 text-left transition-all duration-200 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 group"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">HA</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600">
                  Hausa
                </h3>
                <p className="text-sm text-gray-600">
                  Ci gaba da Hausa
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 rounded-b-2xl">
          <p className="text-xs text-center text-gray-500">
            You can change this later in settings
          </p>
        </div>
      </div>
    </div>
  );
}