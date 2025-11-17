"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ParallaxImage({
  src,
  alt,
  speed = 0.2,
  className = "",
}: {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const el = containerRef.current;
      const img = imgRef.current;
      if (!el || !img) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 0;
      const containerCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportH / 2;
      const distance = containerCenter - viewportCenter;
      const translate = -distance * speed;
      img.style.transform = `translateY(${translate}px) scale(1.1)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`}>
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover will-change-transform"
        priority={false}
      />
    </div>
  );
}
