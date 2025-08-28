"use client";

import { useTranslation } from "next-i18next";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, CheckCheck, CheckCircle, CircleCheck } from "lucide-react";

export default function HeroSection() {
    const { t, i18n } = useTranslation("common");

    // Determine split word and highlighted text based on language
    const splitWord = i18n.language === "ha" ? "Intanet" : "Northern";
    const highlightedText = i18n.language === "ha" ? "Arewa" : "Northern";

    return (
        <div
            id="hero"
            className="relative overflow-hidden bg-white pt-52 px-4 h-[100vh] "
        >

            <motion.div
                className="absolute top-1/2 right-2 translate-x-1 -translate-y-1/2 z-0"
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
            <div className="max-w-6xl mx-auto z-20">
                <div className="text-center mb-12">
                    {/* Main Heading with Text Generate Effect */}
                    <div className="mb-6">
                        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                            <TextGenerateEffect
                                words={t("hero.title").split(splitWord)[0]}
                                highlightedText={highlightedText}
                                className="inline text-[94px]"
                                duration={0.6}
                            />
                            {/* <span className="text-[#5F017B] font-medium">
                <TextGenerateEffect
                  words={}
                  className="inline"
                  duration={0.6}
                />
              </span> */}
                            <TextGenerateEffect
                                words={t("hero.title").split(splitWord)[1]}
                                className="inline"
                                duration={0.6}
                            />
                        </div>
                    </div>

                    {/* Subtitle */}
                    <p className="text-xl text-gray-600 mb-12 z-40">
                        <span className="font-semibold">
                            {t("hero.subtitle.starting_from")}{" "}
                        </span>
                        <span className="font-bold text-gray-900">
                            {t("hero.subtitle.gombe")}
                        </span>
                        <span className="font-semibold">
                            {" "}
                            {t("hero.subtitle.spreading_north")}
                        </span>
                    </p>
                </div>
            </div>



            <div className="flex justify-center mt-[200px] z-20">
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
                        className="bg-[#FDF5FF] h-[3.5rem] px-5 flex justify-center items-center shadow-2xl rounded-full  text-[#5F017B] absolute top-52 -translate-y-1/2 left-36 z-15"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <CircleCheck className="w-6 h-6 text-[#5F017B]" />{" "}
                            Buyers
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
                        className="bg-[#FDF5FF] h-[3.5rem] px-5 flex justify-center items-center shadow-2xl rounded-full text-[#5F017B] absolute bottom-12 -translate-y-1/2 left-14 z-15"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <CircleCheck className="w-6 h-6 text-[#5F017B]" />{" "}
                            Small Business owners
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
                        className="bg-[#FDF5FF] h-[3.5rem] px-5 flex justify-center items-center shadow-2xl rounded-full text-[#5F017B]  absolute top-32 -translate-y-1/2 right-92 z-15"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <CircleCheck className="w-6 h-6 text-[#5F017B]" />{" "}
                            Artisans
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
                        className="bg-[#FDF5FF] h-[3.5rem] px-5 flex justify-center items-center shadow-2xl rounded-full text-[#5F017B] absolute bottom-0 -translate-y-10/12 right-48 z-15"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <CircleCheck className="w-6 h-6 text-[#5F017B]" />{" "}
                            Sellers
                        </span>
                    </motion.div>
                </div>

                <motion.div
                    className=" w-[541px] h-[541px] bg-[#FFCC00] rounded-full"
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
                        className="absolute bottom-0 mr-[30rem] z-10 h-[400px] w-[450px]"
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
                        className="z-[10] h-[450px] w-[550px]"
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
                        className="absolute bottom-0 ml-[20rem] z-10  h-[350px] w-[400px]"
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
