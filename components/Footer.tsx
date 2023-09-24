import Paragraph from "./Paragraph";

export default function Footer() {
  return (
    <footer className="max-w-2xl mx-8 md:mx-auto">
      <div className="flex justify-center pb-20">
        <div className="">
          <Paragraph classname="font-inter text-base font-normal text-gray-500">
            Code is Poetry.
          </Paragraph>
        </div>
      </div>
    </footer>
  );
}
