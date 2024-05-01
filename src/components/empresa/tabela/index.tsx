import { Empresa } from "@/@types/empresa";
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
            <th>CNPJ</th>
          </tr>
        </thead>
        <tbody>
          {empresa.map((empre, key) => (
            <tr key={key}>
              <th>{empre?.status}</th>
              <td>{empre?.fantasia}</td>
              <td>{empre?.telefone}</td>
              <td>{empre?.cnpj}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
