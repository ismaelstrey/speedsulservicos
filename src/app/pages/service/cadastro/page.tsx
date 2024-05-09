import CardastroService from "@/components/formNew/cadastroService";
import Main from "@/components/main";
import Navbar from "@/components/navbar";

export default function PageSevice() {
  return (
    <Main>
      <Navbar />
      {/* <Hero /> */}
      <div className="flex justify-center h-full flex-1 mt-20">
        <CardastroService />
      </div>
      {/* <Footer /> */}
    </Main>
  );
}
