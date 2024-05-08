import moment from "moment";

export function formatarDataParaDateTime(dataString: string): string {
  // Convertendo a string para um objeto Date usando Moment.js
  const data = moment(dataString, "DD/MM/YYYY").toDate();

  // Formatando a data para o formato desejado
  return moment(data).toISOString();
}

export function formatCNPJ(cnpj: string): string | null {
  // Remove caracteres especiais (pontos, traços e barras)
  const cleanedCNPJ = cnpj.replace(/[^\d]/g, "");

  // Verifica se o CNPJ tem 14 dígitos
  if (cleanedCNPJ.length === 14) {
    return cleanedCNPJ;
  } else {
    return null;
  }
}

export function formataCNPJ(cnpj: string): string {
  // Remove todos os caracteres não numéricos
  const cleanedCNPJ = cnpj.replace(/\D/g, "");

  // Formata o CNPJ
  const formattedCNPJ = cleanedCNPJ.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5"
  );

  return formattedCNPJ;
}
