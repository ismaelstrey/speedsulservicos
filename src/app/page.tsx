
import CountServices from "./components/countServices";
import Footer from "./components/footer";
import Hero from "./components/hero";
import ListServices from "./components/listServices";
import Navbar from "./components/navbar";
import RoadMap from "./components/roadmap";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <CountServices />
      <ListServices />
      {/* <RoadMap /> */}
      <Footer />

    </main>
  );
}
