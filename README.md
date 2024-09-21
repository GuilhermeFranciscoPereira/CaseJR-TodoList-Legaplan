# 📝 Case Dev Junior - TodoList - Legaplan 📝

> Commit: 21/09/2024 - 01:09 ( Commit de criação do componente responsável por renderizar todas as tarefas na tela )

#

## 💭 Site atual (PC):
- ### Site atual sem tarefa:
!['Foto do site sem tarefas - PC'](/src/assets/withoutTaskt-PC.png)

- ### Site atual com tarefas:
!['Foto do site com tarefas - PC'](/src/assets/tasks-PC.png)

## 💭 Site atual - (Mobile):
- ### Site atual sem tarefa:
!['Foto do site sem tarefas - Mobile'](/src/assets/withoutTaskt-Mobile.png)

- ### Site atual com tarefas:
!['Foto do site com tarefas- Mobile'](/src/assets/tasks-Mobile.png)

##

## 📌 Sobre o case:
Este projeto é um desafio proposto pela equipe da LegaPlan para uma vaga de dev Junior, os pontos levantados são:
- O projeto deve ser criado utilizando NextJS utilizando o App Router e SCSS
- Além das boas práticas de programação, esperamos ver fidelidade MÁXIMA ao design. Preste atenção aos detalhes como sombras, gradientes, entre outros

## ✔️ Alterações deste commit:

## Alterações na pasta: ( src )

## Alterações nas pastas de ( src ): ( assets / components / contexts / hooks )

### assets:
- assets: Adicionado as 4 fotos usadas neste readme para mostrar como o site está no momento atual.

### components:
- components > Tasks > index.tsx: Importado e inserido o componente que renderiza as tarefas na tela para substituir as tarefas que haviam sido inseridas manualmente.
- components > LocalStorage > ShowAllTasks.tsx: Criado toda a estrutura do componente que é responsável pela renderização das tarefas e adicionado ao componente de Tasks.

### contexts:
- contexts > Modals > ModalNewTaskContext.tsx: Adicionado 2 novas exportações para o contexto de modais de novas tarefas, para que usemos como controle de quando acontece uma troca das tarefas e assim fazer uma nova renderização na tela e sempre mostrar as novas tarefas.

### hooks:
- hooks > LocalStorage > addNewTask.tsx: Adicionado as exportações comentadas no tópico a cima. E sempre que setar uma nova tarefa no local storage alterará o valor de "addSuccess" e irá forçar uma nova renderização na tela no arquivo "showAllTasks.tsx".

##

### ❤️ Créditos:

- #### Créditos do figma total a equipe LegaPlan:
> <a href="https://www.figma.com/design/4iESWnasLZSHyghg1ipj1P/Teste-Dev-Junior---Legaplan?node-id=0-1&node-type=canvas&t=GxQUSS4KxQUWBUBN-0" target="_blank">https://www.figma.com/design/4iESWnasLZSHyghg1ipj1P/Teste-Dev-Junior---Legaplan?node-id=0-1&node-type=canvas&t=GxQUSS4KxQUWBUBN-0</a>

- #### Créditos dos emojis: 
> <a href="https://emojipedia.org" target="_blank">https://emojipedia.org</a>