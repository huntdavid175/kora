"use client";

import Image from "next/image";
import Link from "next/link";

function Icon({ name, className = "w-4 h-4" }: { name: string; className?: string }) {
  switch (name) {
    case "ig":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17" cy="7" r="1" fill="currentColor" />
        </svg>
      );
    case "fb":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M13 10h2.5l.5-3H13V5.5c0-.9.3-1.5 1.7-1.5H16V1.2c-.3 0-1.2-.2-2.3-.2-2.3 0-3.7 1.4-3.7 3.9V7H7v3h3v10h3V10Z" />
        </svg>
      );
    case "in":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.8 0 4.5 2.5 4.5 5.8V24h-4V14.8c0-2-.1-4.5-2.7-4.5-2.7 0-3.1 2.1-3.1 4.3V24h-4V8z" />
        </svg>
      );
    case "yt":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.2C19.2 3.5 12 3.5 12 3.5s-7.2 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.2C4.8 20.5 12 20.5 12 20.5s7.2 0 9.4-.5a3 3 0 0 0 2.1-2.2A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.8 15.3V8.7L15.8 12l-6 3.3Z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M18 1h4l-9 11 9 11h-4l-7-9-7 9H0l9-11L0 1h4l7 9 7-9z" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.4 2 2 0 0 1 4 2.1h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8.2 9.3a16 16 0 0 0 6 6l1-1.9a2 2 0 0 1 2-.9c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2.0z" />
        </svg>
      );
    case "waves":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
          <path d="M3 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
        </svg>
      );
    case "lotus":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 18c-3-1-5-3.5-5.5-6.5C9 12 11 13 12 15c1-2 3-3 5.5-3.5C17 14.5 15 17 12 18Z" />
          <path d="M12 15c-.5-2-2-4-4-5 2.5-.5 4-1.5 4-3.5 0 2 1.5 3 4 3.5-2 1-3.5 3-4 5Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 6c3 3 4.5 6 4.5 9 0 4.5-3 7-4.5 7s-4.5-2.5-4.5-7c0-3 1.5-6 4.5-9z" />
        </svg>
      );
  }
}

export default function ContactSection() {
  return (
    <section className="w-full bg-white">
    <div className="mx-auto md:max-w-5xl px-6 py-16 md:py-24">
      <div className="text-center">
        <h2 className="text-dark-brown font-extrabold text-3xl md:text-4xl font-display">
          Book your <span className="text-muted-green">Spa Moment</span>
        </h2>
      </div>

      <div className="mt-8 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
          {/* Left: Contact Card */}
          <div className="md:col-span-5 md:row-span-2 rounded-[20px] md:rounded-[28px] bg-[#f6f5f0] border border-dark-brown/10 image-shadow p-6 md:p-8 flex flex-col min-h-0">
          <div>
            <span className="inline rounded-full bg-white/90 border border-dark-brown/20 text-dark-brown/80 px-3 py-1 text-[10px] tracking-[0.18em] uppercase font-semibold">Contact</span></div>
            <h3 className="mt-4 text-dark-brown font-extrabold text-[26px] md:text-[32px] font-display">Get in Touch</h3>
            <p className="mt-2 text-neutral-700 text-base md:text-[18px] max-w-sm">
              Got questions or want to book an appointment? We'd love to hear from you!
            </p>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-[12px] bg-white border border-transparent text-dark-brown placeholder:text-neutral-500 px-4 py-3.5 text-sm md:text-base outline-none focus:ring-2 focus:ring-muted-green/40 focus:border-muted-green/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-[12px] bg-white border border-transparent text-dark-brown placeholder:text-neutral-500 px-4 py-3.5 text-sm md:text-base outline-none focus:ring-2 focus:ring-muted-green/40 focus:border-muted-green/50"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full rounded-[12px] bg-white border border-transparent text-dark-brown placeholder:text-neutral-500 px-4 py-3.5 text-sm md:text-base outline-none focus:ring-2 focus:ring-muted-green/40 focus:border-muted-green/50 resize-none"
              />
              <button type="button" className="rounded-full bg-dark-brown text-white px-5 py-2 text-[12px] md:text-[14px] font-display font-semibold shadow-sm">
                Submit
              </button>
            </form>
          </div>

          {/* Right: Image */}
          <div className="md:col-span-7 relative overflow-hidden rounded-[28px] md:rounded-[36px] image-shadow h-[360px] md:h-[520px]">
            <Image
              src="https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f8f87bb6eee9e443dc6aec_contact-image.webp"
              alt="Facial treatment"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority={false}
            />
          </div>
          {/* Social tiles aligned under the right column */}
          <div className="md:col-start-6 md:col-span-7">
            <div className="grid grid-cols-7 gap-4">
              <div className="col-span-7 rounded-[14px] bg-[#f6f5f0] border border-dark-brown/10 image-shadow px-5 py-4 flex items-center justify-between">
                <div className="text-dark-brown md:text-[15px] font-display font-extrabold">
                  Follow Us On <span className="text-muted-green">Socials</span>
                </div>
                <div className="flex items-center gap-2">
                  {["ig", "fb", "yt", "in", "x"].map((n) => (
                    <Link
                      key={n}
                      href="#"
                      className="inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-md bg-white/90 border border-dark-brown/20 text-dark-brown shadow-sm hover:opacity-80"
                      aria-label={n}
                    >
                      <Icon name={n} />
                    </Link>
                  ))}
                </div>
              </div>

              {/* <div className="col-span-1 rounded-[14px] bg-[#f6f5f0] border border-dark-brown/10 image-shadow" /> */}

              {/* <div className="col-span-1 rounded-[14px] bg-[#f6f5f0] border border-dark-brown/10 image-shadow flex items-center justify-center">
                <Icon name="lotus" className="w-5 h-5" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
