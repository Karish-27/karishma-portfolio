import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center xl:h-[90px]">
      <div className="w-full">
        <div className="flex py-8 pl-6">
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
