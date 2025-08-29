'use client';

import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react';
import { useTranslation } from 'next-i18next';
// import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { X, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export const KasuaBuyFloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const { t } = useTranslation('common');
//   const { getCurrentLanguage, selectLanguage } = useLanguage();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
    //   let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        // if (direction < 0) {
          setVisible(true);
        // } else {
        //   setVisible(false);
        // }
      }
    }
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

//   const toggleLanguage = () => {
//     const currentLang = getCurrentLanguage();
//     const newLang = currentLang === 'en' ? 'ha' : 'en';
//     selectLanguage(newLang);
//   };

  const navItems = [
    {
      name: t('header.brand'),
      action: () => scrollToSection('hero'),
      icon: (
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <X className="w-4 h-4" style={{ color: '#5F017B' }} />
          </div>
        </div>
      ),
    },
    // {
    //   name: 'Home',
    //   action: () => scrollToSection('hero'),
    // },
    // {
    //   name: 'Waitlist',
    //   action: () => scrollToSection('waitlist'),
    // },
    // {
    //   name: 'About',
    //   action: () => scrollToSection('bottom'),
    // },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -250,
        }}
        animate={{
          y: visible ? 0 : -250,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'flex w-[60%] fixed top-20 left-1/2 transform -translate-x-1/2 border border-transparent rounded-full shadow-lg z-[5000] pr-10 pl-10 py-2 h-[100] items-center justify-between space-x-4',
          className
        )}
        style={{
          backgroundColor: '#5F017B',
          color: 'white',
        }}
      >
        {navItems.map((navItem, idx) => (
          <button
            key={`nav-${idx}`}
            onClick={navItem.action}
            className="relative text-white items-center flex space-x-1 hover:text-yellow-300 transition-colors cursor-pointer"
          >
            <Image src="/Kasuabuy.png" alt="KasuaBuy" width={150} height={150} />
            {/* {navItem.icon && (
              <span className="block sm:hidden">{navItem.icon}</span>
            )} */}
            {/* <span className={`text-sm font-medium ${
              idx === 0 ? 'hidden sm:block font-bold' : 'hidden sm:block'
            }`}>
              {navItem.name}
            </span> */}
          </button>
        ))}

        {/* Language Toggle */}
        {/* <button
          onClick={toggleLanguage}
          className="text-white hover:text-yellow-300 transition-colors p-1"
          title="Toggle Language"
        >
          <Globe className="w-4 h-4" />
          <span className="ml-1 text-xs">
            {getCurrentLanguage().toUpperCase()}
          </span>
        </button> */}

        {/* Join Waitlist Button */}
        <button
          onClick={() => scrollToSection('waitlist')}
          className="text-[#5F017B] px-12 py-6 rounded-full font-semibold hover:opacity-90 transition-colors text-sm flex items-center"
          style={{ backgroundColor: '#FFCC00' }}
        >
          {t('header.joinWaitlist')}
          <ArrowUpRight className="w-4 h-4 ml-2" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
