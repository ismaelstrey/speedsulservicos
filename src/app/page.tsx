"use client";
import Categories from "@/components/categories";
import CountServices from "@/components/countServices";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ListServices from "@/components/listServices";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import { getTotalServices } from "@/services/apiUserServices";
import { useEffect, useState } from "react";

export default function Home() {
  const [contServices, setCountServices] = useState<number>(0)

  useEffect(() => {
    getTotalServices().then(res => setCountServices(res))

  }, [])
  return (
    <Main>
      <Navbar />
      <Hero />
      <CountServices services={contServices} />
      <ListServices />
      <Categories />
      <ListServices />
      <Footer />
    </Main>
  );
}
