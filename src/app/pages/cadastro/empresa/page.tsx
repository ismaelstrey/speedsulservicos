"use client";
import { Empresa } from "@/@types/empresa";
import EmpresaTablela from "@/components/empresa/tabela";
import { getApiCnpjAll } from "@/services/getCnpj";
import { useEffect, useState } from "react";

export default function MinhaEmpresa() {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  useEffect(() => {
    getApiCnpjAll().then((res) => setEmpresas(res));
  }, []);
  return (
    <div className="flex-1 mt-20">
      {empresas && <EmpresaTablela empresa={empresas} />}
    </div>
  );
}
