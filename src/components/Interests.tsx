interface InterestsProps {
  title: string;
  items: string[];
}

export default function Interests({ title, items }: InterestsProps) {
  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-9 rounded-2xl bg-foreground dark:bg-gray-800 shadow-lg p-4 sm:p-5 lg:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <h3 className="text-white text-base sm:text-lg font-bold border-b sm:border-b-0 sm:border-r border-gray-600 pb-2 sm:pb-0 sm:pr-4 whitespace-nowrap">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="inline-flex items-center bg-background dark:bg-gray-700 rounded-lg text-white text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
