'use client';

import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Loader2, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useWaitlist } from '@/hooks/useWaitlist';
import { useLanguage } from '@/hooks/useLanguage';
import type { WaitlistFormData } from '@/lib/validation';
import Image from 'next/image';

export default function WaitlistSection() {
  const { t } = useTranslation('common');
  const { getCurrentLanguage } = useLanguage();
  const { isSubmitting, isSuccess, errors, submitForm, resetForm } = useWaitlist();
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const [formData, setFormData] = useState<WaitlistFormData>({
    full_name: '',
    phone_number: '',
    language: getCurrentLanguage(),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      language: getCurrentLanguage(),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitForm({
      ...formData,
      language: getCurrentLanguage(),
    });

    if (success) {
      setFormData({
        full_name: '',
        phone_number: '',
        language: getCurrentLanguage(),
      });
    }
  };

  const isFormValid = formData.full_name.trim() !== '' && formData.phone_number.trim() !== '';

  if (isSuccess) {
    return (
      <div id="waitlist" className="py-16 px-4 relative overflow-hidden " style={{backgroundColor: '#5F017B'}}>
        {/* Confetti/Flower decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Left side decorations */}
          <div className="absolute top-16 left-8 w-6 h-6 bg-yellow-400 transform rotate-45"></div>
          <div className="absolute top-32 left-16 w-4 h-4 bg-green-400 rounded-full"></div>
          <div className="absolute top-48 left-4 w-3 h-8 bg-red-400 transform rotate-12"></div>
          <div className="absolute top-64 left-12 w-5 h-5 bg-blue-500 transform rotate-45"></div>
          <div className="absolute top-80 left-20 w-3 h-3 bg-pink-400 rounded-full"></div>

          {/* Star shapes */}
          <div className="absolute top-24 left-24 w-8 h-8 bg-orange-500 transform rotate-12" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>

          {/* Right side - fewer decorations */}
          <div className="absolute top-20 right-20 w-3 h-3 bg-green-400 rounded-full"></div>
          <div className="absolute bottom-20 right-12 w-3 h-3 bg-orange-400 rounded-full"></div>
        </div>

        <div className="max-w-md mx-auto text-center text-white relative z-10">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-4">
            {t('success.title')}
          </h3>
          <p className="mb-8">
            {t('success.message')}
          </p>
          <button
            onClick={resetForm}
            className="text-black py-3 px-8 rounded-full font-semibold hover:opacity-90 transition-colors"
            style={{backgroundColor: '#FFCC00'}}
          >
            {t('success.close')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="waitlist" className="flex flex-col justify-center items-center py-24 lg:py-16 px-4 relative overflow-hidden  lg:h-[80dvh]" style={{backgroundColor: '#5F017B'}}>
      {/* Confetti/Flower decorations with parallax */}
      <motion.div 
        className="lg:absolute  hidden lg:flex items-center inset-0 pointer-events-none"
        style={{ y: y1 }}
      >
       <Image src={'/flower.png'} width={400} height={400} alt="flower" />
      </motion.div>

       <motion.div 
         className="flex lg:hidden items-center h-32 w-32 inset-0 pointer-events-none"
         style={{ y: y2 }}
       >
       <Image src={'/flower-2.png'} width={400} height={400} alt="flower" />
      </motion.div>

      <div className="max-w-full  text-center text-white relative z-10">
        {/* Title */}
        <motion.h2 
          className=" text-[36px] lg:text-[48px] font-medium mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t('waitlist.title').split('2025')[0]}
          <span className="text-[#FFCC00]">2025!</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          className="text-[24px] lg:text-[32px] mb-8 px-[10%] text-center "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {t('waitlist.subtitle')}
        </motion.p>

        {/* User Avatars */}
        <motion.div 
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="flex -space-x-2">
            <div className="w-10 h-10 bg-orange-400 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs font-semibold">A</span>
            </div>
            <div className="w-10 h-10 bg-blue-400 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs font-semibold">B</span>
            </div>
            <div className="w-10 h-10 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs font-semibold">C</span>
            </div>
            <div className="w-10 h-10 bg-gray-600 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs font-semibold">+12</span>
            </div>
          </div>
          <span className="ml-4 text-sm font-medium">{t('waitlist.signedUp')}</span>
        </motion.div>

        {/* Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-4 px-10 lg:px-36 "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* General Error */}
          {errors.general && (
            <div className="p-4 bg-red-100 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{errors.general}</p>
            </div>
          )}

          {/* Name Field */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label className="block text-white text-sm font-medium mb-2">
              {t('form.name')}
            </label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleInputChange}
              placeholder={t('form.namePlaceholder')}
              className={`w-full px-6 py-4 text-[11px] lg:text-[14px]  rounded-full border-0 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base ${
                errors.full_name ? 'bg-red-50' : 'bg-white'
              }`}
              disabled={isSubmitting}
            />
            {errors.full_name && (
              <p className="mt-2 text-sm text-red-200">{errors.full_name}</p>
            )}
          </motion.div>

          {/* Phone Field */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label className="block text-white text-sm font-medium mb-2">
              {t('form.phoneNumber')}
            </label>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleInputChange}
              placeholder={t('form.phonePlaceholder')}
              className={`w-full px-6 py-4 text-[11px] lg:text-[14px]  rounded-full border-0 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base ${
                errors.phone_number ? 'bg-red-50' : 'bg-white'
              }`}
              disabled={isSubmitting}
            />
            {errors.phone_number && (
              <p className="mt-2 text-sm text-red-200">{errors.phone_number}</p>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.div 
            className='flex flex-col items-center'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >

          <button
            type="submit"
            disabled={isSubmitting || !isFormValid}
            className=" text-[#5F017B] text-center text-[11px] lg:text-[14px]  py-4 px-8 rounded-full  text-base hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center mt-6"
            style={{backgroundColor: '#FFCC00'}}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                {t('form.submitting')}
              </>
            ) : (
              <>
                {t('form.submit')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
}
