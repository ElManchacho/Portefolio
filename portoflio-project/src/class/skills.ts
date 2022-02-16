import {Project} from './projet'

export interface Skill {
    id?: string,
    title?:string,
    projects?:Array<Project>
}
