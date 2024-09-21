# 📝 Case Dev Junior - TodoList - Legaplan 📝

> Commit: 20/09/2024 - 23:42 ( Commit de criação do modal de adicionar uma nova tarefa e também já está setando a nova tarefa no local storage )

#

## 💭 modal do objetivo x criado (PC):
- ### modal do objetivo:
!['Foto do modal do objetivo - PC'](/src/assets/modalObjective-PC.png)

- ### modal criado:
!['Foto do meu modal - PC'](/src/assets/modalPersonal-PC.png)

## 💭 modal do objetivo x criado (Mobile):
- ### modal do objetivo:
!['Foto do modal do objetivo - Mobile'](/src/assets/modalObjective-Mobile.png)

- ### modal criado:
!['Foto do meu modal - Mobile'](/src/assets/modalPersonal-Mobile.png)

##

## 📌 Sobre o case:
Este projeto é um desafio proposto pela equipe da LegaPlan para uma vaga de dev Junior, os pontos levantados são:
- O projeto deve ser criado utilizando NextJS utilizando o App Router e SCSS
- Além das boas práticas de programação, esperamos ver fidelidade MÁXIMA ao design. Preste atenção aos detalhes como sombras, gradientes, entre outros

## ✔️ Alterações deste commit:

## Alterações na pasta: ( src / package.json )

## Alterações nas pastas de ( src ): ( app / assets / components / contexts / hooks / services )

### app:
- app > layout.tsx: Adicionado as importações dos contexts e adicionado no layout.

### assets:
- assets: Adicionado as 4 fotos usadas neste readme para mostrar como o site está no momento atual.

### components:
- components > Buttons > ButtonsToModal: Criado esta pasta para guardar o botão que vai ser utilizado pelos modais e para usar o 'use client' separado do arquivo principal.
- components > Buttons > PrimaryButtons: Adicionado os novos parâmetros: textColor (opcional) e também onClick (função)
- components > Modal > ModalNewTask: Criado a pasta para guardar toda a estrutura e estilização do modal de nova tarefa.
- components > Tasks > index.tsx: Trocado o botão que estava por um que já se conecta com a parte lógica e evita adicionar o 'use client' diretamente no componente de Tasks.

### contexts:
- contexts > Modals: Criado está pasta para guardar todos os contextos referentes aos modais.
- context > AppProvider.tsx: Arquivo único que faz todas as exportações de uma só vez.

### hooks:
- hooks > LocalStorage > addNewTask.tsx: Criado o hook responsável por adicionar as tarefas ao localStorage.
- hooks > Modal > hookModalNewTasks.tsx: Onde está toda a parte lógica do componente: "Modal > modalNewTask".

### services:
- services > QueryClient.tsx: Criado o queryClientProvider fora do layout para usar o 'use client' fora do layout e exportar de forma prática.

## Alterações no aquivo ( package.json )
-  Instalado o React-Query.

##

### ❤️ Créditos:

- #### Créditos do figma total a equipe LegaPlan:
> <a href="https://www.figma.com/design/4iESWnasLZSHyghg1ipj1P/Teste-Dev-Junior---Legaplan?node-id=0-1&node-type=canvas&t=GxQUSS4KxQUWBUBN-0" target="_blank">https://www.figma.com/design/4iESWnasLZSHyghg1ipj1P/Teste-Dev-Junior---Legaplan?node-id=0-1&node-type=canvas&t=GxQUSS4KxQUWBUBN-0</a>

- #### Créditos dos emojis: 
> <a href="https://emojipedia.org" target="_blank">https://emojipedia.org</a>