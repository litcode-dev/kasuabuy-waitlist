'use client';

import { useTranslation } from 'next-i18next';
import { Sparkles, Users, Bell } from 'lucide-react';

export default function HeroSection() {
  const { t } = useTranslation('common');

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-green-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Coming Soon
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">{t('hero.title')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">1000+</div>
              <div className="text-sm text-gray-600">People Waiting</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <Bell className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">24h</div>
              <div className="text-sm text-gray-600">Early Access</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">Free</div>
              <div className="text-sm text-gray-600">Special Offers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}