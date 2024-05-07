import { NextResponse } from "next/server";
import { consultarAPI } from "@/services/getCnpj";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const dataEmpresa = await consultarAPI(id);
    return NextResponse.json(dataEmpresa);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
