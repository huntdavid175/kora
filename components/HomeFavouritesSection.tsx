"use client";

import AngledBackdrop from "@/components/AngledBackdrop";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeFavouritesSection() {
  return (
    <section className="mx-auto md:max-w-[1248px] 2xl:max-w-[1448px] px-6 py-14 md:py-20">
      <motion.div
        className="text-center space-y-3 md:space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="inline-block rounded-full bg-white/90 border border-dark-brown/20 text-dark-brown/80 px-3 py-1 text-[10px] tracking-[0.18em] uppercase font-semibold">
          Treatments
        </span>
        <h2 className="text-dark-brown font-extrabold text-3xl md:text-4xl">Client Favourites</h2>
        <p className="text-neutral-700 md:text-base max-w-2xl mx-auto">
          Enjoy hot stone massages and facials, loved by fellow spa-goers.
        </p>
      </motion.div>
      <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        <motion.div
          className="group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <div className="relative">
            <AngledBackdrop />
            <div className="relative overflow-hidden rounded-xl md:rounded-xl image-shadow h-[260px] md:h-[360px] 2xl:h-[420px]">
              <Image
                src="https://cdn.prod.website-files.com/67f76d950a84151276d0ab14/67fcbf7d6f6051abb7cb3222_glow-hydrate.avif"
                alt="Glow and Hydrate"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-dark-brown font-extrabold">Glow and Hydrate</h3>
            <p className="mt-2 text-neutral-700 text-sm">
              A refreshing facial treatment that deeply hydrates, revives dull skin, and boosts your natural glow.
            </p>
            <Link
              href="/treatments/luxury-glow"
              className="mt-4 rounded-full border-2 border-dark-brown px-4 py-2 text-sm font-display font-semibold text-dark-brown bg-white inline-block transition-transform duration-200 hover:-rotate-6"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
        >
          <div className="relative">
            <AngledBackdrop />
            <div className="relative overflow-hidden rounded-xl md:rounded-xl image-shadow h-[260px] md:h-[360px] 2xl:h-[420px]">
              <Image
                src="https://cdn.prod.website-files.com/67f76d950a84151276d0ab14/67fcbc6d36a7a62e4d80010d_sleep-therapy.avif"
                alt="Sleep Therapy"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-dark-brown font-extrabold">Sleep Therapy</h3>
            <p className="mt-2 text-neutral-700 text-sm">
              Soothing massage and scalp therapy designed to calm the mind and promote deep, restful sleep.
            </p>
            <Link
              href="/treatments/sleep-therapy"
              className="mt-4 rounded-full border-2 border-dark-brown px-4 py-2 text-sm font-display font-semibold text-dark-brown bg-white inline-block transition-transform duration-200 hover:-rotate-6"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.26, ease: "easeOut" }}
        >
          <div className="relative">
            <AngledBackdrop />
            <div className="relative overflow-hidden rounded-xl md:rounded-xl image-shadow h-[260px] md:h-[360px] 2xl:h-[420px]">
              <Image
                src="https://cdn.prod.website-files.com/67f76d950a84151276d0ab14/67fcb9c8d7250a5d1ea4a233_serenity-escape-thumb.avif"
                alt="Serenity Escape"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-dark-brown font-extrabold">Serenity Escape</h3>
            <p className="mt-2 text-neutral-700 text-sm">
              Full-body massage with aromatherapy to relax, restore, and melt away stress and tension.
            </p>
            <Link
              href="/treatments/serenity-escape"
              className="mt-4 rounded-full border-2 border-dark-brown px-4 py-2 text-sm font-display font-semibold text-dark-brown bg-white inline-block transition-transform duration-200 hover:-rotate-6"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
