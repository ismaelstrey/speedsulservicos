import { prisma } from "@/lib/prisma";
import { formataCNPJ } from "@/utils/funcoes";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const cnpj = formataCNPJ(id);
  try {
    const consulta = await prisma.empresa.findFirst({ where: { cnpj: cnpj } });
    console.log(consulta);
    return NextResponse.json(consulta);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
