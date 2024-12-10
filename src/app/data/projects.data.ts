import { ProjectModel } from '../models/project.model';

export const PROJECTS: ProjectModel[] = [
    {
      imageUrl: 'images/gravitation.png',
      imageDescription: 'Imagem do projeto 1',
      title: 'The Gravity',
      subtitle: 'Mini simulação do movimento gravitacional entre a Terra e a lua. Usando a formula da gravitação universal. Apresentado como trabalho final de uma disciplina.',
      tags: [
        {
          iconUrl: 'icons/p5-js-icon.svg',
          title: 'P5.js'
        },
        {
          iconUrl: 'icons/javascript-icon.svg',
          title: 'Javascript'
        },
      ],
      gitUrl: 'https://openprocessing.org/sketch/2095943',
      deployUrl: 'https://openprocessing.org/sketch/2095943',
      type: 'FRONTEND'
    },
    {
      imageUrl: 'images/quester.png',
      imageDescription: 'Imagem do projeto 1',
      title: 'Quester',
      subtitle: 'Uma aplicação web que permite que usuários criem partidas, criando perguntas e respostas para testar os conhecimentos de outros usuários. Um sistema intuitivo, seguro, rápido e adaptado às necessidades dos alunos e professores, proporcionando experiências de aprendizado e avaliação satisfatórias.',
      tags: [
        {
          iconUrl: 'icons/html-icon.svg',
          title: 'HTML'
        },
        {
          iconUrl: 'icons/css-icon.svg',
          title: 'CSS'
        },
        {
          iconUrl: 'icons/javascript-icon.svg',
          title: 'Javascript'
        },
      ],
      gitUrl: 'https://github.com/Fortuness1/fortuness-oficial',
      deployUrl: 'https://github.com/Fortuness1/fortuness-oficial',
      type: 'FRONTEND'
    },
    {
      imageUrl: 'images/sapinho.png',
      imageDescription: 'Imagem do projeto 1',
      title: 'Sapinho',
      subtitle: 'Remake do jogo do arcade Frogger, feito com P5.js',
      tags: [
        {
          iconUrl: 'icons/p5-js-icon.svg',
          title: 'P5.js'
        },
        {
          iconUrl: 'icons/javascript-icon.svg',
          title: 'Javascript'
        },
      ],
      gitUrl: 'https://openprocessing.org/sketch/2161682',
      deployUrl: 'https://openprocessing.org/sketch/2161682',
      type: 'FRONTEND'
    },
    {
      imageUrl: 'images/quester.png',
      imageDescription: 'Imagem do projeto 1',
      title: 'Quester API',
      subtitle: 'Uma aplicação web que permite que usuários criem partidas, criando perguntas e respostas para testar os conhecimentos de outros usuários. Um sistema intuitivo, seguro, rápido e adaptado às necessidades dos alunos e professores, proporcionando experiências de aprendizado e avaliação satisfatórias.',
      tags: [
        {
          iconUrl: 'icons/node-icon.svg',
          title: 'Node'
        },
        {
          iconUrl: 'icons/mongodb-icon.svg',
          title: 'MongoDB'
        }
      ],
      gitUrl: 'https://github.com/Fortuness1/fortuness-oficial',
      deployUrl: 'https://github.com/Fortuness1/fortuness-oficial',
      type: 'BACKEND'
    },
    {
      imageUrl: 'images/quester.png',
      imageDescription: 'Imagem do projeto 1',
      title: 'Quester API Web Socket',
      subtitle: 'Uma aplicação web que permite que usuários criem partidas, criando perguntas e respostas para testar os conhecimentos de outros usuários. Um sistema intuitivo, seguro, rápido e adaptado às necessidades dos alunos e professores, proporcionando experiências de aprendizado e avaliação satisfatórias.',
      tags: [
        {
          iconUrl: 'icons/node-icon.svg',
          title: 'Node'
        },
      ],
      gitUrl: 'https://github.com/Fortuness1/fortuness-oficial',
      deployUrl: 'https://github.com/Fortuness1/fortuness-oficial',
      type: 'BACKEND'
    },
    {
      imageUrl: 'https://raw.githubusercontent.com/DaviCalo/todo-mobile-app/main/app/src/main/res/drawable/home_screen.png',
      imageDescription: 'Todo app',
      title: 'Todo app',
      subtitle: 'Uma aplicação simples de gerenciamento de tarefas construída com Kotlin e Android Studio. Este projeto demonstra a criação de um aplicativo de lista de tarefas com funcionalidades básicas como adicionar, editar e remover tarefas.',
      tags: [
        {
          iconUrl: 'icons/kotlin-icon.svg',
          title: 'Kotlin'
        },
        {
          iconUrl: 'icons/jetpack-compose-icon.svg',
          title: 'Jetpack Compose'
        },
        {
          iconUrl: 'icons/android-studio-icon.svg',
          title: 'Android Studio'
        },
      ],
      gitUrl: 'https://github.com/DaviCalo/todo-app',
      deployUrl: 'https://github.com/DaviCalo/todo-app',
      type: 'MOBILE'
    },
  ]