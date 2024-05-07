import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const consulta = await prisma.empresa.findUnique({ where: { cnpj: id } });
    return NextResponse.json(consulta);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
