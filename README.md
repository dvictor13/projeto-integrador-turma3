
<h1 align="center"> Barba, Cabelo e Bigode </h1>

<p align="center">
<img src="public/images/fiodobigode-logo-horizontal.svg"/>
</p>

# Status do Projeto

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

<h4 align="center"> 
    :scissors:  Projeto em desenvolvimento  :scissors:
</h4>


# Descrição do Projeto

Aplicação desenvolvida para venda e acompanhamento de assinatura de planos mensais de serviços de beleza masculina. Os usuários podem usufruir dos serviços disponíveis nas diversas barbearias parceiras no Brasil. Os planos fornecem cortes de cabelo 💇‍♂️, cortes de barba 🧔 e serviços extras de cuidados .


# Índice 
* [Status do Projeto](#status-do-projeto)
* [Descrição do Projeto](#descrição-do-projeto)
* [Índice](#índice)
* [Funcionalidades do Projeto](#funcionalidades-do-projeto)
* [Acesso ao Projeto](#acesso-ao-projeto)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Captura da Página Inicial](#captura-da-página-inicial)
* [Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras-do-projeto)


# Funcionalidades do Projeto

- `Funcionalidade 1`: `Cadastro do Cliente` O sistema precisa estar apto a cadastrar novos clientes com dados inserido pelos próprios usuários. Para cadastrar, deve ser informado um e-mail, válido e único dentro do sistema. Nome e dados pessoais. Todos os campos são obrigatórios, além da criação de uma senha.
- `Funcionalidade 1a`: `Login do Cliente` Após o cadastro do cliente, é possível o usuário logar em uma área exclusiva com a inserção de email e senha cadastrados. Quando logado, é capaz de mudar todas as suas as informações pessoais.
- `Funcionalidade 1b`: `Upload e mudança de foto de perfil` O cliente pode inserir uma foto e ser capaz de modificá-la. 
- `Funcionalidade 2`: `Visualização dos Planos Disponíveis` O usuário deve ser capaz de visualizar o preço, a quantidade de cortes de cabelo, cortes de barba e serviços extras dos planos, além de todas as vantagens agregadas.
- `Funcionalidade 2a`: `Compra de Assinatura` Ao escolher o plano que mais se encaixa em seu perfil de consumo e clicar em `Comprar este Plano`, o usuário é redirecionado, caso logado, para a página de pagamento; do contrário, para a página de login. 
Na página de pagamento é selecionada a duração que o usuário deseja usufruir da assinatura.
- `Funcionalidade 2b`: `Upgrade/Downgrade de Assinatura` O usuário pode substituir a assinatura ativa desde que o plano escolhido seja superior ao plano atual.
- `Funcionalidade 3`: `Visualização das Barbearias` O usuário consegue visualizar e filtrar o endereço e os serviços desejados disponibilixados por cada barbearia parceira. :hammer: Além disso, clicar no endereço e ser redirecionado ao mapa com a localização.
- `Funcionalidade 4`: :hammer: `API pras Barbearias` Quando o cliente for utilizar o produto na barbearia, a barbearia tem que ser capaz de checar se o usuário tem uma assinatura ativa e informar pro sistema quais dos serviços disponíveis o usuário utilizou e atualizar a assinatura ativa do cliente.

# Acesso ao Projeto
`Download dos seguintes softwares necessários`

* [MySQL Workbench](https://www.mysql.com/products/workbench/)
* [Node.JS](https://nodejs.org/en/)

`Configuração do Banco de dados`
1. Abra o [script SQL](bancoDeDados.sql) no `MySQL Workbench` e execute o arquivo pra criar o banco de dados relacional.
2. As configurações de USERNAME,PASSWORD,DATABASE,HOST,DIALECT presentes no arquivo [config.js](database/config/config.js) podem ser preenchidas no arquivo [.env](.env.template) sem a extensão *.template* na raiz do projeto referentes ao próprio usuário e são explicadas detalhadamente na documentação do [Sequelize](https://sequelize.org/docs/v6/other-topics/migrations/#configuration-connection-string).

Após fazer o download do projeto e configurar o banco de dados, abra seu terminal dentro do repositório e instale as dependências do projeto com o seguinte comando
~~~bash
npm install
~~~
Quando finalizada a instalação das dependências, o seguinte código vai inicializar o servidor do projeto.
~~~bash
npm run start
~~~
e quando inicializado corretamente deverá aparecer a seguinte mensagem:
~~~bash
$ npm run start

> projeto-integrador-turma3@0.0.0 start
> node ./bin/www
~~~
Em seu navegador, abra a aplicação no servidor local na porta 3000, ou [clique aqui](http://localhost:3000/)
~~~bash
localhost:3000
~~~

# Tecnologias Utilizadas
* `JavaScript`
* `MySQL`
* `ExpressJS`

# Captura da Página Inicial
<img src="screenshot/homepage.png"/>

# Pessoas Desenvolvedoras do Projeto

| [<img src="https://avatars.githubusercontent.com/u/94792677?v=4" width=115><br><sub>Júlio Castello Branco de Mattos</sub>](https://github.com/jcastellobranco) |  [<img src="https://avatars.githubusercontent.com/u/102265129?v=4" width=115><br><sub>Melissa Ost de Vasconcelos</sub>](https://github.com/Melissaost) |  [<img src="https://avatars.githubusercontent.com/u/57369005?v=4" width=115><br><sub>Douglas Menezes</sub>](https://github.com/dvictor13) |
| :---: | :---: | :---: |
