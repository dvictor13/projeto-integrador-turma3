
<h1 align="center"> Barba, Cabelo e Bigode </h1>

# Status do Projeto
<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>


# Descrição do Projeto
<h4 align="center"> 
    :scissors:  Projeto em desenvolvimento  :scissors:
</h4>
Aplicação desenvolvida para assinaturas mensais de serviços de beleza masculino. Serviço de assinaturas referente à planos fornecidos com parceria de diferentes barbearias no Brasil.
Os planos fornecem cortes de cabelo 💇‍♂️, cortes de barba 🧔 e serviços extras de cuidados .


# Índice 
* [Status do Projeto](#status-do-projeto)
* [Índice](#índice)
* [Descrição do Projeto](#descrição-do-projeto)
* [Funcionalidades do Projeto](#funcionalidades-do-projeto)
* [Acesso ao Projeto](#acesso-ao-projeto)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras)
* [Conclusão](#conclusão)

# Funcionalidades do Projeto
- `Funcionalidade 1`: `Cadastro do Cliente` Nosso sistema precisa estar apto a cadastrar novos clientes com seus dados inserido por eles. Para cadastrar um cliente, devem ser informados seu e-mail, válido e único dentro do sistema. Nome e dados pessoais. Todos os campos são obrigatórios.
- `Funcionalidade 1a`: `Login do Cliente` Após o cadastro do cliente, é necessário o cliente logar em uma área disponível apenas para cadastrados.
- `Funcionalidade 2`: `Visualização dos Planos Disponíveis` O usuário deve ser capaz de visualizar o preço, a quantidade de cortes de cabelo, cortes de barba e serviços extras, além de todas as vantagens dos planos.
- `Funcionalidade 2a`: `Compra de Assinatura` O usuário após analisar os planos, e escolher aquele que mais se encaixa no seu perfil de consumo, o sistema precisa processar a aquisição após a escolha do plano. Além de salvar, qual período o usuário adquirir o plano.
- `Funcionalidade 2b`: `Upgrade/Downgrade de Assinatura` O usuário pode trocar de assinatura para um plano superior, mesmo possuindo uma assinatura ativa. Porém, não pode permitir a compra de uma assinatura igual ou inferior, tendo uma assinatura ativa.
- `Funcionalidade 3`: `Visualização das Barbearias` O usuário consegue visualizar e filtrar as barbearias, com os serviços desejados, cadastradas no sistema. Além disso, clicar no endereço e redirecionar ao mapa com a rota até o local.
- `Funcionalidade 4`: :hammer: `API pras Barbearias` Quando o cliente for utilizar o produto na barbearia, a barbearia tem que ser capaz de checar se o usuário tem uma assinatura ativa e informar pro sistema quais dos serviços disponíveis o usuário utilizou e atualizar a assinatura ativa do cliente.

# Acesso ao Projeto
`Download dos seguintes softwares necessários`

* [MySQL Workbench](https://www.mysql.com/products/workbench/)
* [Node.JS](https://nodejs.org/en/)

`Configuração do Banco de dados`
1. Abra o [script SQL](bancoDeDados.sql) no `MySQL Workbench` e execute o arquivo pra criar o banco de dados relacional.
2. As configurações de USERNAME,PASSWORD,DATABASE,HOST,DIALECT presentes no arquivo [config.js](database/config/config.js) podem ser preenchidas no arquivo [.env](.env) na raiz do projeto são referentes ao próprio usuário e são explicadas na documentação do [Sequelize](https://sequelize.org/docs/v6/other-topics/migrations/#configuration-connection-string).

Após fazer o download do projeto e configurar o banco de dados, abra seu terminal dentro do repositório e instale as dependências do projeto com o seguinte comando
~~~bash
npm install
~~~
Quando finalizada a instalação das dependências, o seguinte código vai inicializar o servidor do projeto.
~~~bash
nodemon start
~~~
e quando inicializado corretamente deverá aparecer a seguinte mensagem:
~~~bash
$ nodemon start
[nodemon] 2.0.18
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node ./bin/www start`
~~~
Em seu navegador, abra a aplicação no servidor local na porta 3000, ou [clique aqui](http://localhost:3000/)
~~~bash
localhost:3000
~~~

# Tecnologias Utilizadas
* `JavaScript`
* `MySQL`
* `ExpressJS`

# Pessoas Desenvolvedoras do Projeto

| [<img src="https://avatars.githubusercontent.com/u/94792677?v=4" width=115><br><sub>Júlio Castello Branco de Mattos</sub>](https://github.com/jcastellobranco) |  [<img src="https://avatars.githubusercontent.com/u/102265129?v=4" width=115><br><sub>Melissa Ost de Vasconcelos</sub>](https://github.com/Melissaost) |  [<img src="https://avatars.githubusercontent.com/u/57369005?v=4" width=115><br><sub>Douglas Menezes</sub>](https://github.com/dvictor13) |
| :---: | :---: | :---: |
