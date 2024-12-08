import React from "react";
import Image from "next/image";

const NewArrivals = () => {
  return (
    <div className="max-w-[1440px] mx-auto pt-10 bg-white">
      
      {/* Section Title */}
      <div className="text-center font-integral font-extrabold text-[48px] mb-8">
        NEW ARRIVALS
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 font-Satoshi">
        {/* Product 1 */}
        <div className="flex flex-col items-center">
          <div className="w-[295px] h-[298px] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              alt="T-shirt with Tape Details"
              src="/image 7.svg"
              width={295}
              height={298}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center mt-4">
            <p className="font-semibold">T-shirt with Tape Details</p>
            <p className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐ 4.5/5</p>
            <p className="text-black font-bold">$120</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col items-center">
          <div className="w-[295px] h-[298px] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              alt="Skinny Fit Jeans"
              src="/image 8.svg"
              width={295}
              height={298}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center mt-4">
            <p className="font-semibold">Skinny Fit Jeans</p>
            <p className="text-yellow-500 text-sm">⭐⭐⭐⭐ 3.5/5</p>
            <p className="text-black font-bold">
              <span className="line-through text-gray-500">$260</span>{" "}
              <span className="text-red-500">20% OFF</span> $240
            </p>
          </div>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col items-center">
          <div className="w-[295px] h-[298px] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              alt="Checkered Shirt"
              src="/image 9.svg"
              width={295}
              height={298}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center mt-4">
            <p className="font-semibold">Checkered Shirt</p>
            <p className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐ 4.5/5</p>
            <p className="text-black font-bold">$180</p>
          </div>
        </div>

        {/* Product 4 */}
        <div className="flex flex-col items-center">
          <div className="w-[295px] h-[298px] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              alt="Sleeve Striped T-shirt"
              src="/image 10.svg"
              width={295}
              height={298}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center mt-4">
            <p className="font-semibold">Sleeve Striped T-shirt</p>
            <p className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐ 4.5/5</p>
            <p className="text-black font-bold">
              <span className="line-through text-gray-500">$160</span>{" "}
              <span className="text-red-500">30% OFF</span> $130
            </p>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-2 border-2 border-black bg-white text-black rounded-full hover:bg-gray-100">
          View All
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
