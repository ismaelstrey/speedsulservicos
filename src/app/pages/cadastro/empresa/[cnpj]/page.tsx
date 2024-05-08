"use client";
import { Empresa } from "@/@types/empresa";
import EmpresaTablelaDetalhes from "@/components/empresa/tabela/detalhes";
import { getApiCnpj } from "@/services/getCnpj";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { cnpj: string } }) {
  const [empresa, setEmpresa] = useState<Empresa>();

  useEffect(() => {
    getApiCnpj(params.cnpj).then((res) => setEmpresa(res));
  }, []);

  console.log(empresa);

  return (
    <div className="flex-1 mt-20">
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
