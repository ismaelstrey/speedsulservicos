export const minioConfig = {
    endPoint: process.env.STORAGE_MINIO_ENDPOINT || "",
    port: Number(process.env.STORAGE_MINIO_PORT) || 9090,
    useSSL: true,
    accessKey: process.env.STORAGE_MINIO_ACCESS_KEY_ID || 'Q3AM3UQ867SPQQA43P2F',
    secretKey: process.env.STORAGE_MINIO_SECRET_KEY || 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG',
}