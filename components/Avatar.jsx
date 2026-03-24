import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex w-full h-full xl:max-w-none pointer-events-none select-none">
      <Image
        src="/KarishAVATAR.svg"
        alt="avatar"
        width={737}
        height={678}
        className="translate-z-0 w-full h-full object-contain object-bottom"
      />
    </div>
  );
};

export default Avatar;
