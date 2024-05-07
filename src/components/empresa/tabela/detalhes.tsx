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
            <th>STATUS</th>
            <th>NOME</th>
            <th>CONTATO</th>
            <th>MUNICIPIO</th>
            <th>CNPJ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{empresa?.status}</th>
            <td>{empresa?.nome}</td>
            <td>{empresa?.telefone}</td>
            <td>{empresa?.municipio}</td>
            <td>{empresa?.abertura}</td>
            <td>
              {empresa?.atividade_principal.map((res, key) => (
                <div key={key}>
                  <span>{res?.code}</span>
                  <span>{res?.text}</span>
                </div>
              ))}
            </td>
            <td>{empresa?.bairro}</td>
            <td>{empresa?.billing.database}</td>
            <td>{empresa?.capital_social}</td>
            <td>{empresa?.cep}</td>
            <td>{empresa?.complemento}</td>
            <td>{empresa?.data_situacao}</td>
            <td>{empresa?.data_situacao_especial}</td>
            <td>{empresa?.efr}</td>
            <td>{empresa?.email}</td>
            <td>{empresa?.fantasia}</td>
            <td>{empresa?.logradouro}</td>
            <td>{empresa?.motivo_situacao}</td>
            <td>{empresa?.municipio}</td>
            <td>{empresa?.natureza_juridica}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
