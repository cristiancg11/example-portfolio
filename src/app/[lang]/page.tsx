import { getDictionary } from "../i18n/dictionaries";
import { Lang, languages } from "../i18n/config";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import Avatar from "@/components/Avatar";
import Introduction from "@/components/Introduction";
import Interests from "@/components/Interests";
import ExperienceCard from "@/components/ExperienceCard";
import ToolsList from "@/components/ToolsList";
import Education from "@/components/Education";
import Languages from "@/components/Languages";
import SocialMedia from "@/components/SocialMedia";
import Contact from "@/components/Contact";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const designTools = [
    { name: "Ai", bgColor: "#360300", textColor: "#da9f4c" },
    { name: "Ps", bgColor: "#0b172a", textColor: "#74aaf2" },
    { name: "Id", bgColor: "#59051e", textColor: "#d84b6f" },
    { name: "Xd", bgColor: "#480d30", textColor: "#de6ff0" },
  ];

  const editingTools = [
    { name: "Ae", bgColor: "#000155", textColor: "#a0a0f9" },
    { name: "Pr", bgColor: "#02035e", textColor: "#9997f9" },
  ];

  const languages = ["🇧🇴", "🇬🇧", "🇺🇸"];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/sunilkumar", icon: "🐙" },
    { name: "LinkedIn", url: "https://linkedin.com/in/sunilkumar", icon: "💼" },
    { name: "Twitter", url: "https://twitter.com/sunilkumar", icon: "🐦" },
    { name: "Instagram", url: "https://instagram.com/sunilkumar", icon: "📷" },
  ];

  const contactInfo = [
    { type: "Email", value: "sunil@example.com", icon: "📧", link: "mailto:sunil@example.com" },
    { type: "Phone", value: "+1 (555) 123-4567", icon: "📱" },
    { type: "Location", value: "Delhi, India", icon: "📍" },
    { type: "Website", value: "www.sunilkumar.com", icon: "🌐", link: "https://www.sunilkumar.com" },
  ];

  return (
    <div className="font-sans min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <LanguageSwitcher currentLang={lang} />
      <ThemeToggle />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
        <Avatar />

        <Introduction intro={dict.intro} />

        <Interests 
          title={dict.sections.interests.title}
          items={dict.sections.interests.items}
        />

        <ExperienceCard experience={dict.sections.experience.freelance} />
        <ExperienceCard experience={dict.sections.experience.meetzed} />

        <ToolsList 
          title={dict.sections.designTools}
          tools={designTools}
        />

        <Education education={dict.sections.education} />

        <ToolsList 
          title={dict.sections.editingTools}
          tools={editingTools}
        />

        <Languages 
          title={dict.sections.languages}
          languages={languages}
        />

        <SocialMedia 
          title="Redes Sociales"
          links={socialLinks}
        />

        <Contact 
          title="Contacto"
          contacts={contactInfo}
        />
        </div>
      </main>
    </div>
  );
}