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
- infinite scroll para a listagem de repositório
- tela de detalhamento do repositório

## Como foi feito:

- foi usado react-native v0.72.3 para geração das telas nativas do app
- o projeto é baseado em TypeScript e com ampla cobertura de tipagem
- foi utilizado styled-components para estilização e criação de components reutilizáveis na medida do possível
- para as chamadas HTTP foi usado Axios
- no gerenciamento de estado foi utilizado Redux v4.2.1, foi utilizado para Redux Hooks (useDispatch, useSelector)
- para lida com efeitos colaterais foi usado Redux-Saga v1.2.3
- para navegação foi utilizado o React Navigation v6.1.7 que também foi utilizado como transportador de props entre telas
- a estrutura base do projeto tenta ao máximo centralizar informações e evitar repetição de código sem necessidade

## O que eu vou ficar devendo:

- Testes de ao menos 1 componente
