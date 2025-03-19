import { ExperienceModel } from "../models/experience.model";

export const EXPERIENCE: ExperienceModel[] = [
   {
        companyURL: "https://www.irede.org.br/",
        startDate: "JUL",
        endDate: "DEZ 2024",
        title: "Bolsita em Desenvolvimento Android - IREDE",
        description: "Bolsista em desenvolvimento de aplicações para dispositivos móveis android. Utilizo tecnologias como Kotlin e Jetpack Compose.",
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
    },
    {
        companyURL: "https://www.bnb.gov.br/",
        startDate: "FEV",
        endDate: "Atual 2025",
        title: "Estagiário em Análise de Dados - Banco do Nordeste",
        description: "Responsável por transformar dados em relatórios valiosos, contribuindo para a definição de estratégias e decisões operacionais. Utilizando ferramentas como Power BI, SQL, Python, DAX.",
        tags: [
            {
                iconUrl: 'icons/python-icon.svg',
                title: 'Python'
            },
            {
                iconUrl: 'icons/sql-icon.svg',
                title: 'SQL'
            },
        ],
    },
]