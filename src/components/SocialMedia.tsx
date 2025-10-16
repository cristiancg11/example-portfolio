interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface SocialMediaProps {
  title: string;
  links: SocialLink[];
}

export default function SocialMedia({ title, links }: SocialMediaProps) {
  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-6 rounded-2xl bg-foreground dark:bg-gray-800 p-4 sm:p-5 lg:p-8 shadow-lg">
      <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-5 lg:mb-6">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 sm:p-4 bg-background dark:bg-gray-700 rounded-lg text-white hover:bg-opacity-80 transition-all duration-200 group"
          >
            <span className="text-xl sm:text-2xl lg:text-3xl">{link.icon}</span>
            <span className="text-sm sm:text-base font-medium group-hover:text-blue-400 transition-colors">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
