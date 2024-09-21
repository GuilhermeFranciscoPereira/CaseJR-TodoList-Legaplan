# 📝 Case Dev Junior - TodoList - Legaplan 📝

> Commit: 21/09/2024 - 15:17 ( Commit de criação do modal e da função de deletar. Assim, permitindo que o usuário delete qualquer tarefa que deseje )

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

## Alterações nas pastas de ( src ): ( components / contexts / hooks  )

### components:
- components > Button > ButtonsToModal > ButtonToModalDeleteTasks.tsx: Criado a exportação da imagem da lixeira como um botão que ao clicar aparece o modal de deletar a tarefa correspondente.
- components > LocalStorage > ShowAllTasks.tsx: Excluído a imagem da lixeira e substituído pelo componente citado à cima.
- components > Modal > ModalDeleteTask: Criado a estrutura e estilização do modal.
- components > Modal > ModalNewTask > ModalNewTask.scss: Adicionado o "top: 0; left: 0" para ter a certeza que o modal irá ficar bem centralizado na tela.

### contexts:
- contexts > Modals > ModalDeleteTaskContext.tsx: Criado todo o contexto do modal de deletar, exportando com esse contexto tudo necessário para funcionar bem a função de deletar.
- contexts > AppProvider.tsx: Importado o provider do "ModalDeleteTaskContext".

### hooks:
- hooks > LocalStorage > hookShowAllTask.tsx: Implantada a função de abrir o modal de deletar e já seta também o nome do modal que foi clicado e qual o seu tipo.
- hooks > Modal > hookModalDeleteTask.tsx: Criado a parte lógica do modal de deletar.

##

### ❤️ Créditos:

- #### Créditos do figma total a equipe LegaPlan:
> <a href="https://www.figma.com/design/4iESWnasLZSHyghg1ipj1P/Teste-Dev-Junior---Legaplan?node-id=0-1&node-type=canvas&t=GxQUSS4KxQUWBUBN-0" target="_blank">https://www.figma.com/design/4iESWnasLZSHyghg1ipj1P/Teste-Dev-Junior---Legaplan?node-id=0-1&node-type=canvas&t=GxQUSS4KxQUWBUBN-0</a>

- #### Créditos dos emojis: 
> <a href="https://emojipedia.org" target="_blank">https://emojipedia.org</a>