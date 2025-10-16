import Image from "next/image";

export default function Avatar() {
  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-2 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
      <div className="aspect-square w-full h-48 sm:h-64 lg:h-80">
        <Image 
          src="/avatar.jpg" 
          alt="avatar" 
          width={300} 
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
