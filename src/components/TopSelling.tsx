import React from "react";
import Image from "next/image";

const TopSelling = () => {
  const topSellingItems = [
    {
      title: "VERTICAL STRIPED SHIRT",
      image: "/image 7 (1).svg",
      rating: "⭐⭐⭐⭐⭐ 5.0/5",
      originalPrice: "$232",
      discountPrice: "$212",
      discount: "20% OFF",
    },
    {
      title: "COURAGE GRAPHIC T-SHIRT",
      image: "/image 8 (1).svg",
      rating: "⭐⭐⭐⭐ 3.5/5",
      price: "$145",
    },
    {
      title: "LOOSE FIT BERMUDA SHORTS",
      image: "/image 9 (1).svg",
      rating: "⭐⭐⭐⭐⭐ 4.5/5",
      price: "$80",
    },
    {
      title: "LOOSE FIT BERMUDA SHORTS",
      image: "/image 10 (1).svg",
      rating: "⭐⭐⭐⭐⭐ 4.5/5",
      price: "$210",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto pt-10 bg-white">
      {/* Section Title */}
      <div className="text-center font-integral font-extrabold text-[48px] mb-8">
        TOP SELLING
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 font-Satoshi">
        {topSellingItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-[295px] h-[298px] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                alt={item.title}
                src={item.image}
                width={295}
                height={298}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center mt-4">
              <p className="font-semibold">{item.title}</p>
              <p className="text-yellow-500 text-sm">{item.rating}</p>
              <div className="text-black font-bold">
                {item.originalPrice && (
                  <span className="line-through text-gray-500">
                    {item.originalPrice}
                  </span>
                )}
                {item.discount && (
                  <span className="ml-2 text-red-500">{item.discount}</span>
                )}
                <p>{item.discountPrice || item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="w-[218px] h-[52px] border-2 border-black-200 px-8 py-2 bg-[#FFFFFF] text-black rounded-full hover:bg-gray-100">
          View All
        </button>
      </div>
    </div>
  );
};

export default TopSelling;
