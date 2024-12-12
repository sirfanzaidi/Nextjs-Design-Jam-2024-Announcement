import React from "react";
import CategoriesSection from "@/app/components/shop-page/filters/CategoriesSection";
import ColorsSection from "@/app/components/shop-page/filters/ColorsSection";
import DressStyleSection from "@/app/components/shop-page/filters/DressStyleSection";
import PriceSection from "@/app/components/shop-page/filters/PriceSection";
import SizeSection from "@/app/components/shop-page/filters/SizeSection";
import { Button } from "@/app/components/ui/button";

const Filters = () => {
  return (
    <>
      <hr className="border-t-black/10" />
      <CategoriesSection />
      <hr className="border-t-black/10" />
      <PriceSection />
      <hr className="border-t-black/10" />
      <ColorsSection />
      <hr className="border-t-black/10" />
      <SizeSection />
      <hr className="border-t-black/10" />
      <DressStyleSection />
      <Button
        type="button"
        className="bg-black w-full rounded-full text-sm font-medium py-4 h-12"
      >
        Apply Filter
      </Button>
    </>
  );
};

export default Filters;