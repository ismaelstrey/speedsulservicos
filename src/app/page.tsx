"use client";
import Categories from "@/components/categories";
import CountServices from "@/components/countServices";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ListServices from "@/components/listServices";
import Loading from "@/components/loading";
import Navbar from "@/components/navbar";
import {
  getAllUserServices,
  getTotalServices,
} from "@/services/apiUserServices";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Home() {
  const [contServices, setCountServices] = useState<number>(0);

  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getAllUserServices,
  });

  useEffect(() => {
    getTotalServices().then((res) => setCountServices(res));
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <CountServices services={contServices} />
      {isLoading && <Loading valor={5} />}
      {data && <ListServices services={data} />}
      <Categories />
      {/* <ListServices /> */}
      <Footer />
    </>
  );
}
