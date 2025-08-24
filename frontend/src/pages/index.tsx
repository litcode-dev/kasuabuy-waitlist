import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageModal from '@/components/LanguageModal';
import HeroSection from '@/components/HeroSection';
import WaitlistForm from '@/components/WaitlistForm';

export default function Home() {
  const { t } = useTranslation('common');
  const { showLanguageModal, setShowLanguageModal } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Language Selection Modal */}
      <LanguageModal
        isOpen={showLanguageModal}
        onClose={() => setShowLanguageModal(false)}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Waitlist Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">
              © 2024 KasuaBuy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};