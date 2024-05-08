import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const data = await prisma.service.findMany();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
export async function POST(request: Request) {
  const dataEmpresa = await request.json();
  // console.log({ cnpJ: { dataEmpresa } });
  const data = await prisma.service.create({
    data: {
      ...dataEmpresa
    },
  });
  return NextResponse.json({ data });
}
