# Consumindo uma API Marvel

Este projeto é um exemplo simples de como consumir a API da Marvel usando React e Axios. 
Ele busca e exibe uma lista de personagens da Marvel, utilizando hooks do React para gerenciar o estado e efeitos colaterais.

## Funcionalidades

- Busca inicial de personagens da API da Marvel.
- Exibição de uma lista de personagens com nome e descrição.
- Carregamento adicional de personagens ao clicar em um botão "Mais".

## Estrutura do Código

### Importações

Importa bibliotecas e módulos essenciais como React, Axios, e ícones.

### Interface `ResponseData`

Define uma interface para os dados recebidos da API, incluindo atributos como `id`, `name`, `description` e `thumbnail`.

### Componente `Characters`

#### Estado

Usa o hook `useState` para gerenciar o estado dos personagens.

#### Efeito

Utiliza o hook `useEffect` para fazer a requisição inicial à API da Marvel ao montar o componente.

#### Função `handleMore`

Define uma função `handleMore` para carregar mais personagens quando o botão "Mais" é clicado, usando um offset baseado no número de personagens já carregados.

### Renderização

Renderiza uma lista de personagens e inclui um botão para carregar mais personagens.

### Exportação

Exporta o componente `Characters` para uso em outras partes da aplicação.

## Configuração da API

O arquivo `api.js` configura o Axios para fazer requisições à API da Marvel. Define a URL base e os parâmetros de autenticação, incluindo uma chave pública, uma chave privada e um hash gerado com MD5.

## Instruções para Rodar o Projeto

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Execute o projeto com `npm start`.

## Notas

- Configure a URL base e as chaves de API da Marvel no arquivo `api.js`.
- É necessário ter uma chave de API da Marvel para fazer as requisições.
