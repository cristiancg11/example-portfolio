interface ToolsListProps {
  title: string;
  tools: Array<{
    name: string;
    bgColor: string;
    textColor: string;
  }>;
}

export default function ToolsList({ title, tools }: ToolsListProps) {
  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-6 rounded-2xl bg-foreground dark:bg-gray-800 p-4 sm:p-5 lg:p-8 shadow-lg">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
        <h3 className="text-white text-base sm:text-lg lg:text-xl font-bold border-b sm:border-b-0 sm:border-r border-gray-600 pb-2 sm:pb-0 sm:pr-4 whitespace-nowrap">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool.name}
              className="inline-flex items-center rounded-lg font-bold text-sm sm:text-base lg:text-lg px-3 py-1.5 sm:px-4 sm:py-2"
              style={{
                backgroundColor: tool.bgColor,
                color: tool.textColor,
              }}
            >
              {tool.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
