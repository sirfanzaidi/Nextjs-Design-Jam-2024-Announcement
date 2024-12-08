import React from "react";
import Image from "next/image";

const BrowseByDress = () => {
  return (
    <div className="w-[1440px] h-[866px] bg-[#F0F0F0] py-16 px-6 flex flex-col items-center mx-auto">
      {/* Heading */}
      <h1 className="text-[48px] font-integral font-extrabold leading-tight text-center text-black mb-12">
        BROWSE BY DRESS STYLE
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[407px_684px] gap-4 max-w-[1440px] mx-auto">
        {/* First Row */}
        <div className="w-[407px] h-[289px] bg-white flex items-center justify-center rounded-lg shadow-md overflow-hidden">
          <Image
            alt="Casual"
            src="/image 11.svg"
            width={407}
            height={289}
            className="object-cover"
          />
        </div>
        <div className="w-[684px] h-[289px] bg-white flex items-center justify-center rounded-lg shadow-md overflow-hidden">
          <Image
            alt="Formal"
            src="/image 13.svg"
            width={684}
            height={289}
            className="object-cover"
          />
        </div>

        {/* Second Row */}
        <div className="w-[1111px] h-[289px] bg-white flex items-center justify-center rounded-lg shadow-md overflow-hidden col-span-2">
          <Image
            alt="Party"
            src="/pic-11.png"
            width={1111}
            height={289}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BrowseByDress;
