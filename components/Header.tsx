"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { header } from "framer-motion/client";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative border-b border-neutral-200 bg-[#faf6ee]">
      <div className="mx-auto md:max-w-[1248px] 2xl:max-w-[1448px] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-muted-green">
            <svg
              viewBox="0 0 64 64"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M32 14c6 6 9 12 9 18 0 9-6 14-9 14s-9-5-9-14c0-6 3-12 9-18z" />
              <path d="M16 30c4 1 8 4 9 8-8 0-13-2-15-5 1-2 3-3 6-3z" />
              <path d="M48 30c-4 1-8 4-9 8 8 0 13-2 15-5-1-2-3-3-6-3z" />
            </svg>
            <Link href="/" className="font-semibold">
              KORA SPA
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/booking"
              className="rounded-full bg-black text-white px-5 py-2 text-sm lg:text-[14px] font-extrabold font-display inline-block transition-transform duration-200 hover:bg-white hover:text-dark-brown hover:border hover:border-dark-brown hover:-rotate-6"
            >
              Book Now
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex items-center gap-2 text-dark-brown focus:outline-none"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <span className="relative block h-4 w-5">
                {isOpen ? (
                  <>
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rotate-45 bg-dark-brown rounded" />
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 -rotate-45 bg-dark-brown rounded" />
                  </>
                ) : (
                  <>
                    <span className="absolute inset-x-0 top-0 h-0.5 bg-dark-brown rounded" />
                    <span className="absolute inset-x-0 top-1.5 h-0.5 bg-dark-brown rounded" />
                    <span className="absolute inset-x-0 top-3 h-0.5 bg-dark-brown rounded" />
                  </>
                )}
              </span>
              <span className="font-extrabold tracking-wide lg:text-[35px] text-[25px] font-display">
                MENU
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 32 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full border-b border-neutral-200 bg-[#ccb697] z-20"
            >
              <div className="mx-auto md:max-w-[1248px] 2xl:max-w-[1448px] px-6 py-10 md:py-12 flex flex-col md:flex-row gap-10 md:gap-16 items-start justify-between">
                <nav className="space-y-3 text-2xl md:text-3xl font-display text-dark-brown">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="block hover:translate-x-1 transition-transform"
                  >
                    Home
                  </Link>
                  <Link
                    href="/treatments"
                    onClick={() => setIsOpen(false)}
                    className="block hover:translate-x-1 transition-transform"
                  >
                    Treatments
                  </Link>
                  <Link
                    href="/booking"
                    onClick={() => setIsOpen(false)}
                    className="block hover:translate-x-1 transition-transform"
                  >
                    Booking
                  </Link>
                </nav>

                <div className="w-full md:w-auto flex-1 flex flex-col items-start md:items-end justify-between gap-6 text-sm md:text-base text-dark-brown">
                  <div className="hidden md:block h-px w-full md:w-72 bg-dark-brown/20" />
                  <div className="text-right w-full md:w-auto">
                    <div className="font-semibold tracking-wide">+233 (0) 000 000</div>
                    <div className="mt-1 font-semibold">hello@koraspa.com</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </header>   
  );
}
