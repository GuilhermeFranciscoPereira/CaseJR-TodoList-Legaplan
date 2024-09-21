# 📝 Case Dev Junior - TodoList - Legaplan 📝

> Commit: 21/09/2024 - 12:50 ( Commit de criação da função de clicar na tarefa e trocar entre "Suas tarefas de hoje" e "Tarefas finalizadas" além de adicionar no local storage para cada )

#

## 💭 Como está o LocalStorage:
!['Foto como está o LocalStorage'](/src/assets/localStorage.png)

## 💭 Site atual (PC):
!['Foto do site sem tarefas - PC'](/src/assets/personalSite-PC.png)

## 💭 Site atual - (Mobile):
!['Foto do site sem tarefas - Mobile'](/src/assets/personalSite-Mobile.png)

##

## 📌 Sobre o case:
Este projeto é um desafio proposto pela equipe da LegaPlan para uma vaga de dev Junior, os pontos levantados são:
- O projeto deve ser criado utilizando NextJS utilizando o App Router e SCSS
- Além das boas práticas de programação, esperamos ver fidelidade MÁXIMA ao design. Preste atenção aos detalhes como sombras, gradientes, entre outros

## ✔️ Alterações deste commit:

## Alterações na pasta: ( src )

## Alterações nas pastas de ( src ): ( assets / components / hooks / styles )

### assets:
- assets: Adicionado as 3 fotos usadas neste readme para mostrar como o site está no momento atual.

### components:
- components > LocalStorage > ShowAllTasks.tsx: Apenas alterado a estrutura, trazendo todo o Section para o arquivo e fazendo um map para "Suas tarefas de hoje" e outro para "Tarefas finalizadas".
- components > Modal > ModalNewTask > ModalNewTask.scss: Alterações apenas para o modal de adicionar uma nova tarefa ficar sempre centralizado no meio da tela.
- components > Tasks > Index.tsx: Removido toda a estruturação anterior e fazendo a importação de "ShowAllTasks".
- components > Tasks > Tasks.scss: Adição para a estilização do novo h1 que aparece caso não exista nenhuma tarefa e alterado o margin-top para o elemento pai.

### hooks:
- hooks > LocalStorage > addNewTask.tsx: Adicionado a validação para ver se já existe aquela tarefa que vai ser adicionada e alterado a chave do local Storage para a nova.
- hooks > LocalStorage > hookShowAllTask.tsx: Toda a parte lógica do componente "ShowAllTasks".

### styles:
- styles > GlobalStyles.scss: Pequenas alterações no body. Alterando o height para não ser travado em 100vh e sim ter pelo menos 100vh, o width para 99vw e para o overflow ser apenas para o X ( Na horizontal ).

##

### ❤️ Créditos:

- #### Créditos do figma total a equipe LegaPlan:
> <a href="https://www.figma.com/design/4iESWnasLZSHyghg1ipj1P/Teste-Dev-Junior---Legaplan?node-id=0-1&node-type=canvas&t=GxQUSS4KxQUWBUBN-0" target="_blank">https://www.figma.com/design/4iESWnasLZSHyghg1ipj1P/Teste-Dev-Junior---Legaplan?node-id=0-1&node-type=canvas&t=GxQUSS4KxQUWBUBN-0</a>

- #### Créditos dos emojis: 
> <a href="https://emojipedia.org" target="_blank">https://emojipedia.org</a>