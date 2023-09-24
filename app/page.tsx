import Header from '@/components/Header'
import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'

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
          <h3 className="connect">Connect</h3>
        </div>
        <div className="connect__description">
          <p className="connect__description-copy">
            Hey, if you want to chat, have a project or just curious about
            something I'm just a ping away.
          </p>
        </div>
        <div className="connect__social">
          <div className="connect__social-services">
            <p className="connect__social-service">Email</p>
            <p className="connect__social-service">Twitter</p>
            <p className="connect__social-service">Github</p>
          </div>
          <div className="connect__social-values">
            <p className="connect__social-value">
              <a href="#" className="blur" id="email">
                No bots please!
              </a>
            </p>
            <p className="connect__social-value">
              <a href="https://twitter.com/ErahkSaurav">@ErahkSaurav</a>
            </p>
            <p className="connect__social-value">
              <a href="https://github.com/SauravKhare">SauravKhare</a>
            </p>
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
      <footer className="footer container">
        <div className="footer__columns">
          <div className="footer__column-1">
            <p className="footer_BTC">
              1 BTC is <span id="local-currency"></span>
            </p>
          </div>
          <div className="footer__column-2">
            <p className="footer__quote">Code is Poetry.</p>
          </div>
          <div className="footer__column-3">
            <p className="footer__quote"></p>
          </div>
        </div>
      </footer>
    </>
  )
}
