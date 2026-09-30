import Image from "next/image";

type Props = {
  title: string;
  author: string;
  rating: string;
  level: string;
  price: string;
  image: string;
};

export default function CourseCard({
  title,
  author,
  rating,
  level,
  price,
  image,
}: Props) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-3 transition hover:shadow-lg">
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          width={400}
          height={225}
          className="aspect-[16/10] w-full object-cover"
        />
      </div>

      <div className="px-1.5 pb-1.5 pt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate text-[15px] font-bold text-slate-950">
            {title}
          </h3>
          <span className="flex shrink-0 items-center gap-1 text-[13px] font-medium text-slate-500">
            {rating}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="#CBD5E1"
              aria-hidden
            >
              <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9 2.9-6z" />
            </svg>
          </span>
        </div>
        <p className="mt-0.5 text-[11px] text-slate-500">
          by <span className="text-blue-600">{author}</span>
        </p>

        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-[#F3F4F6] px-3 py-1.5 text-[11px] font-medium text-slate-600">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M5 20v-6M11 20V10M17 20v-9M23 20V4" />
            </svg>
            {level}
          </span>
          <Image
            src="/images/feature/Horizontal Card.png"
            alt="Enrolled students"
            width={120}
            height={28}
            className="h-7 w-auto"
          />
        </div>

        <p className="mt-3 text-[15px] font-extrabold text-blue-600">
          {price}
          <span className="text-[11px] font-normal text-slate-400">
            /lifetime
          </span>
        </p>
      </div>
    </article>
  );
}
