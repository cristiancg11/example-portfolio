interface LanguagesProps {
  title: string;
  languages: string[];
}

export default function Languages({ title, languages }: LanguagesProps) {
  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-6 rounded-2xl bg-foreground dark:bg-gray-800 p-4 sm:p-5 lg:p-8 shadow-lg">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
        <h3 className="text-white text-base sm:text-lg lg:text-xl font-bold border-b sm:border-b-0 sm:border-r border-gray-600 pb-2 sm:pb-0 sm:pr-4 whitespace-nowrap">
          {title}
        </h3>
        <div className="flex gap-3 sm:gap-4">
          {languages.map((flag, index) => (
            <span key={index} className="text-2xl sm:text-3xl lg:text-4xl">
              {flag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
