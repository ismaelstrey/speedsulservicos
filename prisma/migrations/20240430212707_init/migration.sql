-- CreateTable
CREATE TABLE "Empresa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "abertura" DATETIME NOT NULL,
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
    "data_situacao" DATETIME NOT NULL,
    "cnpj" TEXT NOT NULL,
    "ultima_atualizacao" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "fantasia" TEXT,
    "complemento" TEXT,
    "efr" TEXT,
    "motivo_situacao" TEXT,
    "situacao_especial" TEXT,
    "data_situacao_especial" DATETIME,
    "capitalSocial" TEXT NOT NULL,
    "extra" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "AtividadePrincipal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "empresaId" INTEGER NOT NULL,
    CONSTRAINT "AtividadePrincipal_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "QSA" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "qual" TEXT NOT NULL,
    "empresaId" INTEGER NOT NULL,
    CONSTRAINT "QSA_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AtividadeSecundaria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "empresaId" INTEGER NOT NULL,
    CONSTRAINT "AtividadeSecundaria_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Billing" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "free" BOOLEAN NOT NULL,
    "database" BOOLEAN NOT NULL,
    "empresaId" INTEGER NOT NULL,
    CONSTRAINT "Billing_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_cnpj_key" ON "Empresa"("cnpj");
