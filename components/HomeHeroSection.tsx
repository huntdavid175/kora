"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeHeroSection() {
  const [rotation, setRotation] = useState(-6);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 280; // px over which we interpolate the rotation
      const y = window.scrollY;
      const clamped = Math.min(Math.max(y, 0), maxScroll);
      const progress = clamped / maxScroll; // 0 -> 1
      const angle = -6 + 6 * progress; // -6deg -> 0deg
      setRotation(angle);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="mx-auto md:max-w-[1248px] 2xl:max-w-[1448px] px-6 pt-10 md:pt-14">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 items-start gap-8 md:gap-10 pb-10 md:pb-14"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="md:col-span-7 text-4xl md:text-[45px] leading-tight font-extrabold text-dark-brown font-display">
          Your Sanctuary of <br /> <span className="text-muted-green">Serenity</span> Awaits
        </h1>
        <div className="md:col-span-5">
          <p className="text-neutral-700 md:text-[20px]">
            Leave the stress behind and immerse yourself in a world of
            relaxation and calm.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link
              href="/treatments"
              className="rounded-full bg-white px-4 py-2 text-sm md:text-[14px] font-display font-semibold text-dark-brown bg-white inline-block transition-transform duration-200 hover:-rotate-6"
            >
              See Treatments
            </Link>
            <Link
              href="#"
              className="rounded-full bg-transparent border-2 border-dark-brown px-4 py-2 text-sm md:text-[14px] font-display font-semibold text-dark-brown  inline-block transition-transform duration-200 hover:-rotate-6"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="relative mt-10 md:mt-12">
        <div className="absolute inset-x-6 md:inset-x-3 2xl:inset-x-2 top-1 2xl:top-2 bottom-0 bg-[#EAE4D7] rounded-[36px] md:rounded-[44px] 2xl:rounded-[56px]"></div>
        <div
          className="relative mx-auto w-full rounded-[36px] md:rounded-[44px] 2xl:rounded-[56px] image-shadow overflow-hidden transition-transform duration-300 ease-out will-change-transform"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <video
            src="https://www.pexels.com/download/video/8313041/"
            autoPlay
            loop
            muted
            className="w-full h-[380px] md:h-[620px] 2xl:h-[720px] object-cover"
          />
          <div className="absolute bottom-5 left-6 text-white/90">
            <svg
              viewBox="0 0 64 64"
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M32 14c6 6 9 12 9 18 0 9-6 14-9 14s-9-5-9-14c0-6 3-12 9-18z" />
              <path d="M16 30c4 1 8 4 9 8-8 0-13-2-15-5 1-2 3-3 6-3z" />
              <path d="M48 30c-4 1-8 4-9 8 8 0 13-2 15-5-1-2-3-3-6-3z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
