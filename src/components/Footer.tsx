import React from "react";
import { TfiEmail } from "react-icons/tfi";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="w-[1440px] mx-auto mt-16">
        {/* Subscription Section */}
        <div className="w-[1240px] h-[180px] bg-black rounded-lg mx-auto flex items-center justify-between px-8 py-4">
          <h1 className="font-integral font-extrabold text-[40px] text-white">
            STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-slate-100 rounded-full px-6 py-2 w-[349px] h-[48px]">
              <TfiEmail className="text-black" />
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-slate-100 outline-none text-sm flex-1 px-2"
              />
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="w-[1240px] mt-8 mx-auto grid grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="col-span-2">
            <h1 className="font-integral font-extrabold text-[33.45px] mb-4">
              SHOP.CO
            </h1>
            <p className="text-[14px] mb-4">
              We have clothes that suit your style and <br />
              which you’re proud to wear. <br />
              From women to men.
            </p>
            <div className="flex gap-3">
              <Image alt="social" src="/1.svg" width={30} height={30} />
              <Image alt="social" src="/2b.svg" width={30} height={30} />
              <Image alt="social" src="/3.svg" width={30} height={30} />
              <Image alt="social" src="/4.svg" width={30} height={30} />
            </div>
          </div>

          {/* Links Sections */}
          {[
            {
              title: "COMPANY",
              links: ["About", "Features", "Works", "Career"],
            },
            {
              title: "HELP",
              links: [
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ],
            },
            {
              title: "FAQ",
              links: ["Account", "Manage Deliveries", "Orders", "Payments"],
            },
            {
              title: "RESOURCES",
              links: [
                "Free eBooks",
                "Development Tutorial",
                "How to - Blog",
                "Youtube Playlist",
              ],
            },
          ].map((section, index) => (
            <div key={index}>
              <h1 className="text-[16px] font-bold font-Satoshi mb-2">
                {section.title}
              </h1>
              {section.links.map((link, i) => (
                <p key={i} className="text-[14px] font-Satoshi mb-1">
                  {link}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <div className="w-[1240px] flex items-center justify-between mt-8 mx-auto">
          <p className="font-Satoshi text-[14px]">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex gap-4">
            <Image alt="badge" src="/Badge.svg" width={50} height={50} />
            <Image alt="badge" src="/Badge (1).svg" width={50} height={50} />
            <Image alt="badge" src="/Badge (2).svg" width={50} height={50} />
            <Image alt="badge" src="/Badge (3).svg" width={50} height={50} />
            <Image alt="badge" src="/Badge (4).svg" width={50} height={50} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
