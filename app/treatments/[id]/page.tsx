"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AngledBackdrop from "@/components/AngledBackdrop";
import PricingTabs from "@/components/PricingTabs";
import ParallaxImage from "@/components/ParallaxImage";
import ContactSection from "@/components/ContactSection";

type Treatment = {
  title: string;
  lead: string;
  paragraphs: string[];
  image: { src: string; alt: string };
};

const treatments: Record<string, Treatment> = {
  "luxury-glow": {
    title: "Luxury Glow",
    lead: "Treat yourself to the ultimate indulgence with our Luxury Glow package.",
    paragraphs: [
      "120-minute head-to-toe experience designed to renew, hydrate, and illuminate your skin.",
      "Begin with a luxurious full-body exfoliation to slough away dullness and reveal smoother, radiant skin. Follow it up with a deeply nourishing facial, tailored to your skin’s needs, using premium serums and masks to hydrate and brighten your complexion.",
      "This treatment also includes a soothing massage to melt tension and promote circulation, enhancing your natural glow from within. You’ll leave feeling polished, pampered, and luminous.",
    ],
    image: {
      src: "https://cdn.prod.website-files.com/67f76d950a84151276d0ab14/67fccc3bf47e2d614999880c_luxury-glow-main.webp",
      alt: "Luxury glow facial treatment",
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function toSlug(input: string) {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function TreatmentPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const data = treatments[id] || treatments["luxury-glow"];

  return (
    <main className="min-h-screen">
      <section className="mx-auto md:max-w-[1248px] 2xl:max-w-[1448px] px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10">
          <motion.div
            className="md:col-span-5 order-2 md:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-muted-green font-extrabold text-3xl md:text-4xl font-display">{data.title}</h1>
            <div className="mt-4 text-dark-brown font-extrabold font-display text-[18px] md:text-[22px] leading-snug">
              {data.lead}
            </div>
            <div className="mt-4 space-y-3 text-neutral-700 text-sm md:text-[16px]">
              {data.paragraphs.map((p) => (
                <p key={p.slice(0, 16)}>{p}</p>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <Link href="#" className="rounded-full bg-dark-brown text-white px-5 py-2 text-[12px] md:text-[14px] font-display font-semibold transition-transform duration-200 hover:-rotate-6">Book Now</Link>
              <Link href="/treatments" className="rounded-full bg-transparent border-2 border-dark-brown px-4 py-2 text-sm md:text-[14px] font-display font-semibold text-dark-brown inline-block transition-transform duration-200 hover:-rotate-6">All Treatments</Link>
            </div>
          </motion.div>

          <motion.div
            className="md:col-start-7 md:col-span-6 order-1 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <div className="relative">
              <AngledBackdrop className="translate-x-4 md:translate-x-8 translate-y-4 md:translate-y-6" />
              <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] image-shadow h-[560px] md:h-[840px] 2xl:h-[980px]">
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1536px) 720px, (min-width: 768px) 60vw, 100vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="mx-auto md:max-w-[1248px] 2xl:max-w-[1448px] px-6 py-16 md:py-24">
        <motion.div
          className="text-center space-y-3 md:space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block rounded-full bg-white/90 border border-dark-brown/20 text-dark-brown/80 px-3 py-1 text-[10px] tracking-[0.18em] uppercase font-semibold">Pricing</span>
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
            <div className="text-center md:text-left font-extrabold text-dark-brown font-display md:text-[26px]">Looking for a custom spa experience?</div>
            <Link href="#" className="inline-block rounded-full bg-dark-brown text-white px-5 py-2 text-[12px] md:text-[14px] font-display font-semibold transition-transform duration-200  hover:-rotate-6">Contact Us</Link>
          </div>
        </motion.div>
      </section>
      <ContactSection />
    </main>
  );
}
