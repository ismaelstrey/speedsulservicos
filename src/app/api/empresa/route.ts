import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { consultarAPI } from "@/services/getCnpj";

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
