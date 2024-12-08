import BrowseByDress from "@/components/BrowseByDress";
import Hero from "@/components/hero";
import LogoSection from "@/components/LogoSection";
import NewArrivals from "@/components/NewArrivals";
import OurHappyCustomer from "@/components/OurHappyCustomer";
import TopSelling from "@/components/TopSelling";


export default function Home() {
  return (
<main>
  <Hero/>
  <LogoSection/>
  <NewArrivals/>
  <TopSelling/>
  <BrowseByDress/>
  <OurHappyCustomer/>
</main>
  );
}
