'use client';

import { useTranslation } from 'next-i18next';
import { X } from 'lucide-react';

export default function Header() {
  const { t } = useTranslation('common');

  return (
    <header className="bg-purple-700 text-white px-4 py-3 rounded-full mx-4 mt-4 shadow-lg" style={{backgroundColor: '#7C3AED'}}>
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <X className="w-5 h-5 text-purple-700" />
          </div>
          <span className="text-xl font-bold">{t('header.brand')}</span>
        </div>

        {/* Join Waitlist Button */}
        <button className="text-black px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-colors" style={{backgroundColor: '#FCD34D'}}>
          {t('header.joinWaitlist')}
        </button>
      </div>
    </header>
  );
}