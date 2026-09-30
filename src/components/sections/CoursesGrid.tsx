import CourseCard from "@/components/ui/CourseCard";
import { FEATURED_COURSES } from "@/lib/constants";

export default function CoursesGrid() {
  return (
    <section aria-label="Featured courses" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 pb-16 md:pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_COURSES.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
