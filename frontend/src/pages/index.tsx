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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Language Selection Modal */}
      <LanguageModal
        isOpen={showLanguageModal}
        onClose={() => setShowLanguageModal(false)}
      />

      {/* Floating Navigation */}
      {/* <KasuaBuyFloatingNav /> */}

      <FloatingNav className="hidden lg:flex"/>

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
