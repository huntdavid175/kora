"use client";

import ParallaxImage from "@/components/ParallaxImage";
import PricingTabs from "@/components/PricingTabs";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePricingSection() {
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
          Pricing
        </span>
        <h2 className="text-dark-brown font-extrabold text-3xl md:text-4xl font-display">
          Explore Our <span className="text-muted-green">Spa Packages</span>
        </h2>
        <p className="text-neutral-700 md:text-base max-w-2xl mx-auto">
          Discover the Perfect Package for Your Relaxation Needs.
        </p>
      </motion.div>

      <motion.div
        className="mt-8 max-w-5xl mx-auto md:mt-10 rounded-[20px] md:rounded-[28px] bg-white overflow-hidden image-shadow"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 md:h-[700px] 2xl:h-[760px] min-h-0">
          <div className="relative md:col-span-5 h-[220px] md:h-full overflow-hidden min-h-0">
            <ParallaxImage src="/assets/images/kora_interior.jpg" alt="Spa room" speed={0.18} />
          </div>
          <div className="md:col-span-7 p-5 md:p-8 md:border-l md:border-dark-brown/10 md:h-full min-h-0">
            <PricingTabs />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-6 max-w-5xl mx-auto md:mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
      >
        <div className="rounded-[20px] md:rounded-[24px] bg-white border border-dark-brown/10 image-shadow px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left font-extrabold text-dark-brown font-display md:text-[26px]">
            Looking for a custom spa experience?
          </div>
          <Link
            href="#"
            className="inline-block rounded-full bg-dark-brown text-white px-5 py-2 text-[12px] md:text-[14px] font-display font-semibold transition-transform duration-200   hover:-rotate-6"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
