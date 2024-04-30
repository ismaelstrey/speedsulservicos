import { prisma } from "@/lib/prisma";
import { consultarAPI } from "@/services/GravaJson";
import { formatarDataParaDateTime } from "@/utils/funcoes";

import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params

        const dataEmpresa = await consultarAPI(id)
        const abertura = formatarDataParaDateTime(dataEmpresa.abertura)
        const dataSituacao = formatarDataParaDateTime(dataEmpresa.data_situacao)
        const dataSituacaoEspecial = formatarDataParaDateTime(dataEmpresa.data_situacao_especial)
        console.log(dataSituacao)


        const data = await prisma.empresa.create({

            data: {
                abertura: abertura,
                bairro: dataEmpresa.bairro,
                capitalSocial: dataEmpresa.capital_social,
                cep: dataEmpresa.cep,
                cnpj: dataEmpresa.cnpj,
                dataSituacao: dataSituacao,
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
                dataSituacaoEspecial: dataSituacaoEspecial,
                qsa: {
                    create: {
                        nome: dataEmpresa.qsa[0].nome,
                        qual: dataEmpresa.qsa[0].qual,

                    }
                },
                atividadePrincipal: {
                    create: {
                        code: dataEmpresa.atividade_principal[0].code,
                        text: dataEmpresa.atividade_principal[0].text
                    }
                }


            }

        })

        // console.log(data)
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}