## Desafio front-end Morpheus
Desenvolver um sistema web com um menu com os seguintes itens:
Listar Usuários;
Cadastrar Usuário;

A tela de Listar usuário deverá conter apenas um grid e um filtro por nome de usuário.
A tela de cadastro deverá apenas INCLUIR registros novos


O sistema não necessita  usar banco de dados para armazenar valores, podendo salvar os dados em um arquivo de texto. Caso queira utilizar algum tipo de banco de dados envie também o script de inicialização dele ou um backup do banco utilizado.

Não é necessário desenvolver tela de autenticação.
O desenvolvimento deve ser feito com backend e frontend separados. O backend deve ser desenvolvido em java, python ou nodejs (framework a escolha ), e o frontend desenvolvido em angularJS,  angular 4+, vueJs ou ReactJs.



Retornar um descritivo no formato README.md explicando como realizar o deploy da aplicação.


## Para Executar
#### API
```
npm install -g json-server
json-server --watch db.json
# na raiz do projeto 
```
#### FrontEnd
```
npm run serve
```


## Features

- Cadastrar Usuários
- Listar todos Usuários
- Listar ultimos usuários cadastrados
- Busca de Usuários
- Grid de Cards

## Teclonogias

- Vuejs
- VueBootrap
- VueRouter
- jsonServer