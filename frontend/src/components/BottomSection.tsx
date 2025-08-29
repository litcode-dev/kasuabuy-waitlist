"use client";

import { useTranslation } from "next-i18next";
import { ArrowUpRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Link from "next/link";

export default function BottomSection() {
    const { t } = useTranslation("common");

    return (
        <div id="bottom" className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Phone Mockup */}
                    <div className="relative">
                        {/* Phone Frame */}
                        <motion.div
                            className="cursor-pointer"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                                height={1000}
                                width={1500}
                                src="/phone02.png"
                                alt="phone"
                                className="w-full h-full from-purple-100 to-purple-200"
                            />
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="text-center w-full">
                        <TypewriterEffect
                            words={t("bottom.title")
                                .split(" ")
                                .map((word) => ({
                                    text: word,
                                    className: "text-gray-900",
                                }))}
                            className="text-[32px] lg:text-[48px] font-medium lg:font-semibold mb-6"
                            cursorClassName="bg-purple-500"
                        />

                        <p className="text-[13.8px] lg:text-[18px] text-gray-600 mb-8 ">
                            <span className="">
                                {t('bottom.subtitle.part1')}{" "}
                            </span>
                            <span className="font-medium text-purple-700">
                                {t('bottom.subtitle.highlight')}
                            </span>
                            <span className=""> {t('bottom.subtitle.part2')}</span>
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center  mb-8">
                            <button
                                className="text-[#5F017B] flex justify-center items-center text-[11px] lg:text-[14px] px-6 py-3 rounded-full hover:scale-105 hover:shadow-3xl hover:bg-gray-50 transition-all duration-300 ease-in-out shadow-2xl"
                                style={{ backgroundColor: "#ffffff" }}
                            >
                                {t("bottom.subscribe")}
                                <ArrowUpRight className="w-3 h-3 lg:w-4 lg:h-4 ml-1 lg:ml-2" />
                            </button>
                            <Link
                            href={'https://chat.whatsapp.com/LHbfsgUiJqr0VrpAKEJX5s?mode=ems_wa_c'}
                                className="text-[#5F017B] px-6 py-3 rounded-full text-[11px] lg:text-[14px] hover:scale-105 hover:shadow-3xl hover:bg-yellow-300 transition-all duration-300 ease-in-out shadow-lg"
                                style={{ backgroundColor: "#FCD34D" }}
                            >
                                {t("bottom.joinCommunity")}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full gap-16">
                    <h5 className="text-[18px] lg:text-[24px] text-[#565656] ">Follow Us</h5>
                    <div className="flex gap-10">
                         <Link
                            href="https://www.linkedin.com/company/kasuabuy"
                            target="_blank"
                            className="hover:scale-110 transition-all duration-300 ease-in-out bg-[#FDF5FF] p-5 rounded-full"
                        >
                            <Linkedin className="text-[#5F017B]  h-[32px] w-[32px] lg:h-[43px] lg:w-[43px]" />
                        </Link>

                         <Link
                            href="https://www.instagram.com/kasuabuy"
                            target="_blank"
                            className="hover:scale-110 transition-all duration-300 ease-in-out bg-[#FDF5FF] p-5 rounded-full"
                        >
                            <Instagram className="text-[#5F017B] h-[32px] w-[32px] lg:h-[43px] lg:w-[43px]"  />
                        </Link>
                        <Link
                            href="https://www.facebook.com/share/1G1tCGGum5"
                            target="_blank"
                            className="hover:scale-110 transition-all duration-300 ease-in-out bg-[#FDF5FF] p-5 rounded-full"
                        >
                            <Facebook className="text-[#5F017B] h-[32px] w-[32px] lg:h-[43px] lg:w-[43px]"  />
                        </Link>



                    </div>
                    {/* Contact Email */}
                    <div className="text-sm text-gray-500">
                        <p>{t("bottom.email")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
