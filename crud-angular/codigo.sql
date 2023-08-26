DROP DATABASE IF EXISTS db_condomio;

CREATE DATABASE IF NOT EXISTS db_condomio;

use db_condomio;

CREATE TABLE IF NOT EXISTS condominio(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) UNIQUE,
    cnpj VARCHAR(20) UNIQUE,
    cidade VARCHAR(50) NOT NULL,
    bairro VARCHAR(50),
    endereco VARCHAR(50),
    data_inicio VARCHAR(20),
    valor_contrato FLOAT(10,2)
);

INSERT INTO condominio(nome, cnpj, cidade, bairro, endereco, data_inicio, valor_contrato)
    VALUES
        ('varanda dos buritis', '00.394.460/0059-87', 'Goiânia', 'Setor Oeste', 'Rua t-15, qd 55, numero A120', '20/02/2022', 2.500),
        ('mansoes do oeste', '03.494.460/0058-78', 'Goiânia', 'Setor Oeste', 'Avendia t-9, numero 1.100', '20/02/2022', 2.500),
        ('jardins atlantico', '02.594.460/0058-27', 'Aparecida', 'Garavelo', 'Rua 43, qd 55, lote 10-15', '20/02/2022', 2.100),
        ('jardim das paulmeiras', '10.694.460/0058-87', 'Aparecida', 'Jardim Tiradentes', 'Avenida 2, QD 18, 20-22', '20/02/2023', 1.500)
;

SELECT * FROM condominio;

SELECT nome, cidade, valor_contrato FROM condominio;

CREATE TABLE IF NOT EXISTS membros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome varchar(255) NOT NULL UNIQUE,
    telefone varchar(255) NOT NULL UNIQUE
);

INSERT INTO membros(nome, telefone)
    VALUES
        ('danillo willian', '62 9999-8889'),
        ('aline sousa', '62 9999-8881'),
        ('jose nascimento', '62 9999-8882'),
        ('maria eloisa', '62 9999-8886')
;

SELECT * FROM membros;

SELECT nome, telefone FROM membros;

-- OPCIONAL
-- ALTER TABLE usuarios
-- ADD UNIQUE(nome),
-- ADD UNIQUE(email);

CREATE TABLE IF NOT EXISTS servicos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL UNIQUE,
    descricao VARCHAR(100) NOT NULL
);

INSERT INTO servicos(nome, descricao)
    VALUES
        ('sindico', 'mês fevereiro'),
        ('limpeza', 'mês janeiro'),
        ('portaria', 'mês março'),
        ('segurança', 'documentos pendênte')
;

SELECT * FROM servicos;

SELECT nome, descricao FROM servicos;

CREATE TABLE IF NOT EXISTS situacao(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL UNIQUE,
    descricao VARCHAR(100) NOT NULL
);

INSERT INTO situacao(nome, descricao)
    VALUES
        ('impostos da prefeitura1', 'mês fevereiro'),
        ('impostos da prefeitura2', 'mês janeiro'),
        ('impostos da prefeitura3', 'mês março'),
        ('impostos da prefeitura4', 'documentos pendênte para levar no banco')
;

SELECT * FROM situacao;

SELECT nome, descricao FROM categoria;
