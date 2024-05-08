import { Empresa } from "@/@types/empresa";
import React from "react";
interface Props {
  empresa: Empresa;
}

export default function EmpresaTablelaDetalhes({ empresa }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            {empresa?.status && <th>STATUS</th>}
            {empresa?.nome && <th>NOME</th>}
            {empresa?.telefone && <th>TELEFONE</th>}
            <th>MUNICIPIO</th>
            <th>ABERTURA</th>
            <th>BAIRRO</th>
            {empresa?.capital_social && <th>CAPITAL SOCIAL</th>}
            {empresa?.cep && <th>CEP</th>}
            {empresa?.complemento && <th>COMPLEMENTO</th>}
            {empresa?.data_situacao && <th>DATA SITUAÇAO ESPECIAL</th>}
            {empresa?.natureza_juridica && <th>NATUREZA JURIDICA</th>}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{empresa?.status}</th>
            <td>{empresa?.nome}</td>
            <td>{empresa?.telefone}</td>
            <td>{empresa?.municipio}</td>
            <td>{empresa?.abertura}</td>
            <td>{empresa?.bairro}</td>
            {empresa?.capital_social && <td>empresa?.capital_social </td>}
            <td>{empresa?.cep}</td>
            <td>{empresa?.complemento}</td>
            {empresa?.data_situacao && <td>{empresa?.data_situacao}</td>}
            <td>{empresa?.data_situacao_especial}</td>
            <td>{empresa?.efr}</td>
            <td>{empresa?.email}</td>
            <td>{empresa?.fantasia}</td>
            <td>{empresa?.logradouro}</td>
            <td>{empresa?.motivo_situacao}</td>
            <td>{empresa?.natureza_juridica}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
