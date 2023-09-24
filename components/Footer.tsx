import Paragraph from "./Paragraph";

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__columns">
        <div className="footer__column-2">
          <Paragraph classname="footer__quote">Code is Poetry.</Paragraph>
        </div>
      </div>
    </footer>
  );
}
