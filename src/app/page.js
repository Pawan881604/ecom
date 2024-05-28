import Cards from "@/components/ui/Cards";
import Feeds from "@/components/ui/Feeds";
import HeroSlider from "@/components/home/HeroSlider";
import Page_nav from "@/components/home/Page_nav";
import { Card_2 } from "@/components/ui/Card_2";
export default function Home() {
  return (
    <main>
      <Page_nav />
      <Feeds />
      <HeroSlider />

      <div className="grid gap-4 grid-cols-4 container lg:mx-auto pt-3 pb-7">
        <div className="flex-1">
          <Card_2 />
        </div>
        <div className="flex-1">
          <Card_2 />
        </div>
        <div className="flex-1">
          <Card_2 />
        </div>
        <div className="flex-1">
          <Card_2 />
        </div>
      </div>
     
      <div className="grid gap-4 grid-cols-4 grid-rows-4 container lg:mx-auto pt-3 pb-7">
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>

        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
        <div className="flex-1">
          <Cards />
        </div>
      </div>
    </main>
  );
}
