import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

export default function Home() {
  return (
    <>
      <Header />
      <section className="intro__section container">
        <div className="intro__name">
          <Heading classname="name" headingType="h1">
            Saurav Khare
          </Heading>
        </div>
        <div className="intro__deskcription">
          <Paragraph classname="description">
            Computer Engineer/Frontend Developer. Primary tools are Javascript,
            ReactJS, and the React ecosystem.
          </Paragraph>
          <Paragraph classname="description">
            Also a cinephile who enjoys watching and analyzing films. Have a
            keen interest in cinema and love exploring the creative aspects of
            storytelling and visual art.
          </Paragraph>
          <Paragraph classname="description">
            Here is my{" "}
            <a href="#" className="key-link">
              resume
            </a>{" "}
            if you want to read more .
          </Paragraph>
        </div>
      </section>

      <section className="now__section container">
        <div className="now__heading">
          <Heading headingType="h3" classname="now">
            Now
          </Heading>
        </div>
        <div className="now__description">
          <Paragraph classname="now__description-copy">
            Currently working as a System Engineer at{" "}
            <a href="https://www.infosys.com" className="key-link">
              Infosys
            </a>
            .
          </Paragraph>
        </div>
      </section>
      <section className="connect__section container">
        <div className="connect__heading">
          <Heading headingType="h3">Connect</Heading>
        </div>
        <div className="connect__description">
          <Paragraph classname="connect__description-copy">
            Hey, if you want to chat, have a project or just curious about
            something I&apos;m just a ping away.
          </Paragraph>
        </div>
        <div className="connect__social">
          <div className="connect__social-services">
            <Paragraph classname="connect__social-service">Email</Paragraph>
            <Paragraph classname="connect__social-service">Twitter</Paragraph>
            <Paragraph classname="connect__social-service">Github</Paragraph>
          </div>
          <div className="connect__social-values">
            <Paragraph classname="connect__social-value">
              <a href="#" className="blur" id="email">
                No bots please!
              </a>
            </Paragraph>
            <Paragraph classname="connect__social-value">
              <a href="https://twitter.com/ErahkSaurav">@ErahkSaurav</a>
            </Paragraph>
            <Paragraph classname="connect__social-value">
              <a href="https://github.com/SauravKhare">SauravKhare</a>
            </Paragraph>
          </div>
        </div>
      </section>
      <section className="separator container">
        <div className="separator__container">
          <div className="separator-dot"></div>
          <div className="separator-dot"></div>
          <div className="separator-dot"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}
