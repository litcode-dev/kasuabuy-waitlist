'use client';

import { useTranslation } from 'next-i18next';
import { ShoppingCart, DollarSign } from 'lucide-react';

export default function BottomSection() {
  const { t } = useTranslation('common');

  return (
    <div id="bottom" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <div className="relative">
            {/* Phone Frame */}
            <div className="relative mx-auto w-64 h-[500px] bg-black rounded-[3rem] p-2">
              {/* Screen */}
              <div className="w-full h-full bg-gradient-to-b from-purple-100 to-purple-200 rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="h-8 bg-black rounded-t-[2.5rem] flex items-center justify-center">
                  <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
                </div>
                
                {/* Screen Content */}
                <div className="p-4 h-full">
                  {/* As Seller Section */}
                  <div className="bg-green-100 rounded-2xl p-4 mb-4 relative">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-2">
                        <DollarSign className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-green-800">{t('bottom.asSeller')}</span>
                    </div>
                  </div>
                  
                  {/* As Buyer Section */}
                  <div className="bg-purple-100 rounded-2xl p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-2">
                        <ShoppingCart className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-purple-800">{t('bottom.asBuyer')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('bottom.title')}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              <span className="font-semibold">Made Specially and Locally for every </span>
              <span className="font-bold text-purple-700">Northern Nigerian</span>
              <span className="font-semibold"> Entrepreneur.</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-colors" style={{backgroundColor: '#7C3AED'}}>
                {t('bottom.subscribe')}
              </button>
              <button className="text-black px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-colors" style={{backgroundColor: '#FCD34D'}}>
                {t('bottom.joinCommunity')}
              </button>
            </div>

            {/* Contact Email */}
            <div className="text-sm text-gray-500">
              <p>{t('bottom.email')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}