"use client";

import { useRef } from "react";
import Image from "next/image";

type Testimonial = {
  image: string;
  title: string;
  body: string;
  author: string;
};

const testimonials: Testimonial[] = [
  {
    image:
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1600&auto=format&fit=crop",
    title: "Pure Relaxation",
    body:
      "This spa is pure bliss! From the calming ambiance to the expert therapists, every visit leaves me feeling refreshed and rejuvenated. Highly recommended!",
    author: "Sarah L.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop",
    title: "Amazing Service",
    body:
      "The staff is incredibly kind and professional. They truly care about your comfort and well-being. Best massage I’ve ever had!",
    author: "Emma R.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop",
    title: "Soothing Atmosphere",
    body:
      "Beautiful interiors and a serene vibe. The treatments are top-notch and great value for money.",
    author: "Nina D.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544006659-18d4b7d2f36a?q=80&w=1600&auto=format&fit=crop",
    title: "Highly Recommended",
    body:
      "From booking to checkout, everything is seamless. My go-to place for relaxation.",
    author: "Ava K.",
  },
];

export default function TestimonialsCarousel() {
  const listRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: number) => {
    const el = listRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("[data-card]");
    const gap = 24; // match gap-6 ~ 24px
    const step = firstCard ? firstCard.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="mx-auto  px-6 py-16 md:py-24 bg-white">
      <div className="text-center space-y-3 md:space-y-4">
        <span className="inline-block rounded-full bg-white/90 border border-dark-brown/20 text-dark-brown/80 px-3 py-1 text-[10px] tracking-[0.18em] uppercase font-semibold">
          Testimonials
        </span>
        <h2 className="text-dark-brown font-extrabold text-3xl md:text-4xl font-display">
          Serenity <span className="text-muted-green">Stories</span>
        </h2>
        <p className="text-neutral-700 md:text-[20px] max-w-2xl mx-auto">
          Learn what our customers say about our Spa Center.
        </p>
      </div>

      {/* Full-width scroller */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-8 md:mt-10">
         {/* Controls aligned to container right */}
            <div >
              <div className="mx-auto md:max-w-[1248px] 2xl:max-w-[1448px] px-6 flex justify-start mb-8 gap-2">
                <button
                  aria-label="Previous"
                  onClick={() => scrollByCards(-1)}
                  className="h-8 w-8 rounded-full bg-cream-beige border border-dark-brown/20 text-dark-brown flex items-center justify-center hover:opacity-80"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6"/></svg>
                </button>
                <button
                  aria-label="Next"
                  onClick={() => scrollByCards(1)}
                  className="h-8 w-8 rounded-full bg-cream-beige border border-dark-brown/20 text-dark-brown flex items-center justify-center hover:opacity-80"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
                </button>
              </div>
            </div>
        <div className="px-6 md:px-8 max-w-none">
          <div className="relative">
         

            <div
              ref={listRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory  no-scrollbar"
            >
              {testimonials.map((t, i) => (
                <article
                  key={i}
                  data-card
                  className="shrink-0 w-[85vw] md:w-[560px] 2xl:w-[640px] snap-start"
                >
                  <div className="grid grid-cols-5 h-[320px] md:h-[360px] 2xl:h-[380px] rounded-[24px] bg-cream-beige overflow-hidden image-shadow">
                    <div className="col-span-2 h-full relative">
                      <Image src={t.image} alt={t.title} fill className="object-cover" sizes="(min-width: 1024px) 40vw, 80vw" />
                    </div>
                    <div className="col-span-3 p-5 md:p-6 flex flex-col h-full">
                      <div className="flex items-center gap-1 text-muted-green">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M12 17.3 6.8 20l1-5.6L3.5 10l5.7-.8L12 4l2.8 5.2 5.7.8-4.3 4.4 1 5.6z"/></svg>
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M12 17.3 6.8 20l1-5.6L3.5 10l5.7-.8L12 4l2.8 5.2 5.7.8-4.3 4.4 1 5.6z"/></svg>
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M12 17.3 6.8 20l1-5.6L3.5 10l5.7-.8L12 4l2.8 5.2 5.7.8-4.3 4.4 1 5.6z"/></svg>
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M12 17.3 6.8 20l1-5.6L3.5 10l5.7-.8L12 4l2.8 5.2 5.7.8-4.3 4.4 1 5.6z"/></svg>
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M12 17.3 6.8 20l1-5.6L3.5 10l5.7-.8L12 4l2.8 5.2 5.7.8-4.3 4.4 1 5.6z"/></svg>
                      </div>
                      <h3 className="mt-2 text-dark-brown font-extrabold font-display text-[18px] md:text-[20px]">
                        {t.title}
                      </h3>
                      <p
                        className="mt-3 text-neutral-700 text-sm leading-relaxed overflow-hidden flex-1"
                        style={{ display: "-webkit-box", WebkitLineClamp: 6, WebkitBoxOrient: "vertical" }}
                      >
                        {t.body}
                      </p>
                      <div className="mt-3 text-dark-brown/70 text-sm">{t.author}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
