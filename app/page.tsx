import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LastSeen from '@/components/LastSeen';
import Paragraph from '@/components/Paragraph';
import SectionContainer from '@/components/SectionContainer';
import Showcase from '@/components/Showcase';

export default function Home() {
  return (
    <div className="flex justify-between flex-col md:flex-row gap-10">
      <div className="md:sticky md:top-0 md:max-h-screen lg:w-1/2 md:flex-col md:pt-16">
        <Header />
      </div>
      <div className="md:w-1/2 pt-16">
        <SectionContainer title="Now">
          <Paragraph classname="font-inter font-normal text-primary-text">
            Currently working as a Senior Experience Engineer at{' '}
            <a
              href="https://www.publicissapient.com/"
              className="duration-500 hover:text-yellow-500 underline"
            >
              Publicis Sapient
            </a>
          </Paragraph>
        </SectionContainer>
        <SectionContainer title="Experience">
          <Experience />
        </SectionContainer>
        <SectionContainer title="Showcase">
          <Showcase />
        </SectionContainer>
        <SectionContainer title="Last Seen">
          <LastSeen user="sauravkhare" type="movies" limit={3} />
        </SectionContainer>
        <Footer />
      </div>
    </div>
  );
}
