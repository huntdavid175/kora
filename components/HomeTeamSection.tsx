"use client";

import AngledBackdrop from "@/components/AngledBackdrop";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeTeamSection() {
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
        <h2 className="text-dark-brown font-extrabold text-3xl md:text-4xl font-display">
          Discover the Team
          <br className="hidden md:block" />
          <span className="text-muted-green">Behind Our Spa</span>
        </h2>
        <p className="text-neutral-700 md:text-[20px] max-w-2xl mx-auto">
          Experts that will take care of you and make you feel right at home.
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
            <div className="relative overflow-hidden rounded-2xl image-shadow h-[260px] md:h-[360px] 2xl:h-[420px]">
              <Image
                src="/assets/images/team1.png"
                alt="Ama Serwaa"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </div>
          <div className="mt-3 text-center">
            <div className="font-extrabold md:text-[22px] text-dark-brown font-display">Ama Serwaa</div>
            <div className="text-xs text-neutral-600 md:text-[16px]">Spa Center Founder</div>
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
            <div className="relative overflow-hidden rounded-2xl image-shadow h-[260px] md:h-[360px] 2xl:h-[420px]">
              <Image
                src="/assets/images/team2.png"
                alt="Esther Mensah"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </div>
          <div className="mt-3 text-center">
            <div className="font-extrabold md:text-[22px] text-dark-brown font-display">Esther Mensah</div>
            <div className="text-xs text-neutral-600 md:text-[16px]">Office Manager</div>
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
            <div className="relative overflow-hidden rounded-2xl image-shadow h-[260px] md:h-[360px] 2xl:h-[420px]">
              <Image
                src="/assets/images/team3.png"
                alt="Efua Owusu"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </div>
          <div className="mt-3 text-center">
            <div className="font-extrabold md:text-[22px] text-dark-brown font-display">Efua Owusu</div>
            <div className="text-xs text-neutral-600 md:text-[16px]">Event &amp; Music Manager</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
