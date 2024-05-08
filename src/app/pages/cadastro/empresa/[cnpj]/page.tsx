"use client";
import { Empresa } from "@/@types/empresa";
import EmpresaTablelaDetalhes from "@/components/empresa/tabela/detalhes";
import { getApiCnpj } from "@/services/getCnpj";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TfiBackLeft } from "react-icons/tfi";

export default function Page({ params }: { params: { cnpj: string } }) {
  const [empresa, setEmpresa] = useState<Empresa>();

  useEffect(() => {
    getApiCnpj(params.cnpj).then((res) => setEmpresa(res));
  }, []);



  return (
    <div className="flex-1 mt-32">
      <Link className="flex w-full justify-end" href={`/pages/cadastro/cnpj`}><TfiBackLeft size={30} className="mr-4" /></Link>

      {empresa ? (
        <EmpresaTablelaDetalhes empresa={empresa} />
      ) : (
        <div className="flex flex-col gap-4 w-full">
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      )}
    </div>
  );
}
