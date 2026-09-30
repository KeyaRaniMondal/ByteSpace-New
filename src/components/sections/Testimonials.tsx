import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section
      aria-label="Community testimonials"
      className="relative overflow-hidden bg-white"
    >
      {/* soft glows like reference */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-[-100px] h-72 w-[560px] rounded-full bg-[#E4FF4D]/50 blur-3xl" />
        <div className="absolute right-[-100px] top-[20%] h-80 w-80 rounded-full bg-[#E4FF4D]/40 blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-100px] h-72 w-72 rounded-full bg-[#0F38FF]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-tight text-slate-950 sm:text-[36px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-[13px] leading-relaxed text-slate-500">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl bg-white p-6 text-left shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <Image
                src={t.image}
                alt={t.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <figcaption className="mt-4 text-[15px] font-bold text-slate-950">
                {t.name}
              </figcaption>
              <p className="mt-0.5 text-[13px] font-medium text-blue-600">
                {t.role}
              </p>
              <blockquote className="mt-4 text-[13px] leading-relaxed text-slate-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
