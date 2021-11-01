# Pesquisa de heróis com Marvel API

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `Variáveis de ambiente`

Antes de iniciar o projeto no ambiente de desenvolvimento é preciso criar uma conta no [site da Marvel](https://developer.marvel.com/) para ter acesso as credenciais necessárias para o consumo da API

Com as credenciais em mãos, criar um arquivo `.env` com os seguinte conteúdo.

```
REACT_APP_API_HASH=[Hash base64 referente a public key + private key + timestamp]
REACT_APP_API_KEY=[Public key]
REACT_APP_API_TS=[Timestamp]
```

### `yarn start`

Para rodar a aplicação no ambiente de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualização no browser.

### `yarn test`

Roda os testes configurados na aplicação.

### `yarn build`

Gera o modo de produção da aplicação dentro da pasta `build`.
