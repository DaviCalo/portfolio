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
]