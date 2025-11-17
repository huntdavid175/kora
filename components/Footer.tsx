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
    case "yt":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.2C19.2 3.5 12 3.5 12 3.5s-7.2 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.2C4.8 20.5 12 20.5 12 20.5s7.2 0 9.4-.5a3 3 0 0 0 2.1-2.2A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.8 15.3V8.7L15.8 12l-6 3.3Z" />
        </svg>
      );
    case "in":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.8 0 4.5 2.5 4.5 5.8V24h-4V14.8c0-2-.1-4.5-2.7-4.5-2.7 0-3.1 2.1-3.1 4.3V24h-4V8z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M18 1h4l-9 11 9 11h-4l-7-9-7 9H0l9-11L0 1h4l7 9 7-9z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-dark-brown/10 mt-16 md:mt-24">
      <div className="mx-auto md:max-w-[1248px] 2xl:max-w-[1448px] px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 text-muted-green">
              <svg viewBox="0 0 64 64" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M32 14c6 6 9 12 9 18 0 9-6 14-9 14s-9-5-9-14c0-6 3-12 9-18z" />
                <path d="M16 30c4 1 8 4 9 8-8 0-13-2-15-5 1-2 3-3 6-3z" />
                <path d="M48 30c-4 1-8 4-9 8 8 0 13-2 15-5-1-2-3-3-6-3z" />
              </svg>
              <span className="font-extrabold text-dark-brown font-display">KORA SPA</span>
            </div>
            <p className="mt-3 text-neutral-700 text-sm md:text-base max-w-sm">
              Relax. Restore. Rejuvenate. Your sanctuary of serenity awaits.
            </p>
          </div>

          {/* Nav */}
          <nav className="md:col-span-4">
            <div className="grid grid-cols-2 gap-6">
              <ul className="space-y-2 text-dark-brown text-sm md:text-base">
                <li><Link href="/treatments" className="hover:opacity-80">Treatments</Link></li>
                <li><Link href="#" className="hover:opacity-80">About</Link></li>
                <li><Link href="#" className="hover:opacity-80">Team</Link></li>
              </ul>
              <ul className="space-y-2 text-dark-brown text-sm md:text-base">
                <li><Link href="#" className="hover:opacity-80">Pricing</Link></li>
                <li><Link href="#" className="hover:opacity-80">FAQ</Link></li>
                <li><Link href="#" className="hover:opacity-80">Contact</Link></li>
              </ul>
            </div>
          </nav>

          {/* Socials */}
          <div className="md:col-span-4">
            <div className="text-dark-brown font-extrabold font-display">Follow Us</div>
            <div className="mt-3 flex items-center gap-2">
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
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-600 text-sm">
          <div>© {year} Kora Spa. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:opacity-80">Privacy Policy</Link>
            <span className="inline-block h-1 w-1 rounded-full bg-neutral-400" />
            <Link href="#" className="hover:opacity-80">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
