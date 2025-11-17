"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export type Service = { id: string; name: string; duration: string; price: number };

const categories = [
  "Featured",
  "Food and Drink",
  "PACKAGES",
  "MANICURE",
  "PEDICURE",
  "Waxing",
  "More",
];

const catalog: Record<string, Service[]> = {
  Featured: [
    { id: "deep-tissue", name: "Deep tissue massage", duration: "1 hr", price: 280 },
    { id: "swedish", name: "Swedish Massage", duration: "1 hr", price: 230 },
    { id: "deeper-than-swedish", name: "Deeper than Swedish", duration: "1 hr", price: 250 },
    { id: "aroma-massage", name: "Aromatherapy Massage", duration: "1 hr", price: 240 },
    { id: "hot-stone", name: "Hot Stone Massage", duration: "1 hr 30 min", price: 360 },
    { id: "spa-pedicure", name: "Spa pedicure", duration: "1 hr", price: 120 },
  ],
  "Food and Drink": [
    { id: "herbal-tea", name: "Herbal Tea Service", duration: "15 min", price: 30 },
    { id: "detox-juice", name: "Detox Juice", duration: "10 min", price: 45 },
    { id: "sparkling-water", name: "Sparkling Water", duration: "5 min", price: 20 },
    { id: "fruit-platter", name: "Seasonal Fruit Platter", duration: "15 min", price: 60 },
    { id: "protein-smoothie", name: "Protein Smoothie", duration: "10 min", price: 55 },
  ],
  PACKAGES: [
    { id: "couples-retreat", name: "Couples Retreat", duration: "2 hr", price: 720 },
    { id: "full-day", name: "Full Day Retreat", duration: "6 hr", price: 1800 },
    { id: "weekend-glow", name: "Weekend Glow", duration: "3 hr", price: 980 },
    { id: "stress-relief", name: "Stress Relief Package", duration: "2 hr 30 min", price: 860 },
    { id: "bride-to-be", name: "Bride-to-Be", duration: "4 hr", price: 1450 },
  ],
  MANICURE: [
    { id: "classic-mani", name: "Classic Manicure", duration: "45 min", price: 150 },
    { id: "gel-mani", name: "Gel Manicure", duration: "1 hr", price: 220 },
    { id: "spa-mani", name: "Spa Manicure", duration: "1 hr", price: 200 },
    { id: "acrylic-removal", name: "Acrylic Removal", duration: "30 min", price: 80 },
    { id: "nail-art", name: "Nail Art Add-on", duration: "20 min", price: 60 },
  ],
  PEDICURE: [
    { id: "classic-pedi", name: "Classic Pedicure", duration: "45 min", price: 180 },
    { id: "spa-pedi", name: "Spa Pedicure", duration: "1 hr", price: 220 },
    { id: "deluxe-pedi", name: "Deluxe Pedicure", duration: "1 hr 15 min", price: 280 },
    { id: "callus-treat", name: "Callus Treatment", duration: "20 min", price: 70 },
    { id: "paraffin-wax", name: "Paraffin Wax Add-on", duration: "15 min", price: 65 },
  ],
  Waxing: [
    { id: "brow-wax", name: "Eyebrow Wax", duration: "15 min", price: 65 },
    { id: "underarm-wax", name: "Underarm Wax", duration: "20 min", price: 90 },
    { id: "half-leg-wax", name: "Half Leg Wax", duration: "30 min", price: 150 },
    { id: "full-leg-wax", name: "Full Leg Wax", duration: "45 min", price: 240 },
    { id: "brazilian-wax", name: "Brazilian Wax", duration: "40 min", price: 260 },
  ],
  More: [
    { id: "sauna", name: "Sauna Session", duration: "30 min", price: 120 },
    { id: "steam", name: "Steam Room", duration: "30 min", price: 100 },
    { id: "body-scrub", name: "Body Scrub", duration: "45 min", price: 260 },
    { id: "back-facial", name: "Back Facial", duration: "45 min", price: 280 },
    { id: "scalp-massage", name: "Scalp Massage", duration: "30 min", price: 140 },
  ],
};

export default function BookingPageClient() {
  const router = useRouter();
  const [activeCat, setActiveCat] = useState("Featured");
  const [selected, setSelected] = useState<string[]>([]);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const pillsRef = useRef<HTMLDivElement | null>(null);
  const [pillsHeight, setPillsHeight] = useState(0);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");

  function scrollToCategory(cat: string) {
    const el = sectionRefs.current[cat];
    if (!el) return;
    const offset = (pillsRef.current?.offsetHeight ?? pillsHeight) + 16;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveCat(cat);
  }

  useEffect(() => {
    const onScroll = () => {
      let current = categories[0];
      let minDist = Number.POSITIVE_INFINITY;
      const offset = (pillsRef.current?.offsetHeight ?? pillsHeight) + 24;
      for (const cat of categories) {
        const el = sectionRefs.current[cat];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - offset);
        if (rect.bottom > offset && rect.top < window.innerHeight) {
          if (dist < minDist) {
            minDist = dist;
            current = cat;
          }
        }
      }
      setActiveCat(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true } as any);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pillsHeight]);

  useEffect(() => {
    const measure = () => setPillsHeight(pillsRef.current?.offsetHeight ?? 0);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const allServicesMap = useMemo(() => {
    const m = new Map<string, Service>();
    Object.values(catalog).forEach((arr) => arr.forEach((s) => m.set(s.id, s)));
    return m;
  }, []);

  const total = useMemo(
    () => selected.map((id) => allServicesMap.get(id)?.price ?? 0).reduce((a, b) => a + b, 0),
    [selected, allServicesMap]
  );

  const canConfirmSlot = bookingDate.trim() !== "" && bookingTime.trim() !== "";

  const timeSlots = useMemo(() => {
    const slots: { value: string; label: string }[] = [];
    const formatLabel = (hours24: number, minutes: number) => {
      const period = hours24 >= 12 ? "PM" : "AM";
      const hours12 = ((hours24 + 11) % 12) + 1;
      const mm = String(minutes).padStart(2, "0");
      return `${hours12}:${mm} ${period}`;
    };
    // Opening hours: 9:00 AM to 5:00 PM
    for (let h = 9; h <= 17; h++) {
      for (let m = 0; m < 60; m += 15) {
        if (h === 17 && m > 0) break;
        const hh = String(h).padStart(2, "0");
        const mm = String(m).padStart(2, "0");
        slots.push({ value: `${hh}:${mm}`, label: formatLabel(h, m) });
      }
    }
    return slots;
  }, []);

  function toggleService(id: string) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  return (
    <main className="min-h-screen">
      <section
        className="mx-auto md:max-w-[1248px] 2xl:max-w-[1448px] px-6 py-10 md:py-14"
        style={{ paddingTop: pillsHeight }}
      >
        <h1 className="text-dark-brown font-extrabold text-3xl md:text-4xl font-display">Services</h1>

        <div
          ref={pillsRef}
          className="static top-0 inset-x-0 z-30 bg-[var(--color-cream-beige)]/95 backdrop-blur border-b border-dark-brown/10"
        >
          <div className="mx-auto md:max-w-[1248px] 2xl:max-w-[1448px] px-6">
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2">
              {categories.map((c) => {
                const active = c === activeCat;
                return (
                  <button
                    key={c}
                    className={
                      active
                        ? "rounded-full bg-black text-white px-3 py-1 text-sm font-semibold whitespace-nowrap flex-shrink-0"
                        : "rounded-full px-3 py-1 text-sm text-dark-brown/70 hover:text-dark-brown whitespace-nowrap flex-shrink-0"
                    }
                    aria-current={active ? "true" : undefined}
                    onClick={() => scrollToCategory(c)}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="md:col-span-7 md:row-start-2">
            <div className="space-y-8">
              {categories.map((cat) => (
                <div
                  key={cat}
                  ref={(el) => {
                    sectionRefs.current[cat] = el;
                  }}
                >
                  <div className="text-dark-brown font-extrabold font-display">{cat}</div>
                  <div className="mt-3 space-y-3">
                    {(catalog[cat] ?? []).map((s) => (
                      <div
                        key={s.id}
                        className={
                          "rounded-xl bg-white border-2 px-4 py-4 flex items-center justify-between shadow-sm " +
                          (selected.includes(s.id)
                            ? "border-[var(--color-muted-green)]"
                            : "border-dark-brown/10")
                        }
                      >
                        <div>
                          <div className="text-dark-brown font-semibold">{s.name}</div>
                          <div className="text-neutral-500 text-sm">{s.duration}</div>
                          <div className="text-dark-brown mt-2">GHS {s.price}</div>
                        </div>
                        <button
                          onClick={() => toggleService(s.id)}
                          aria-label={selected.includes(s.id) ? "Remove service" : "Add service"}
                          className={
                            "h-8 w-8 rounded-full flex items-center justify-center " +
                            (selected.includes(s.id)
                              ? "bg-[var(--color-muted-green)] text-white"
                              : "border border-neutral-300 text-neutral-700")
                          }
                        >
                          {selected.includes(s.id) ? (
                            <span className="text-sm leading-none">✓</span>
                          ) : (
                            <span className="text-lg leading-none">+</span>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="md:col-span-5 md:row-start-2 md:sticky md:top-24">
            <div className="mt-4 md:mt-6 rounded-xl bg-white border border-dark-brown/10 p-4 md:p-5">
              <div className="flex items-start gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-md">
                  <Image
                    src="/assets/images/kora_booking.jpg"
                    alt="Spa thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-dark-brown font-semibold">Kora Spa</div>
                  <div className="flex items-center gap-1 text-[12px] text-neutral-600">
                    <span>4.9</span>
                    <span className="text-yellow-500">★ ★ ★ ★ ★</span>
                    <span>(188)</span>
                  </div>
                  <div className="text-neutral-500 text-[12px] truncate">
                    Watermelon street Opposite A&C Mall East Legon, ...
                  </div>
                </div>
              </div>

              <div className="my-4 border-t border-neutral-200" />

              {selected.length === 0 ? (
                <div className="text-neutral-500 text-sm">No services selected</div>
              ) : (
                <ul className="space-y-2">
                  {selected.map((id) => {
                    const item = allServicesMap.get(id)!;
                    return (
                      <li className="flex items-center justify-between text-dark-brown text-sm" key={id}>
                        <span>{item.name}</span>
                        <span>GHS {item.price}</span>
                      </li>
                    );
                  })}
                </ul>
              )}

              <div className="my-4 border-t border-neutral-200" />

              <div className="flex items-center justify-between text-dark-brown font-semibold">
                <span>Total</span>
                <span>{total > 0 ? `GHS ${total}` : "free"}</span>
              </div>

              <button
                className={
                  "mt-5 w-full rounded-full py-3 text-white font-display font-semibold " +
                  (total === 0 ? "bg-neutral-300" : "bg-dark-brown hover:opacity-90")
                }
                disabled={total === 0}
                onClick={() => {
                  if (total === 0) return;
                  setIsDateModalOpen(true);
                }}
              >
                Continue
              </button>
            </div>
          </aside>
        </div>
      </section>

      {isDateModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="w-full max-w-md rounded-2xl bg-[var(--color-cream-beige)] border border-dark-brown/10 shadow-xl">
            <div className="flex items-center justify-between px-5 pt-4 pb-2">
              <h2 className="text-dark-brown font-display font-extrabold text-xl">Choose date & time</h2>
              <button
                type="button"
                className="h-8 w-8 flex items-center justify-center rounded-full border border-dark-brown/10 text-dark-brown/70 hover:text-dark-brown hover:bg-white"
                onClick={() => setIsDateModalOpen(false)}
                aria-label="Close date and time picker"
              >
                ×
              </button>
            </div>

            <div className="px-5 pb-5 space-y-4">
              <p className="text-xs text-neutral-600">
                Select a date and time that works best for you. We&apos;ll do our best to accommodate your preference and confirm with you.
              </p>

              <div className="space-y-1.5">
                <label htmlFor="booking-date" className="block text-sm font-medium text-dark-brown">
                  Date
                </label>
                <input
                  id="booking-date"
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full rounded-lg border border-dark-brown/15 bg-white px-3 py-2 text-sm outline-none focus:border-dark-brown focus:ring-1 focus:ring-dark-brown"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-baseline justify-between gap-2">
                  <label htmlFor="booking-time" className="block text-sm font-medium text-dark-brown">
                    Preferred time
                  </label>
                  <span className="text-[11px] text-neutral-600">Opening hours: 9:00 AM – 5:00 PM</span>
                </div>
                <div
                  id="booking-time"
                  className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-56 overflow-y-auto no-scrollbar mt-1"
                >
                  {timeSlots.map((slot) => {
                    const active = bookingTime === slot.value;
                    return (
                      <button
                        key={slot.value}
                        type="button"
                        onClick={() => setBookingTime(slot.value)}
                        className={
                          (active
                            ? "bg-dark-brown text-white border-dark-brown "
                            : "bg-white text-dark-brown border-dark-brown/15 hover:bg-cream-beige ") +
                          "rounded-full px-3 py-1.5 text-xs sm:text-[13px] border text-center whitespace-nowrap"
                        }
                      >
                        {slot.label}
                      </button>
                    );
                  })}
                </div>
                <p className="text-[11px] text-neutral-600">
                  Exact start time may vary slightly based on availability. We&apos;ll confirm your final slot via WhatsApp.
                </p>
              </div>

              <div className="mt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  className="text-sm text-neutral-600 hover:text-dark-brown"
                  onClick={() => setIsDateModalOpen(false)}
                >
                  Back to services
                </button>
                <button
                  type="button"
                  disabled={!canConfirmSlot}
                  className={
                    "rounded-full px-5 py-2.5 text-sm font-display font-semibold text-white " +
                    (canConfirmSlot ? "bg-dark-brown hover:opacity-90" : "bg-neutral-300 cursor-not-allowed")
                  }
                  onClick={() => {
                    if (!canConfirmSlot) return;
                    setIsDateModalOpen(false);
                    const params = new URLSearchParams();
                    if (total > 0) params.set("total", String(total));
                    if (bookingDate) params.set("date", bookingDate);
                    if (bookingTime) params.set("time", bookingTime);
                    router.push(`/booking/payment?${params.toString()}`);
                  }}
                >
                  Continue to payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
