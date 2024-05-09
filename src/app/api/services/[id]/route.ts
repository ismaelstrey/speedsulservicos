import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  try {
    const data = await prisma.service.delete({
      where: {
        id: Number(id),
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
  const data = await prisma.service.create({
    data: {
      ...dataEmpresa,
    },
  });
  return NextResponse.json({ data });
}
