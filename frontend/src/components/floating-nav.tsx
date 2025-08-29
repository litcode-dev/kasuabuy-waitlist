"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslation } from 'next-i18next';
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";

// import { useSession } from "next-auth/react";

export const FloatingNav = ({
  className,
}: {

  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
    const { t } = useTranslation('common');

  const [visible, setVisible] = useState(true);


  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
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

         style={{
          backgroundColor: '#5F017B',
          color: 'white',
        }}
        className={cn(
          "flex w-[90%]  lg:w-[60%] rounded-full fixed top-12 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2]  dark:bg-[#1E1E1E] bg-white  z-[5000] pr-6 pl-6 lg:pr-9 lg:pl-8 py-5 shadow-xl  items-center justify-between space-x-10",
          className
        )}
      >
        {/* {navItems.map((navItem: FloatingNavItem, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>



        ))} */}

         {navItems.map((navItem, idx) => (
          <button
            key={`nav-${idx}`}
            onClick={navItem.action}
            className="relative text-white items-center flex space-x-1 hover:text-yellow-300 transition-colors cursor-pointer"
          >
            <Image src="/Kasuabuy.png" alt="KasuaBuy" className="h-[25px] w-[100px] md:h-[38px] md:w-[120px]  lg:h-[48px] lg:w-[178px]" width={150} height={150} />
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
          className="text-[#5F017B] px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6 rounded-full font-semibold hover:opacity-90 transition-colors text-[7.8px] md:text-sm flex items-center"
          style={{ backgroundColor: '#FFCC00' }}
        >
          {t('header.joinWaitlist')}
          <ArrowUpRight className="w-3 h-3 lg:w-4 lg:h-4 ml-1 lg:ml-2" />
        </button>



      </motion.div>
    </AnimatePresence>
  );
};
