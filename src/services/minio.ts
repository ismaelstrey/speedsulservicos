import { minioConfig } from '@/config/constant';
import Minio from 'minio';

// Configuração do cliente MinIO
const minioClient = new Minio.Client(minioConfig);

// Função para gerar URL pré-assinada para upload
async function generatePresignedUrl(filename: string): Promise<string> {
  return new Promise((resolve, reject) => {
    minioClient.presignedPutObject('uploads', filename, (err, url) => {
      if (err) {
        reject(err);
      } else {
        resolve(url);
      }
    });
  });
}

// Exemplo de uso
async function uploadFile(filename: string) {
  try {
    const url = await generatePresignedUrl(filename);
    console.log('URL pré-assinada:', url);
    // Agora você pode usar essa URL para fazer o upload do arquivo no frontend.
  } catch (error) {
    console.error('Erro ao gerar URL pré-assinada:', error);
  }
}

// Chame a função com o nome do arquivo
// uploadFile('meuarquivo.jpg');