# Projeto API Citei

Este projeto foi desenvolvido com o objetivo de fornecer explicações e exemplos de conceitos de testes unitários, teste de integração e E2E para os alunos da [web academy - UFAC](http://webacademy.ufac.br/).

[Figma](https://www.figma.com/file/fj6Ya9rlaIoKFM4hwWgvpq/Citei?type=design&node-id=8-20)


---

## ⚒ Ferramentas

As principais ferramentas utilizadas no front-end da aplicação 'citei' são:
- [Node.js](https://nodejs.org/en/docs)
- [Express.js](https://expressjs.com/)
- [MySQL](https://dev.mysql.com/doc/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Jest](https://jestjs.io/pt-BR/)
---

## 🚀 Iniciar o projeto

Siga os passos abaixo para configurar e executar o projeto:

1. **Instalação de dependências:**
   Execute o comando `npm i` para instalar todas as dependências necessárias.

2. **Configuração do banco de dados:**
   Crie um arquivo `.env` na raiz do projeto, utilizando o `.env.example` como referência. Configure as variáveis de ambiente para se conectar ao seu banco de dados MySQL local.

3. **Inicialização do servidor:**
   Inicie o servidor com o comando `npm start`.

## Executando Testes

Para garantir a integridade e funcionamento correto do projeto, são fornecidos testes unitários utilizando o Jest.

### Passos para executar os testes:

Execute o comando `npm test` para rodar os testes e verificar a integridade do código.


## Estrutura do Projeto

A estrutura do projeto segue um padrão organizacional, com a separação de responsabilidades em diferentes camadas, como:

- **Rotas:** Definem os endpoints da API.
- **Controladores:** Lidam com a lógica de negócios da aplicação.
- **Conexão com o Banco de Dados:** Configurações e métodos para interação com o MySQL.
- **Testes:** Garantem a qualidade e integridade do código.

## Contribuição

Contribuições são bem-vindas! Se desejar colaborar com melhorias, correções ou novas funcionalidades, sinta-se à vontade para abrir um pull request.
