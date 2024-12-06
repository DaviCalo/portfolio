import { TagModel } from "./tag.model";

export interface ExperienceModel {
    companyURL: string
    startDate: string
    endDate: string
    title: string
    description: string
    tags: TagModel[] 
}