-- CreateTable
CREATE TABLE "Empresa" (
    "id" SERIAL NOT NULL,
    "abertura" TIMESTAMP(3) NOT NULL,
    "situacao" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "porte" TEXT NOT NULL,
    "natureza_juridica" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "data_situacao" TIMESTAMP(3) NOT NULL,
    "cnpj" TEXT NOT NULL,
    "ultima_atualizacao" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "fantasia" TEXT,
    "complemento" TEXT,
    "efr" TEXT,
    "motivo_situacao" TEXT,
    "situacao_especial" TEXT,
    "data_situacao_especial" TIMESTAMP(3),
    "capitalSocial" TEXT NOT NULL,
    "extra" TEXT NOT NULL,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AtividadePrincipal" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "empresaId" INTEGER NOT NULL,

    CONSTRAINT "AtividadePrincipal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QSA" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "qual" TEXT NOT NULL,
    "empresaId" INTEGER NOT NULL,

    CONSTRAINT "QSA_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AtividadeSecundaria" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "empresaId" INTEGER NOT NULL,

    CONSTRAINT "AtividadeSecundaria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Billing" (
    "id" SERIAL NOT NULL,
    "free" BOOLEAN NOT NULL,
    "database" BOOLEAN NOT NULL,
    "empresaId" INTEGER NOT NULL,

    CONSTRAINT "Billing_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_cnpj_key" ON "Empresa"("cnpj");

-- AddForeignKey
ALTER TABLE "AtividadePrincipal" ADD CONSTRAINT "AtividadePrincipal_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QSA" ADD CONSTRAINT "QSA_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtividadeSecundaria" ADD CONSTRAINT "AtividadeSecundaria_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Billing" ADD CONSTRAINT "Billing_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
