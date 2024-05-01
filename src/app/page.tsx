"use client";
import Categories from "@/components/categories";
import CountServices from "@/components/countServices";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ListServices from "@/components/listServices";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main>
        <Navbar />
        <Hero />
        <CountServices />
        <ListServices />
        <Categories />
        <ListServices />
        <Footer />
      </Main>
    </QueryClientProvider>
  );
}
