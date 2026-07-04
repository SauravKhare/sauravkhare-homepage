import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ResumeButton from "./ResumeButton";
import { Siteglobal } from '@/payload-types';
import SubHeading from './SubHeading';

interface HeaderSectionProps {
  data: Siteglobal["header"];
}

export default function Hero({ data }: HeaderSectionProps) {
  const header = data?.[0];
  return (
    <section className="bg-dark-primary text-light-primary px-16 py-52">
      <h1 className="text-8xl font-fraunces">Saurav Khare</h1>
      {/* <p className="text-8xl font-fraunces italic text-teal-primary mb-8">Crafting Digital Elegance.</p> */}
      <SubHeading data={header?.subHeading} />
      <p className="font-jakarta text-[18px] text-light-primary max-w-2xl mt-5">Senior Experience Engineer specializing in React, Next.js and TypeScript. I enjoy turning complex product requirements into clean frontend systems that scale.</p>
      <div className="mt-12">
        <ResumeButton />
      </div>
      <p className="text-light-primary font-jakarta mt-36 text-sm">SCROLL TO EXPLORE <span><ArrowDownwardIcon className="text-teal-primary text-xs" /></span></p>
    </section>
  );
}