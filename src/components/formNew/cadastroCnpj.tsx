"use client";
import React, { useEffect, useState } from "react";
import { IconSearch } from "../@ui/icons";
import { formatCNPJ } from "@/utils/funcoes";
import { Empresa } from "@/@types/empresa";
import { getApiCnpj, getApiCnpjAll } from "@/services/getCnpj";
import EmpresaTablela from "../empresa/tabela";

export default function CadastroCnpj() {
  const [cnpj, setCnpj] = useState<string>();
  const [empresa, setEmpresa] = useState<Empresa[]>([]);
  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (cnpjValido) {
      getApiCnpj(cnpjValido).then((resp) => setEmpresa([resp]));
    }
  }

  useEffect(() => {
    getApiCnpjAll().then((res) => setEmpresa(res));
  }, []);
  const cnpjValido = cnpj && formatCNPJ(cnpj);
  console.log(empresa);

  return (
    <div className="flex flex-col gap-3 items-center justify-center flex-1 w-ful mt-20">
      <h5>Cadastro CNPJ: {cnpj}</h5>
      <form onSubmit={(e) => handleSubmitForm(e)}>
        <label className="input min-w-52 input-bordered flex items-center">
          <input
            type="text"
            id="cnpj"
            className="grow"
            placeholder="Digite o CNPJ"
            onChange={(e) => setCnpj(e.target.value)}
          />
          {cnpjValido && (
            <button onSubmit={() => {}}>
              <IconSearch />
            </button>
          )}
        </label>
      </form>
      {empresa && <EmpresaTablela empresa={empresa} />}
    </div>
  );
}
