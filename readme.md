# Primísias do sistema

o Sistema irá funcionar com base na estrategia de 
Convenção por Definição, então tudo deve seguei as 
instruções descritas nesse arquivo.

# modelo de modules

o modules deve conter 4 arquivos principais onde seram
a base de funcionamento da api, são elas:

- Controller (Exp. UserController) - nome do modulo seguido de controller
- model (Exp. User) - nome do modulo começando com letra maiuscula
- Route - arquivos de rotas que conterá todos os caminhos para esse modulo
- Middlewares - arquivo que é responsavel por execultar alguma coisa antes de executar o conteudo da rota.

# ferramentas 

- Trello
- Bitbucket

modulo para o trello se converter em scrum
https://chrome.google.com/webstore/detail/scrum-for-trello/jdbcdblgjdpmfninkoogcfpnkjmndgje?hl=en

acl = https://www.npmjs.com/package/express-acl

# Migrações

Para poder fazer a migração de dados(subir a base de dados) basta dar oo seguinte 
comando ``` npm run migrations ``` com isso ele irá subir a base de dados.

# Routes

abaixo esta listado as rotas, seus paramêtros e o qeu fazem.

## usuario

**[GET]** /usuario - pega a listagem de todos usuários.

**[DELETE]** /usuario/:id - deleta um usuario pelo id.

**[PUT]** /usuario/:id [*object* **data**]- atualiza um usuario pelo id .

**[POST]** /usuario/login [*string* **email**, *string* **password**] - faz o login do usuário no sistema. 

**[POST]** /usuario/register [*string* **email**, *string* **nome**, *string* **password**, *int* **type_user_id**] - Adiciona um novo usuário na base. 