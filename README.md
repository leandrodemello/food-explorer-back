## Food Explorer - Desafio Final (Front-End)

Neste desafio, foi desenvolvido o food explorer, um menu interativo para um restaurante fictício.
Construir uma aplicação de ponta a ponta com front-end e back-end, utilizando as teconologias aprendidas no Explorer, simulando um restaurante. 
Uma aplicação completa que vai desde a visualização de um prato até o pagamento do mesmo, bem como a versão mobile do projeto.

O food explorer terá dois perfils: o admin e o usuário;

O admin é a pessoa responsável pelo restaurante, logo, pode criar, visualizar, editar e apagar um prato a qualquer momento. Cada prato contem uma imagem, um nome, uma categoria, uma breve descrição, os ingredientes e o seu preço. Ao clicar em adicionar prato, o admin recebe uma mensagem de sucesso e é redirecionado para a página principal;

O usuário, após fazer o cadastro, irá visualizar todos os pratos cadastrados e, quando clica em um prato, é redirecionado para uma nova tela com informações mais detalhadas sobre ele.


## Características

- Poderão ser criados novos usuários através da tela de SingUp. 
- Por padrão todos os usuários criados serão consumidores.  
- Os consumidores poderão pesquisar por pratos, inserir itens no carrinho, remover itens, selecionar o tipo de pagamento e realizar o pedido. 
- O consumidor também poderá revisar os itens do carrinho antes de realizar o pagamento, removendo os itens caso queira.
- Ao realizar o pagamento o pedido é efetuado realizando o cadastramento do pedido no banco de dados.
- Administradores poderão inserir novos pratos, fazer upload da imagem, selecionar categoria, definir o preço, nome do prato e descrição.
- Os administradores também poderão excluir ou alterar pratos já existentes.
- Poderão ser realizadas pesquisas pelos pratos cadastrados.
- A autenticação dos usuários será por JWT, com validação por senha a qual será criptografada no banco de dados.
- O layout desenvolvido é do tipo responsivo (Mobile First), funcionando em vários tamanhos de telas.
- As APIs utilizadas foi desenvolvidas para esta aplicação.
- Aplicado o conceito de Inversão de dependência na API do usuário.


## Deploy

- Site:  https://foodexplorermcz.netlify.app/


## Front-End

- Site: https://github.com/leandrodemello/food-explorer-front


## Administrador: 
- Email: admin@email.com
- Senha: 123456


## Instruções para a execução do projeto:

#### Front-end

git clone https://github.com/leandrodemello/food-explorer-front


#### Back-end

git clone https://github.com/leandrodemello/food-explorer-back

#### Acessar a pasta e instalar as dependências:

npm install

#### Iniciar o servidor local: (back-end / front-end)

npm run dev

#### Acessar o endereço fornecido pelo terminal via Browser:

Ex.: Local: http://localhost:3333/

## Imagens

![página1](https://user-images.githubusercontent.com/118762335/235221680-9b3f9f7e-b189-48b3-9d34-491084ec5507.png)
![página5](https://user-images.githubusercontent.com/118762335/235221735-8669adaa-9db8-43c6-8f0d-ee990b93806b.png)
![página4](https://user-images.githubusercontent.com/118762335/235221744-49b2d5c4-abdb-4f22-9c7e-f48bec569252.png)
![página2](https://user-images.githubusercontent.com/118762335/235223836-0f27c5d6-d579-4ae1-a094-7edb81a13f13.png)
![página3](https://user-images.githubusercontent.com/118762335/235223847-9deea233-062a-4eaf-b4cb-e69db3a95845.png)


## Tecnologias usadas

[![My Skills](https://skillicons.dev/icons?i=html,css,js,react,styledcomponents,jquery,express,sqlite,nodejs,git,vite,figma)](https://skillicons.dev)


## Contato

#### [Leandro Mello](https://www.linkedin.com/in/leandro-mello-47a24823b/)

