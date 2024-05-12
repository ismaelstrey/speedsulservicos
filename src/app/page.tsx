"use client";
import Categories from "@/components/categories";
import CountServices from "@/components/countServices";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ListServices from "@/components/listServices";
import Loading from "@/components/loading";
import Navbar from "@/components/navbar";
import { getAllUserServices } from "@/services/apiUserServices";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getAllUserServices,
  });

  return (
    <>
      <Navbar />
      <Hero />
      {data && <CountServices services={data?.length} />}
      {isLoading && <Loading valor={5} />}
      {data && !isLoading && <ListServices services={data} />}
      <Categories />
      {/* <ListServices /> */}
      <Footer />
    </>
  );
}
