"use client";

import { useEffect, useRef, useState } from "react";

type Item = {
  icon: string;
  name: string;
  minutes: number;
  price: number;
};

type Category = {
  key: string;
  label: string;
  items: Item[];
};

const categories: Category[] = [
  {
    key: "packages",
    label: "Packages",
    items: [
      { icon: "leaf", name: "Serenity Escape", minutes: 90, price: 120 },
      { icon: "heart", name: "Couples Retreat", minutes: 120, price: 250 },
      { icon: "crown", name: "Bridal Radiance", minutes: 150, price: 220 },
      { icon: "party", name: "Spa Party", minutes: 180, price: 350 },
      { icon: "leaf", name: "Detox Day", minutes: 180, price: 330 },
      { icon: "star", name: "Ultimate Renewal", minutes: 240, price: 420 },
      { icon: "heart", name: "Mom‑to‑Be Pamper", minutes: 120, price: 210 },
      { icon: "party", name: "Weekend Reset", minutes: 150, price: 260 },
    ],
  },
  {
    key: "facials",
    label: "Facials",
    items: [
      { icon: "star", name: "Luxury Glow", minutes: 120, price: 180 },
      { icon: "drop", name: "Glow & Hydrate", minutes: 75, price: 110 },
      { icon: "layers", name: "Deep Cleanse", minutes: 60, price: 95 },
      { icon: "star", name: "Anti‑Aging Lift", minutes: 90, price: 160 },
      { icon: "drop", name: "Vitamin C Brightening", minutes: 75, price: 130 },
      { icon: "moon", name: "Calming Sensitive", minutes: 60, price: 105 },
    ],
  },
  {
    key: "therapy",
    label: "Therapy",
    items: [
      { icon: "layers", name: "Hot Stone Heaven", minutes: 75, price: 130 },
      { icon: "moon", name: "Sleep Therapy", minutes: 60, price: 100 },
      { icon: "drop", name: "Aromatherapy", minutes: 75, price: 120 },
      { icon: "layers", name: "Reflexology", minutes: 45, price: 85 },
      { icon: "heart", name: "Prenatal Massage", minutes: 60, price: 130 },
      { icon: "leaf", name: "Thai Stretch", minutes: 90, price: 150 },
    ],
  },
];

function Icon({ name }: { name: string }) {
  const cls = "w-5 h-5";
  if (name === "leaf")
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6c3 3 4.5 6 4.5 9 0 4.5-3 7-4.5 7s-4.5-2.5-4.5-7c0-3 1.5-6 4.5-9z" />
      </svg>
    );
  if (name === "star")
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-6Z" />
      </svg>
    );
  if (name === "heart")
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21s-5-3.5-5-7a5 5 0 0 1 9.5-2.5A5 5 0 0 1 17 14c0 3.5-5 7-5 7z" />
      </svg>
    );
  if (name === "layers")
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 8h16M6 12h12M8 16h8" />
      </svg>
    );
  if (name === "moon")
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12a9 9 0 1 1-9-9 7 7 0 0 0 9 9z" />
      </svg>
    );
  if (name === "drop")
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3s-5 6-5 9a5 5 0 1 0 10 0c0-3-5-9-5-9Z" />
      </svg>
    );
  if (name === "crown")
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 16l2-6 5 4 5-4 2 6H5Z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 20l6-2-4-4 2-6 6 2 4 4-2 6-6-2-4 4Z" />
    </svg>
  );
}

export default function PricingTabs() {
  const [active, setActive] = useState<string>("");
  const current = categories.find((c) => c.key === active) ?? categories[0];

  const listRef = useRef<HTMLDivElement>(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const update = () => {
      const overflow = el.scrollHeight > el.clientHeight + 1;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
      setShowHint(overflow && !atBottom);
    };
    update();
    el.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const el = listRef.current;
      if (!el) return;
      const overflow = el.scrollHeight > el.clientHeight + 1;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
      setShowHint(overflow && !atBottom);
    });
    return () => cancelAnimationFrame(id);
  }, [active]);

  return (
    <div className="relative flex h-full flex-col">
      <div className="flex items-center justify-center gap-2 text-muted-green shrink-0">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 6c3 3 4.5 6 4.5 9 0 4.5-3 7-4.5 7s-4.5-2.5-4.5-7c0-3 1.5-6 4.5-9z" />
          <path d="M6 12c2 .5 4 2 4.5 4-4 0-6.5-1-7.5-2.5.5-1 1.5-1.5 3-1.5z" />
          <path d="M18 12c-2 .5-4 2-4.5 4 4 0 6.5-1 7.5-2.5-.5-1-1.5-1.5-3-1.5z" />
        </svg>
        <span className="font-semibold">LotusW</span>
      </div>

      <div className="mt-4 shrink-0">
        <div role="tablist" className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((c) => (
            <button
              key={c.key}
              role="tab"
              aria-selected={active === c.key}
              onClick={() => setActive(c.key)}
              className={
                (active === c.key
                  ? "bg-dark-brown text-white border-dark-brown "
                  : "bg-white text-dark-brown border-dark-brown/20 ") +
                "rounded-full px-4 py-1.5 text-sm font-semibold border whitespace-nowrap lg:text-[20px]"
              }
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div ref={listRef} className="mt-4 divide-y divide-dark-brown/10 flex-1 overflow-y-auto no-scrollbar pr-1">
        {current.items.map((t) => (
          <div key={t.name} className="flex items-center justify-between py-3 md:py-4">
            <div className="flex items-center gap-3 md:gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cream-beige border border-dark-brown/10 text-dark-brown">
                <Icon name={t.icon} />
              </span>
              <div>
                <div className="text-dark-brown text-[16px] lg:text-[22px] font-display font-extrabold">{t.name}</div>
                <div className="text-xs lg:text-[20px] text-neutral-600">{t.minutes} Minutes</div>
              </div>
            </div>
            <div className="text-dark-brown text-xs lg:text-[20px] font-semibold">${t.price}</div>
          </div>
        ))}
      </div>

      <div
        aria-hidden
        className={
          (showHint ? "opacity-100 " : "opacity-0 ") +
          "pointer-events-none absolute bottom-0 left-0 right-0 h-12 transition-opacity duration-200"
        }
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
        <div className="relative h-full flex items-end justify-center pb-2">
          <div className="h-7 w-7 rounded-full bg-cream-beige border border-dark-brown/20 text-dark-brown flex items-center justify-center shadow-sm">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 10l6 6 6-6"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}
