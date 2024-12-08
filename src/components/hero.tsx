import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative max-w-[1440px] h-[663px] mx-auto bg-[#F2F0F1] flex items-center pl-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          alt="hero"
          src="/Hero.png"
          layout="fill"
          objectFit="cover"
          objectPosition="right"
          className="z-0"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center h-full pl-12 max-w-[600px]">
        <h1 className="text-[64px] font-integral font-extrabold leading-tight text-left text-black">
          FIND CLOTHES
          <br />
          THAT MATCHES
          <br />
          YOUR STYLE
        </h1>
        <p className="mt-4 font-satoshi text-[16px] leading-relaxed text-left text-black">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="mt-6 w-[210px] h-[50px] bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
