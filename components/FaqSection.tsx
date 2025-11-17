"use client";

import { useState } from "react";

type FaqItem = {
  q: string;
  a?: string;
};

const faqs: FaqItem[] = [
  {
    q: "What should I wear to the spa?",
    a: "Come in comfortable clothing. You'll be provided with a robe and slippers during your visit. For body treatments, disposable undergarments are available.",
  },
  {
    q: "Do you offer gift cards?",
    a: "Yes. We offer both physical and digital gift cards. They can be purchased in any amount and used for services or retail items with no expiration date.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards, Apple Pay/Google Pay, and cash. Please contact us ahead of time if you'd like to use an alternative method.",
  },
  {
    q: "Can I request a specific therapist?",
    a: "Absolutely. You can request a therapist when booking and we'll do our best to accommodate your preference based on availability.",
  },
  {
    q: "Is an appointment necessary?",
    a: "Walk‑ins are welcome when available, but we recommend booking in advance to secure your preferred time. Please arrive 10 minutes early to unwind.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="mx-auto md:max-w-5xl px-6 py-16 md:py-24">
      <div className="space-y-3 md:space-y-4">
        <span className="inline-block rounded-full bg-white/90 border border-dark-brown/20 text-dark-brown/80 px-3 py-1 text-[10px] tracking-[0.18em] uppercase font-display tracking-[-0.02em] font-semibold">FAQ</span>
        <h2 className="text-dark-brown font-extrabold text-3xl md:text-4xl font-display leading-tight">
          Your Spa
          <br />
          <span className="text-muted-green">Questions Answered</span>
        </h2>
      </div>

      <div className="mt-8 md:mt-10 relative">
        <ul className="list-none divide-y divide-dark-brown/20 border-t border-dark-brown/20">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="">
                <button
                  className="w-full flex items-center justify-between py-4 md:py-5 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-dark-brown font-extrabold font-display text-[18px] md:text-[24px]">
                    {item.q}
                  </span>
                  <span className="ml-4 inline-flex h-7 w-7 items-center justify-center rounded bg-cream-beige border border-dark-brown/20 text-dark-brown">
                    {isOpen ? (
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 6l12 12M18 6L6 18" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    )}
                  </span>
                </button>

                <div
                  aria-hidden={!isOpen}
                  className={
                    (isOpen
                      ? "max-h-[260px] opacity-100 mb-5 -mt-1"
                      : "max-h-0 opacity-0") +
                    " overflow-hidden transition-all duration-300"
                  }
                >
                  {item.a && (
                    <div className="rounded-[14px] border-t border-dark-brown/20 rounded-t-[0px] bg-[#EAE4D7] text-dark-brown/90 p-4 md:p-6 text-sm md:text-[20px]">
                      {item.a}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        {/* <div className="mt-6 md:mt-8 flex justify-end">
          <div className="inline-flex items-center gap-3 rounded-md bg-white border border-dark-brown/20 px-4 py-2 shadow-sm">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-cream-beige border border-dark-brown/20 text-dark-brown">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 17v.01M12 7a5 5 0 00-3 9" />
              </svg>
            </span>
            <span className="text-dark-brown font-semibold text-sm md:text-base">Ask us about membership perks.</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
