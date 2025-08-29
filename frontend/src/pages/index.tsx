import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { useTranslation } from 'next-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageModal from '@/components/LanguageModal';
// import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WaitlistSection from '@/components/WaitlistSection';
import BottomSection from '@/components/BottomSection';
import { FloatingNav } from '@/components/floating-nav';

export default function Home() {
//   const { t } = useTranslation('common');
  const { showLanguageModal, setShowLanguageModal } = useLanguage();

  // Test function to trigger language modal
//   const testLanguageModal = () => {
//     localStorage.removeItem('preferred-language');
//     setShowLanguageModal(true);
//   };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Test Button for Language Modal - Remove in production */}
      {/* <button
        onClick={testLanguageModal}
        className="fixed top-4 right-4 z-50 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transition-colors"
        style={{ fontSize: '12px' }}
      >
        Test Language Modal
      </button> */}

      {/* Language Selection Modal */}
      <LanguageModal
        isOpen={showLanguageModal}
        onClose={() => setShowLanguageModal(false)}
      />

      {/* Floating Navigation */}
      {/* <KasuaBuyFloatingNav /> */}

      <FloatingNav />

      {/* Header */}
      {/* <Header /> */}

      {/* Hero Section */}
      <HeroSection />

      {/* Waitlist Section */}
      <WaitlistSection />

      {/* Bottom Section */}
      <BottomSection />
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
