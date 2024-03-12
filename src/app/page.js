import Banner from "@/Components/Banner";
import Category from "@/Components/Category";
import Navbar from "@/Components/Navbar";
import Packs from "@/Components/Packs";
import Tabs from "@/Components/Tabs";
import Top from "@/Components/Top";

export default function Home() {
  return (
    <main className="">
      <Top/>
      <Navbar/>
      <Banner/>
      <Category/>
      <Tabs/>
      <Packs/>
    </main>
  );
}
