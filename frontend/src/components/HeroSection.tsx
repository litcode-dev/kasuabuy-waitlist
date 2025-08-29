"use client";

import { useTranslation } from "next-i18next";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import { motion } from "framer-motion";
import {  CircleCheck } from "lucide-react";

export default function HeroSection() {
    const { t, i18n } = useTranslation("common");

    // Determine split word and highlighted text based on language
    const splitWord = i18n.language === "ha" ? "Arewa" : "Northern";
    const highlightedText = i18n.language === "ha" ? "Arewa" : "Northern";

    return (
        <div
            id="hero"
            className="relative overflow-hidden bg-white  pt-32 md:pt-52 px-4 h-[100svh] md:h-[70dvh] lg:h-[100dvh] "
        >

            <motion.div
                className="absolute hidden lg:flex top-1/2 right-2 translate-x-1 -translate-y-1/2 z-0 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <Image
                    src={"/arewa.png"}
                    width={300}
                    height={300}
                    alt="arewa.png"

                    className="z-0"
                />
            </motion.div>
            <div className="max-w-6xl md:pt-0 pt-16 mx-auto z-20">
                <div className="text-center mb-12">
                    {/* Main Heading with Text Generate Effect */}
                    <div className="mb-6">
                        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                            <TextGenerateEffect
                                words={t("hero.title").split(splitWord)[0]}
                                highlightedText={highlightedText}
                                className="inline "
                                duration={0.6}
                            />

                            <TextGenerateEffect
                                words={t("hero.title").split(splitWord)[1]}
                                className="inline"
                                duration={0.6}
                            />
                        </div>
                    </div>

                    {/* Subtitle */}
                    <p className="text-sm g:text-xl text-gray-500 mb-12 z-50 px-10">
                        <span className="font-semibold z-50">
                            {t("hero.subtitle.starting_from")}{" "}
                        </span>
                        <span className="font-bold text-gray-900 z-50">
                            {t("hero.subtitle.gombe")}
                        </span>
                        <span className="font-semibold z-50">
                            {" "}
                            {t("hero.subtitle.spreading_north")}
                        </span>
                    </p>
                </div>
            </div>



            <div className="flex justify-center mt-[200px] z-50">
                <div className="absolute top-1/2 h-[50dvh] w-[60dvw]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            x: [0, -2, 2, -2, 2, 0]
                        }}
                        whileHover={{
                            x: [0, -5, 5, -5, 5, 0]
                        }}
                        transition={{
                            opacity: { duration: 0.6, delay: 0.2 },
                            x: { duration: 0.3, repeat: Infinity, repeatDelay: 5 }
                        }}
                        className="bg-[#FDF5FF] h-[2rem] lg:h-[3.5rem] px-3 lg:px-5  flex justify-center items-center shadow-2xl rounded-full  text-[#5F017B] absolute bottom-0 lg:top-52 -translate-y-1/2 left-48 lg:left-36 z-15 text-[10px] lg:text-sm"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <CircleCheck className="w-3 h-3 lg:w-6 lg:h-6 text-[#5F017B]" />{" "}
                            {/* Buyers */}

                            {t("hero.buyers")}
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            x: [0, -2, 2, -2, 2, 0]
                        }}
                        whileHover={{
                            x: [0, -5, 5, -5, 5, 0]
                        }}
                        transition={{
                            opacity: { duration: 0.6, delay: 0.4 },
                            x: { duration: 0.3, repeat: Infinity, repeatDelay: 7 }
                        }}
                        className="bg-[#FDF5FF] h-[2rem] lg:h-[3.5rem] px-3 lg:px-5  flex justify-center items-center shadow-2xl rounded-full text-[#5F017B] absolute bottom-4 -translate-y-1/2 -left-8 lg:left-42 z-15 text-[10px] lg:text-sm"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <CircleCheck className="w-3 h-3 lg:w-6 lg:h-6 text-[#5F017B]" />{" "}
                            {/* Small Business owners */}

                             {t("hero.smallBusinessOwners")}
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            x: [0, -2, 2, -2, 2, 0]
                        }}
                        whileHover={{
                            x: [0, -5, 5, -5, 5, 0]
                        }}
                        transition={{
                            opacity: { duration: 0.6, delay: 0.6 },
                            x: { duration: 0.3, repeat: Infinity, repeatDelay: 9 }
                        }}
                        className="bg-[#FDF5FF] h-[1.5rem] lg:h-[3.5rem] px-3 lg:px-5 flex justify-center items-center shadow-2xl rounded-full text-[#5F017B]  absolute bottom-32 lg:top-32 -translate-y-1/2 -right-5 lg:right-92 z-15 text-[10px] lg:text-sm"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <CircleCheck className="w-3 h-3 lg:w-6 lg:h-6 text-[#5F017B]" />{" "}
                            {/* Artisans */}

                            {t("hero.artisans")}
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            x: [0, -2, 2, -2, 2, 0]
                        }}
                        whileHover={{
                            x: [0, -5, 5, -5, 5, 0]
                        }}
                        transition={{
                            opacity: { duration: 0.6, delay: 0.8 },
                            x: { duration: 0.3, repeat: Infinity, repeatDelay: 11 }
                        }}
                        className="bg-[#FDF5FF] h-[1.5rem] lg:h-[3.5rem] px-3 lg:px-5 flex justify-center items-center shadow-2xl rounded-full text-[#5F017B] absolute bottom-24 md:bottom-4 -translate-y-10/12  lg:right-48 z-15 text-[10px] lg:text-sm"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <CircleCheck className="w-3 h-3 lg:w-6 lg:h-6 text-[#5F017B]" />{" "}
                            {/* Sellers */}

                              {t("hero.sellers")}
                        </span>
                    </motion.div>
                </div>

                <motion.div
                    className=" w-[321px] h-[321px] lg:w-[541px] lg:h-[541px] bg-[#FFCC00] rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 0.8,
                        type: "spring",
                        bounce: 0.4,
                        delay: 0.2,
                    }}
                ></motion.div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center ">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="absolute bottom-0  mr-[15rem] lg:mr-[30rem] z-10 h-[160px] w-[179px] lg:h-[400px] lg:w-[450px]"
                    >
                        <Image
                            src={"/left-woman.png"}
                            width={450}
                            height={450}
                            alt="left-woman"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="z-[10] h-[200px] w-[279px] lg:h-[450px] lg:w-[550px]"
                    >
                        <Image
                            src={"/man.png"}
                            width={550}
                            height={550}
                            alt="man"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="absolute bottom-0 ml-[10rem] md:ml-[20rem] z-10 h-[160px] w-[179px] lg:h-[350px] lg:w-[400px]"
                    >
                        <Image
                            src={"/right-woman.png"}
                            width={450}
                            height={450}
                            alt="right-woman"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
