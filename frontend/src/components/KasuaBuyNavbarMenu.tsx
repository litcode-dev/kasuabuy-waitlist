'use client';
import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Menu, MenuItem, HoveredLink, ProductItem } from './ui/navbar-menu';
import { motion } from 'motion/react';

const KasuaBuyNavbarMenu = () => {
  const { t, i18n } = useTranslation('common');
  const [active, setActive] = useState<string | null>(null);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ha' : 'en';
    i18n.changeLanguage(newLang);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full flex items-center justify-center pt-8">
      <Menu setActive={setActive}>
        {/* Home Menu Item */}
        <MenuItem setActive={setActive} active={active} item={t('nav.home')}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink 
              onClick={() => scrollToSection('hero')}
              className="cursor-pointer"
            >
              {t('nav.hero_section')}
            </HoveredLink>
            <HoveredLink 
              onClick={() => scrollToSection('waitlist')}
              className="cursor-pointer"
            >
              {t('nav.join_waitlist')}
            </HoveredLink>
            <HoveredLink 
              onClick={() => scrollToSection('bottom')}
              className="cursor-pointer"
            >
              {t('nav.about_app')}
            </HoveredLink>
          </div>
        </MenuItem>

        {/* Features Menu Item */}
        <MenuItem setActive={setActive} active={active} item={t('nav.features')}>
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title={t('features.marketplace.title')}
              href="#"
              src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20marketplace%20app%20interface%20with%20purple%20theme%20northern%20nigeria%20style&image_size=landscape_4_3"
              description={t('features.marketplace.description')}
            />
            <ProductItem
              title={t('features.community.title')}
              href="#"
              src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=community%20networking%20app%20interface%20african%20entrepreneurs%20purple%20theme&image_size=landscape_4_3"
              description={t('features.community.description')}
            />
            <ProductItem
              title={t('features.local_business.title')}
              href="#"
              src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=local%20business%20directory%20app%20northern%20nigeria%20purple%20theme&image_size=landscape_4_3"
              description={t('features.local_business.description')}
            />
            <ProductItem
              title={t('features.secure_payments.title')}
              href="#"
              src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=secure%20payment%20system%20mobile%20app%20interface%20purple%20theme&image_size=landscape_4_3"
              description={t('features.secure_payments.description')}
            />
          </div>
        </MenuItem>

        {/* About Menu Item */}
        <MenuItem setActive={setActive} active={active} item={t('nav.about')}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#">
              {t('about.our_mission')}
            </HoveredLink>
            <HoveredLink href="#">
              {t('about.team')}
            </HoveredLink>
            <HoveredLink href="#">
              {t('about.northern_nigeria')}
            </HoveredLink>
            <HoveredLink href="#">
              {t('about.contact')}
            </HoveredLink>
          </div>
        </MenuItem>

        {/* Language Toggle */}
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {i18n.language === 'en' ? 'هَوُسَ' : 'English'}
          </motion.button>

          {/* Join Waitlist CTA */}
          <motion.button
            onClick={() => scrollToSection('waitlist')}
            className="px-6 py-2 bg-yellow-400 text-purple-900 rounded-full text-sm font-bold hover:bg-yellow-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('nav.join_waitlist')}
          </motion.button>
        </div>
      </Menu>
    </div>
  );
};

export default KasuaBuyNavbarMenu;