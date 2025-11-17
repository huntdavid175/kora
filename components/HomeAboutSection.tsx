"use client";

import InvertedAngledBackdrop from "@/components/InvertedAngledBackdrop";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeAboutSection() {
  return (
    <section className="mx-auto md:max-w-[1248px] 2xl:max-w-[1448px] px-6 py-16 md:py-24">
      <motion.div
        className="text-center space-y-3 md:space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="inline-block rounded-full bg-white/90 border border-dark-brown/20 text-dark-brown/80 px-3 py-1 text-[10px] tracking-[0.18em] uppercase font-semibold">
          About
        </span>
        <h2 className="text-dark-brown font-extrabold text-3xl md:text-4xl font-display">
          Story Behind <span className="text-muted-green">our Center</span>
        </h2>
        <p className="text-neutral-700 md:text-[20px] max-w-3xl mx-auto">
          Our spa is a peaceful retreat from everyday chaos,
          focusing on relaxation and rejuvenation.
        </p>
      </motion.div>
      <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <motion.div
          className="md:col-span-5 order-2 md:order-1 px-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <h3 className="text-dark-brown font-extrabold font-display text-2xl md:text-3xl leading-snug">
            Regain your inner
            <br />
            <span className="text-muted-green">tranquility &amp; peace</span>
          </h3>
          <p className="mt-3 text-neutral-700 md:text-[20px]">
            Our spa center offers a diverse range of treatments, from soothing
            massages to invigorating facials, each designed to enhance your
            well-being.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <Link
              href="#"
              className="rounded-full bg-white  px-4 py-2 text-sm font-display font-semibold text-dark-brown inline-block transition-transform duration-200 hover:-rotate-6"
            >
              Meet Our Team
            </Link>
            <Link
              href="/treatments"
              className="rounded-full bg-transparent border-2 border-dark-brown px-4 py-2 text-sm font-display font-semibold text-dark-brown inline-block transition-transform duration-200 hover:-rotate-6"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="md:col-span-7 order-1 md:order-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
        >
          <div className="relative">
            <InvertedAngledBackdrop />
            <div className="relative overflow-hidden rounded-[28px] md:rounded-[36px] image-shadow h-[260px] md:h-[420px] 2xl:h-[520px]">
              <Image
                src="/assets/images/kora_interior.jpg"
                alt="Spa interior"
                fill
                className="object-cover"
                sizes="(min-width: 1536px) 720px, (min-width: 768px) 60vw, 100vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
