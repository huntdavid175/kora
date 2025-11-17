"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AngledBackdrop from "@/components/AngledBackdrop";
import ContactSection from "@/components/ContactSection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function TreatmentsPage() {
  const cards = [
    {
      title: "Hot Stone Heaven",
      description:
        "Warm stones and flowing massage work together to relieve deep tension and calm the nervous system.",
      src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1600&auto=format&fit=crop",
      alt: "Hot stone massage",
    },
    {
      title: "Luxury Glow",
      description:
        "An indulgent facial and body treatment that polishes, hydrates, and leaves your skin glowing.",
      src: "https://cdn.prod.website-files.com/67f76d950a84151276d0ab14/67fcbf7d6f6051abb7cb3222_glow-hydrate.avif",
      alt: "Luxury glow facial",
    },
    {
      title: "Couples Retreat",
      description:
        "Side-by-side massages and private spa time designed for connection, relaxation, and pure indulgence.",
      src: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1600&auto=format&fit=crop",
      alt: "Couple relaxing at spa",
    },
    {
      title: "Herbal Body Wrap",
      description:
        "Detoxifying herbal wrap infused with natural botanicals to nourish and smooth your skin.",
      src: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=1600&auto=format&fit=crop",
      alt: "Herbal body wrap",
    },
    {
      title: "Aromatherapy Massage",
      description:
        "A calming massage enhanced with pure essential oils to relax the body and refresh the mind.",
      src: "https://images.unsplash.com/photo-1580281657527-47cd3b7c1a3d?q=80&w=1600&auto=format&fit=crop",
      alt: "Aromatherapy massage",
    },
    {
      title: "Serenity Escape",
      description:
        "Full-body massage with aromatherapy to relax, restore, and melt away stress and tension.",
      src: "https://cdn.prod.website-files.com/67f76d950a84151276d0ab14/67fcb9c8d7250a5d1ea4a233_serenity-escape-thumb.avif",
      alt: "Serenity escape session",
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="mx-auto md:max-w-[1248px] 2xl:max-w-[1448px] px-6 py-16 md:py-24">
        <motion.div
          className="text-center space-y-3 md:space-y-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block rounded-full bg-white/90 border border-dark-brown/20 text-dark-brown/80 px-3 py-1 text-[10px] tracking-[0.18em] uppercase font-semibold">Treatments</span>
          <h1 className="text-dark-brown font-extrabold text-3xl md:text-4xl font-display">
            Where Wellness <span className="text-muted-green">Begins</span>
          </h1>
        </motion.div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.08 * index, ease: "easeOut" }}
            >
              <div className="relative">
                <AngledBackdrop />
                <div className="relative overflow-hidden rounded-2xl image-shadow h-[260px] md:h-[360px] 2xl:h-[420px]">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
              </div>
              <div className="mt-3 text-center">
                <div className="font-extrabold text-dark-brown font-display">{card.title}</div>
                <p className="mt-2 text-neutral-700 text-sm md:text-[16px]">{card.description}</p>
                <Link href="#" className="mt-4 rounded-full border-2 border-dark-brown px-4 py-2 text-sm font-display font-semibold text-dark-brown bg-white inline-block transition-transform duration-200 hover:-rotate-6">Learn More</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <ContactSection />
    </main>
  );
}