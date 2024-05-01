import Footer from "@/components/footer";
import CadastroCnpj from "@/components/formNew/cadastroCnpj";
import Main from "@/components/main";
import Navbar from "@/components/navbar";

export default function PageSevice() {
  return (
    <Main>
      <Navbar />
      <CadastroCnpj />
      <Footer />
    </Main>
  );
}
