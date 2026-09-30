import Image from "next/image";
import { PARTNERS } from "@/lib/constants";

export default function LogoStrip() {
  return (
    <section aria-label="Trusted by leading companies" className="bg-[#EEF2FF]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-6 py-8 sm:justify-between md:py-9">
        {PARTNERS.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center gap-2 opacity-70 transition hover:opacity-100"
          >
            <Image
              src={partner.icon}
              alt={`${partner.name} logo`}
              width={28}
              height={28}
              className="h-7 w-7 object-contain grayscale"
            />
            <span className="text-[19px] font-bold tracking-tight text-slate-500">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
