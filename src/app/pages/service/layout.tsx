import Footer from "@/components/footer";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Main>
      <Navbar />
      <div className="mt-20 flex h-full flex-1">{children}</div>
      <Footer />
    </Main>
  );
}
