import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { consultarAPI } from "@/services/getCnpj";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const dataEmpresa = await consultarAPI(id);

    const data = await prisma.empresa.create({
      data: {
        abertura: dataEmpresa.abertura,
        bairro: dataEmpresa.bairro,
        capitalSocial: dataEmpresa.capital_social,
        cep: dataEmpresa.cep,
        cnpj: dataEmpresa.cnpj,
        dataSituacao: dataEmpresa.data_situacao,
        email: dataEmpresa.situacao,
        extra: dataEmpresa.situacao,
        logradouro: dataEmpresa.logradouro,
        municipio: dataEmpresa.municipio,
        naturezaJuridica: dataEmpresa.natureza_juridica,
        nome: dataEmpresa.nome,
        numero: dataEmpresa.numero,
        porte: dataEmpresa.porte,
        situacao: dataEmpresa.situacao,
        status: dataEmpresa.status,
        telefone: dataEmpresa.telefone,
        tipo: dataEmpresa.tipo,
        uf: dataEmpresa.uf,
        complemento: dataEmpresa.complemento,
        efr: dataEmpresa.efr,
        fantasia: dataEmpresa.fantasia,
        motivoSituacao: dataEmpresa.motivo_situacao,
        situacaoEspecial: dataEmpresa.situacao_especial,
        ultimaAtualizacao: dataEmpresa.ultima_atualizacao,
        dataSituacaoEspecial: dataEmpresa.data_situacao_especial,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
