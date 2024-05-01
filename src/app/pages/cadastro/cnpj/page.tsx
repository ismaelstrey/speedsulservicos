"use client";
import Footer from "@/components/footer";
import CadastroCnpj from "@/components/formNew/cadastroCnpj";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
export default function PageSevice() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main>
        <Navbar />
        <CadastroCnpj />
        <Footer />
      </Main>
    </QueryClientProvider>
  );
}
