import React from "react";
import Image from "next/image";

const OurHappyCustomer = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      feedback:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      image: "/Correct.svg",
    },
    {
      name: "Alex K.",
      feedback:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      image: "/Correct.svg",
    },
    {
      name: "James L.",
      feedback:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      image: "/Correct.svg",
    },
  ];

  return (
    <div className="max-w-[1240px] mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full h-[240px] border-2 border-black rounded-lg p-6"
          >
            <p className="text-yellow-500 text-sm mb-2">⭐⭐⭐⭐⭐</p>
            <div className="flex items-center gap-2 mb-4">
              <h1 className="text-lg font-bold font-Satoshi">{testimonial.name}</h1>
              <Image
                alt="Verified Badge"
                src={testimonial.image}
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <p className="text-sm font-Satoshi leading-relaxed">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurHappyCustomer;
