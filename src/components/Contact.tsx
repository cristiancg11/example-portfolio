interface ContactInfo {
  type: string;
  value: string;
  icon: string;
  link?: string;
}

interface ContactProps {
  title: string;
  contacts: ContactInfo[];
}

export default function Contact({ title, contacts }: ContactProps) {
  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-6 rounded-2xl bg-foreground dark:bg-gray-800 p-4 sm:p-5 lg:p-8 shadow-lg">
      <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-5 lg:mb-6">
        {title}
      </h3>
      <div className="space-y-3 sm:space-y-4">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 sm:p-4 bg-background dark:bg-gray-700 rounded-lg"
          >
            <span className="text-xl sm:text-2xl lg:text-3xl">{contact.icon}</span>
            <div className="flex-1">
              <p className="text-gray-400 text-xs sm:text-sm">{contact.type}</p>
              {contact.link ? (
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm sm:text-base font-medium hover:text-blue-400 transition-colors"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-white text-sm sm:text-base font-medium">
                  {contact.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
