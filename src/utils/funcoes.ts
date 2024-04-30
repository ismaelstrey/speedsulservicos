import moment from 'moment';

export function formatarDataParaDateTime(dataString: string): string {
    // Convertendo a string para um objeto Date usando Moment.js
    const data = moment(dataString, 'DD/MM/YYYY').toDate();

    // Formatando a data para o formato desejado
    return moment(data).toISOString();
}