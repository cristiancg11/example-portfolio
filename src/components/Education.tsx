interface EducationItem {
  title: string;
  field: string;
  location: string;
  period: string;
}

interface EducationProps {
  education: {
    highSchool: EducationItem;
    diploma: EducationItem;
    graduation: EducationItem;
  };
}

export default function Education({ education }: EducationProps) {
  const educationItems = [
    education.highSchool,
    education.diploma,
    education.graduation,
  ];

  return (
    <section className="col-span-1 sm:col-span-2 lg:col-span-6 lg:row-span-3 rounded-2xl bg-foreground dark:bg-gray-800 p-4 sm:p-5 lg:p-8 shadow-lg">
      <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
        {educationItems.map((item, index) => (
          <article
            key={item.title}
            className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 ${
              index < educationItems.length - 1 ? 'border-b border-gray-600 pb-4 sm:pb-5 lg:pb-6' : ''
            }`}
          >
            <div className="flex flex-col">
              <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-bold">
                {item.title}
              </h2>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
                {item.field}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                {item.location}
              </p>
            </div>
            <span className="bg-background dark:bg-gray-700 rounded-lg text-white text-xs sm:text-sm px-3 py-2 self-start sm:self-auto">
              {item.period}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
