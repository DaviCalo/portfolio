import { ProjectModel } from '../models/project.model';

export const PROJECTS: ProjectModel[] = [
    {
      imageUrl: 'https://raw.githubusercontent.com/DaviCalo/cinema-app/main/app/src/main/res/drawable/cine_app.png',
      imageDescription: 'Cinema App Screen Shot',
      title: 'Cinema App',
      subtitle: 'Cinema App é um aplicativo móvel desenvolvido em Kotlin que utiliza a API TMDb (The Movie Database) para fornecer informações sobre filmes e séries. Com este aplicativo, os usuários podem explorar filmes e séries populares, pesquisar títulos específicos e ver trailers das suas mídias favoritas.',
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
      gitUrl: 'https://github.com/DaviCalo/cinema-app',
      deployUrl: 'https://github.com/DaviCalo/cinema-app',
      type: 'MOBILE'
    },
    {
      imageUrl: 'https://raw.githubusercontent.com/DaviCalo/todo-mobile-app/main/app/src/main/res/drawable/home_screen.png',
      imageDescription: 'Todo app Screen Shot',
      title: 'Todo App',
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
        {
          iconUrl: 'icons/sql-icon.svg',
          title: 'SQL Lite'
        },
      ],
      gitUrl: 'https://github.com/DaviCalo/todo-app',
      deployUrl: 'https://github.com/DaviCalo/todo-app',
      type: 'MOBILE'
    },
    {
      imageUrl: 'images/demo.png',
      imageDescription: 'Portfólio pessoal',
      title: 'Portfólio',
      subtitle: 'Portfólio pessoal em desenvolvimento, apresentando minhas habilidades e projetos. Este site demonstra minha capacidade de criar aplicações web dinâmicas e responsivas, proporcionando uma navegação intuitiva e interativa.',
      tags: [
        {
          iconUrl: 'icons/typescript-icon.svg',
          title: 'Typescript'
        },   
        {
          iconUrl: 'icons/angular-icon.svg',
          title: 'Angular'
        }, 
      ],
      gitUrl: 'https://github.com/DaviCalo/portfolio',
      deployUrl: 'https://new-portifolio-chi.vercel.app/',
      type: 'FRONTEND'
    },
    // {
    //   imageUrl: 'images/gravitation.png',
    //   imageDescription: 'Imagem do projeto 1',
    //   title: 'The Gravity',
    //   subtitle: 'Mini simulação do movimento gravitacional entre a Terra e a lua. Usando a formula da gravitação universal. Apresentado como trabalho final de uma disciplina.',
    //   tags: [
    //     {
    //       iconUrl: 'icons/p5-js-icon.svg',
    //       title: 'P5.js'
    //     },
    //     {
    //       iconUrl: 'icons/javascript-icon.svg',
    //       title: 'Javascript'
    //     },
    //   ],
    //   gitUrl: 'https://openprocessing.org/sketch/2095943',
    //   deployUrl: 'https://openprocessing.org/sketch/2095943',
    //   type: 'FRONTEND'
    // },
    {
      imageUrl: 'images/quester.png',
      imageDescription: 'Quester Backend',
      title: 'Quester Backend',
      subtitle: 'O backend de uma aplicação web chamada Quester, que permite que usuários criem partidas, criando perguntas e respostas para testar os conhecimentos de outros usuários. Um sistema intuitivo, seguro, rápido e adaptado às necessidades dos alunos e professores, proporcionando experiências de aprendizado e avaliação satisfatórias',
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
      gitUrl: 'https://github.com/DaviCalo/quester-backend',
      deployUrl: 'https://github.com/DaviCalo/quester-backend',
      type: 'BACKEND'
    },
    {
      imageUrl: 'images/quester.png',
      imageDescription: 'Quester frontend screen shot',
      title: 'Quester Frontend',
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
      gitUrl: 'https://github.com/DaviCalo/quester-frontend',
      deployUrl: 'https://github.com/DaviCalo/quester-frontend',
      type: 'FRONTEND'
    },
    {
      imageUrl: 'images/sapinho.png',
      imageDescription: 'Imagem do projeto 1',
      title: 'Sapinho',
      subtitle: 'Remake do jogo do arcade Frogger, feito com P5.js. O objetivo do jogo é simples, mas desafiador: guiar um sapo para atravessar uma estrada movimentada. Evitando obstáculos e perigos a cada passo.',
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
  ]