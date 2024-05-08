import { Empresa } from "@/@types/empresa";
import { formatCNPJ } from "@/utils/funcoes";
import Link from "next/link";
import React from "react";
interface Props {
  empresa: Empresa[];
}

export default function EmpresaTablela({ empresa }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>STATUS</th>
            <th>NOME</th>
            <th>CONTATO</th>
            <th>MUNICIPIO</th>
            <th>CNPJ</th>
          </tr>
        </thead>
        <tbody>
          {empresa.map((empre, key) => (
            <tr key={key}>
              <th>{empre?.status}</th>
              <td>{empre?.nome}</td>
              <td>{empre?.telefone}</td>
              <td>{empre?.municipio}</td>
              <td>
                <Link
                  href={`/pages/cadastro/empresa/${formatCNPJ(empre?.cnpj)}`}
                >
                  {empre?.cnpj}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
