import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import TimeMachine from './TimeMachine';
import { getArchives } from '@/fetchers/globals';
import { MobileSideNav } from "./MobileSideNav";

export default async function HeaderTopNavigation() {
  const archives = await getArchives();

  return (
    <header className="bg-dark-primary text-light-primary border-b border-light-primary/10">
      <div className="px-6 md:px-16 py-6 md:max-w-7xl md:mx-auto flex justify-between items-center">
        <div className="font-fraunces text-2xl font-bold uppercase"><Link href="/">Saurav Khare</Link></div>
        <div className="hidden lg:block">
          <ul className="flex font-jakarta uppercase justify-between gap-10 font-semibold">
            <li><Link href="/" className="hover:text-teal-primary hover:border-b-2 hover:border-teal-primary transition-all duration-100 ease-out">Home</Link></li>
            <li><Link href="/" className="hover:text-teal-primary hover:border-b-2 hover:border-teal-primary transition-all duration-100 ease-out">Blog</Link></li>
            <li><Link href="#experience" className="hover:text-teal-primary hover:border-b-2 hover:border-teal-primary transition-all duration-100 ease-out">Experience</Link></li>
            <li><Link href="#projects" className="hover:text-teal-primary hover:border-b-2 hover:border-teal-primary transition-all duration-100 ease-out">Projects</Link></li>
          </ul>
        </div>
        <div>
          <ul className="flex font-jakarta uppercase justify-between gap-5 md:gap-9 items-center">
            <li className="lg:hidden"><MobileSideNav /></li>
            <li><ThemeToggle /></li>
            <li className="text-dark-primary"><TimeMachine records={archives} /></li>
          </ul>
        </div>
      </div>
    </header>
  );
}