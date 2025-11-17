"use client";

import InvertedAngledBackdrop from "@/components/InvertedAngledBackdrop";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeWhyChooseSection() {
  return (
    <section className="mx-auto md:max-w-[1248px] 2xl:max-w-[1448px] px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <motion.div
          className="md:col-span-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-dark-brown font-extrabold text-3xl md:text-4xl font-display">
            Why Choose <span className="text-muted-green">Us</span>
          </h2>
          <p className="mt-3 text-neutral-700 md:text-base">
            Our attention to details and satisfaction of our clients is what sets us apart from
            others in the Wellness industry.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-1 text-muted-green">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 17.3 6.8 20l1-5.6L3.5 10l5.7-.8L12 4l2.8 5.2 5.7.8-4.3 4.4 1 5.6z"/></svg>
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 17.3 6.8 20l1-5.6L3.5 10l5.7-.8L12 4l2.8 5.2 5.7.8-4.3 4.4 1 5.6z"/></svg>
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 17.3 6.8 20l1-5.6L3.5 10l5.7-.8L12 4l2.8 5.2 5.7.8-4.3 4.4 1 5.6z"/></svg>
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 17.3 6.8 20l1-5.6L3.5 10l5.7-.8L12 4l2.8 5.2 5.7.8-4.3 4.4 1 5.6z"/></svg>
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 17.3 6.8 20l1-5.6L3.5 10l5.7-.8L12 4l2.8 5.2 5.7.8-4.3 4.4 1 5.6z"/></svg>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="relative h-6 w-6 rounded-full ring-2 ring-white overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" alt="" fill className="object-cover" />
                </div>
                <div className="relative h-6 w-6 rounded-full ring-2 ring-white overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=100&auto=format&fit=crop" alt="" fill className="object-cover" />
                </div>
                <div className="relative h-6 w-6 rounded-full ring-2 ring-white overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1545996124-0501ebae84d7?q=80&w=100&auto=format&fit=crop" alt="" fill className="object-cover" />
                </div>
                <div className="relative h-6 w-6 rounded-full ring-2 ring-white overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1547425260-3ce7a1aebfea?q=80&w=100&auto=format&fit=crop" alt="" fill className="object-cover" />
                </div>
              </div>
              <span className="text-sm text-dark-brown"><span className="font-bold">4.8/5</span> rating on Trustpilot</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="md:col-span-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <div className="relative">
            <InvertedAngledBackdrop />
            <div className="relative overflow-hidden rounded-[28px] md:rounded-[36px] image-shadow h-[260px] md:h-[420px] 2xl:h-[520px]">
              <Image
                src="https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f38c443f2affc4bcbaa355_our-spa.avif"
                alt="Relaxing massage"
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
