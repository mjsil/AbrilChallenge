# Abril Mobile Teste

## Como rodar o projeto:

### Android
- `npm install`
- `npx react-native run-android`

### iOS
- `npm install`
- `pod install` na pasta ios
- `npx react-native run-ios`

## O que foi feito:

- tela com a listagem de todos os repositório
- tela de detalhamento do repositório

## Como foi feito:

- foi usado react-native v0.72.3 para geração das telas nativas do app

- o projeto é baseado em TypeScript e com ampla cobertura de tipagem
- foi usado styled-components para estilização e criação de components reutilizáveis na medida do possível
  
- para as chamadas Graphql foi usado o Apollo Client
- o gerenciamento de estado foi feito com o próprio cache do Apollo Client
- para navegação foi utilizado o React Navigation que também foi utilizado como transportador de props entre telas e também para criação do header
- a estrutura base do projeto se encontra dentro da pasta /js onde a estrutura tenta ao máximo centralizar informações e evitar repetição de código sem necessidade

## O que eu vou ficar devendo:

- Testes de ao menos 1 componente
