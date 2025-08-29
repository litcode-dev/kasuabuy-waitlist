'use client';

import { useTranslation } from 'next-i18next';
import { CheckCircle, Share2, X } from 'lucide-react';

interface SuccessMessageProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
}

export default function SuccessMessage({ isOpen, onClose, userName }: SuccessMessageProps) {
  const { t } = useTranslation('common');

  if (!isOpen) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join the Waitlist',
        text: 'I just joined an amazing waitlist! You should check it out too.',
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      const shareText = `I just joined an amazing waitlist! You should check it out too: ${window.location.href}`;
      navigator.clipboard.writeText(shareText);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('success.title')}
          </h2>

          {/* Message */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            {userName ? (
              <>Hi {userName}! {t('success.message')}</>
            ) : (
              t('success.message')
            )}
          </p>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleShare}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Share2 className="w-5 h-5 mr-2" />
              {t('success.shareMessage')}
            </button>

            <button
              onClick={onClose}
              className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              {t('success.close')}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-gray-50 rounded-b-2xl">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>You&apos;re now on the waitlist!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
