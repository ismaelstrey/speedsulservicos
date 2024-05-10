"use client";
import { Empresa } from "@/@types/empresa";
import EmpresaTablelaDetalhes from "@/components/empresa/tabela/detalhes";
import { getApiCnpj } from "@/services/getCnpj";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TfiBackLeft } from "react-icons/tfi";

export default function Page({ params }: { params: { cnpj: string } }) {
  const id = params.cnpj;
  const [empresa, setEmpresa] = useState<Empresa>();

  useEffect(() => {
    getApiCnpj(id).then((res) => setEmpresa(res));
  });
  const router = useRouter();

  return (
    <div className="flex-1 mt-32">
      <button
        className="flex w-full justify-end"
        type="button"
        onClick={() => router.back()}
      >
        <TfiBackLeft size={30} className="mr-4" />
      </button>
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
