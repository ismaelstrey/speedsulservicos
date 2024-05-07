export default function Page({ params }: { params: { cnpj: string } }) {
  return <div className="flex-1 mt-20">Meu CNPJ: {params.cnpj}</div>;
}
