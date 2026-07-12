import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ResumeButton from "./ResumeButton";
import { Siteglobal } from '@/payload-types';
import SubHeading from './SubHeading';
import Link from 'next/link';

interface HeaderSectionProps {
  data: Siteglobal["header"];
}

export default function Hero({ data }: HeaderSectionProps) {
  const header = data?.[0];
  return (
    <section className="bg-dark-primary text-light-primary px-6 md:px-16 py-24 md:py-52 md:max-w-360 md:mx-auto">
      <h1 className="text-5xl md:text-8xl font-fraunces font-variation-settings-['opsz'_96]">Saurav Khare</h1>
      <SubHeading data={header?.subHeading} />
      <p className="font-jakarta text-[18px] text-light-primary max-w-2xl mt-5 leading-7">Senior Experience Engineer specializing in React, Next.js and TypeScript. I enjoy turning complex product requirements into clean frontend systems that scale.</p>
      <div className="mt-12">
        <ResumeButton />
      </div>
      <Link href="#phy" className="block text-light-primary font-jakarta mt-36 text-sm">SCROLL TO EXPLORE <span><ArrowDownwardIcon className="text-teal-primary text-xs" /></span></Link>
    </section>
  );
}