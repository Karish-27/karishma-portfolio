import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex py-8">
          {/* logo */}
          <Link href="/">
            <Image
              src="/KLOGO.svg"
              alt="logo"
              width={52}
              height={14}
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
