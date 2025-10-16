interface ExperienceItem {
  title: string;
  role: string;
  period: string;
  bullets: string[];
}

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="col-span-1 sm:col-span-2 lg:col-span-6 rounded-2xl bg-foreground dark:bg-gray-800 p-4 sm:p-5 lg:p-8 shadow-lg">
      <section className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-600 pb-4 sm:pb-5 lg:pb-6 gap-3 sm:gap-4">
        <header className="flex flex-col">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
            {experience.title}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            {experience.role}
          </p>
        </header>
        <span className="bg-background dark:bg-gray-700 rounded-lg text-white text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2 self-start sm:self-auto">
          {experience.period}
        </span>
      </section>
      <ul className="list-disc list-inside text-white text-sm sm:text-base mt-4 sm:mt-5 space-y-2">
        {experience.bullets.map((bullet) => (
          <li key={bullet} className="leading-relaxed">{bullet}</li>
        ))}
      </ul>
    </article>
  );
}
