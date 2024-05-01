import { Empresa } from "@/@types/empresa";
import { formatarDataParaDateTime, formatCNPJ } from "@/utils/funcoes";
import axios from "axios";

export const consultarAPI = async (cnpj: string): Promise<Empresa> => {
  if (cnpj === null) {
    throw Error;
  }
  const newCnpj = formatCNPJ(cnpj);
  const data = await axios.get(`https://receitaws.com.br/v1/cnpj/${newCnpj}`);

  data.data.abertura = formatarDataParaDateTime(data.data.abertura);
  data.data.data_situacao = formatarDataParaDateTime(data.data.data_situacao);
  data.data.data_situacao_especial = formatarDataParaDateTime(
    data.data.data_situacao_especial
  );
  console.log(data.data);
  return data.data;
};
export const getApiCnpj = async (cnpj: string): Promise<Empresa> => {
  if (cnpj === null) {
    throw Error;
  }
  const newCnpj = formatCNPJ(cnpj);
  const data = await axios.get(`/api/empresa/${newCnpj}`);
  return data.data;
};
export const getApiCnpjAll = async (): Promise<Empresa[]> => {
  const data = await axios.get(`/api/empresa/`);
  return data.data;
};
