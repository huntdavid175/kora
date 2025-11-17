export default function AngledBackdrop({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={
        "absolute inset-0 translate-y-0 -z-10 rotate-[8deg] bg-[#EAE4D7] rounded-[28px] md:rounded-[32px] pointer-events-none " +
        className
      }
    />
  );
}
