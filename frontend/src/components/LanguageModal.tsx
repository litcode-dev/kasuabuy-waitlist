'use client';

import { useTranslation } from 'next-i18next';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 ">
          <div className="flex items-center space-x-3">
            {/* <div className="p-2 bg-blue-100 rounded-lg">
              <Globe className="w-6 h-6 text-blue-600" />
            </div> */}
            <div>
              <h2 className="text-xl font-medium text-gray-900">
                {t('languageModal.title')}
              </h2>
              <p className="text-sm text-gray-600 font-light">
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
            className="w-full p-4 text-left transition-all duration-200 border-[1px] border-gray-200 rounded-xl hover:border-[#5F017B]  focus:outline-none  group"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5F017B] to-[#5F017B] rounded-lg flex items-center justify-center">
                  <span className="text-white  text-lg">EN</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className=" text-gray-900 group-hover:text-[#5F017B]">
                  English
                </h3>
                <p className="text-sm text-gray-600 font-light">
                  Continue in English
                </p>
              </div>
            </div>
          </button>

          {/* Hausa Option */}
          <button
            onClick={() => handleLanguageSelect('ha')}
            className="w-full p-4 text-left transition-all duration-200 border-[1px] border-gray-200 rounded-xl hover:border-[#5F017B]  focus:outline-none focus:ring-[1px] focus:ring-[#5F017B] focus:ring-offset-2 group"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6f088e] to-[#5F017B] rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">HA</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className=" text-gray-900 group-hover:text-[#5F017B]">
                  Hausa
                </h3>
                <p className="text-sm text-gray-600 font-light">
                  Ci gaba da Hausa
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 rounded-b-2xl">
          <p className="text-xs text-center text-gray-500 font-light">
            You can change this later in settings
          </p>
        </div>
      </div>
    </div>
  );
}
