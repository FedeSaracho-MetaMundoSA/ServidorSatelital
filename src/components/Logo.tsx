import { SVGProps } from "react";

export function CustomLogo(props: { className?: string }) {
  return (
    <div className={`flex items-center ${props.className || ''}`}>
      {/* High-fidelity wide brand logo with custom brand glowing accents */}
      <div className="relative shrink-0 w-full">
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#FF5665] via-[#E11D48] to-[#0B1330] opacity-45 blur-[3px] animate-pulse" />
        <img
          src="/servidor_logo.jpeg"
          alt="Servidor Satelital"
          className="relative h-11 sm:h-14 w-auto max-w-full rounded-xl border border-white/10 bg-white object-contain px-2.5 py-1.5 shadow-[0_0_16px_rgba(255,86,101,0.25)] transition-transform hover:scale-102 duration-300 pointer-events-none"
        />
      </div>
    </div>
  );
}


