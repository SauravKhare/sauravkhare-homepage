import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import TimeMachine from './TimeMachine';
import { getArchives } from '@/fetchers/globals';

export default async function HeaderTopNavigation() {
  const archives = await getArchives();

  return (
    <header className="flex justify-between items-center bg-dark-primary text-light-primary px-16 py-6 border-b border-white/10 ">
      <div className="font-fraunces text-2xl font-bold"><Link href="/">Saurav Khare</Link></div>
      <div>
        <ul className="flex font-jakarta uppercase justify-between gap-10 font-semibold">
          <li><Link href="/" className="hover:text-teal-primary hover:border-b-2 hover:border-teal-primary transition-all duration-100 ease-out">Home</Link></li>
          <li><Link href="/" className="hover:text-teal-primary hover:border-b-2 hover:border-teal-primary transition-all duration-100 ease-out">Blog</Link></li>
          <li><Link href="#experience" className="hover:text-teal-primary hover:border-b-2 hover:border-teal-primary transition-all duration-100 ease-out">Experience</Link></li>
          <li><Link href="#projects" className="hover:text-teal-primary hover:border-b-2 hover:border-teal-primary transition-all duration-100 ease-out">Projects</Link></li>
        </ul>
      </div>
      <div>
        <ul className="flex font-jakarta uppercase justify-between gap-9">
          <li><ThemeToggle /></li>
          <li className="text-dark-primary"><TimeMachine records={archives} /></li>
        </ul>
      </div>
    </header>
  );
}