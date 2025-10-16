interface IntroductionProps {
  intro: string;
}

export default function Introduction({ intro }: IntroductionProps) {
  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-9 rounded-2xl bg-foreground dark:bg-gray-800 shadow-lg p-4 sm:p-5 lg:p-6">
      <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
        {intro}
      </p>
    </div>
  );
}
