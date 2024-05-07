import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const data = await prisma.empresa.findMany({
      select: {
        abertura: true,
        bairro: true,
        capitalSocial: true,
        cep: true,
        cnpj: true,
        dataSituacao: true,
        email: true,
        extra: true,
        logradouro: true,
        municipio: true,
        naturezaJuridica: true,
        nome: true,
        numero: true,
        porte: true,
        situacao: true,
        status: true,
        telefone: true,
        tipo: true,
        uf: true,
        complemento: true,
        efr: true,
        fantasia: true,
        motivoSituacao: true,
        situacaoEspecial: true,
        ultimaAtualizacao: true,
        dataSituacaoEspecial: true,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
export async function POST(request: Request) {
  const dataEmpresa = await request.json();
  // console.log({ cnpJ: { dataEmpresa } });
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
  return NextResponse.json({ data });
}
