import React from "react";
import Image from "next/image";

const LogoSection = () => {
  return (
    <div className="w-full max-w-[1440px] h-[120px] mx-auto bg-black flex justify-between items-center px-6">
      <Image
        alt="Versace"
        src="/Vector 0.svg"
        width={166.48}
        height={33.16}
        className="object-contain"
      />
      <Image
        alt="Zara"
        src="/Vector 1.svg"
        width={91}
        height={37.98}
        className="object-contain"
      />
      <Image
        alt="Gucci"
        src="/Vector 2.svg"
        width={156}
        height={32.29}
        className="object-contain"
      />
      <Image
        alt="Prada"
        src="/Vector 3.svg"
        width={194}
        height={32.2}
        className="object-contain"
      />
      <Image
        alt="Calvin Klein"
        src="/Vector 4.svg"
        width={206.79}
        height={33.35}
        className="object-contain"
      />
    </div>
  );
};

export default LogoSection;
