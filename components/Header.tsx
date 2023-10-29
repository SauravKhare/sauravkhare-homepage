import Link from "next/link";

const Header = (): React.ReactElement => {
  return (
    <>
      <header className="max-w-2xl mx-8 md:mx-auto py-12">
        <div className="flex justify-between items-center">
          <div className="">
            <Link href="/" className="text-white">
              S—K
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
