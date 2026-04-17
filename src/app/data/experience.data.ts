import { ExperienceModel } from "../models/experience.model";

export const EXPERIENCE: ExperienceModel[] = [
   {
        companyURL: "https://www.irede.org.br/",
        startDate: "JUL",
        endDate: "DEZ 2024",
        title: "Bolsista em Desenvolvimento Android - IREDE",
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
        startDate: "FEV 2025",
        endDate: "FEV 2026",
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
     {
        companyURL: "https://lsbd.ufc.br/",
        startDate: "FEV 2026",
        endDate: "ATUAL",
        title: "Estagiário em Desenvolvimento Web - Laboratório de Sistemas e Banco de Dados da UFC",
        description: "Responsável pelo desenvolvimento de aplicações robustas e escaláveis, utilizando .NET para a construção de backends eficientes e React com TypeScript para criar interfaces dinâmicas e tipadas. Atuo diretamente na execução das metas do projeto alocado , garantindo a entrega de código limpo.",
        tags: [
            {
                iconUrl: 'icons/dotnet-icon.svg',
                title: '.NET'
            },
            {
                iconUrl: 'icons/react-icon.svg',
                title: 'React'
            },
             {
                iconUrl: 'icons/postgresql-icon.svg',
                title: 'PostgreSQL'
            },
             {
                iconUrl: 'icons/typescript-icon.svg',
                title: 'TypeScript'
            },
        ],
    },
]