import React, { useState } from "react";
import { IconSearch } from "../@ui/icons";
import { formatCNPJ } from "@/utils/funcoes";
import { getApiCnpjAll, getApiCnpjESalva } from "@/services/getCnpj";
import EmpresaTablela from "../empresa/tabela";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BiPlusCircle } from "react-icons/bi";
export default function CadastroCnpj() {
  const [cnpj, setCnpj] = useState<string>("");

  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (cnpjValido) {
      mutation.mutate(cnpjValido);
    }
  }
  const cnpjValido = cnpj && formatCNPJ(cnpj);
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["empresa"],
    queryFn: getApiCnpjAll,
  });
  const mutation = useMutation({
    mutationFn: (cnpj: string) => {
      return getApiCnpjESalva(cnpj);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["empresa"] });
      setCnpj("");
    },
  });

  return (
    <div className="flex flex-col gap-3 items-center justify-center flex-1 w-ful mt-20">
      <h5>Cadastro CNPJ: {cnpj} {cnpjValido && "Enter para salvar"}</h5>
      <form onSubmit={handleSubmitForm}>
        <label className="input min-w-52 input-bordered flex items-center">
          <input
            type="text"
            id="cnpj"
            className="grow"
            value={cnpj}
            placeholder="Digite o CNPJ"
            onChange={(e) => setCnpj(e.target.value)}
          />
          {cnpjValido && (
            <button onSubmit={() => { }}>
              <BiPlusCircle title="Adicionar" />
            </button>
          )}
        </label>
      </form>
      {isLoading && (
        <div className="flex flex-col gap-4 w-52">
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      )}
      {data && !isLoading && <EmpresaTablela empresa={data} />}
    </div>
  );
}
