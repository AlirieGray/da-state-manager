export interface World {
    name: string
    ID: string
    imgLink?: string
    wip: boolean
    summary: string
    active: boolean
    fanWorks: string[]
    games: Game[]
}

export interface CreateWorldForm extends Omit<World, 'ID'> {}

export interface Decisions {
    [key: string]: string
}

export interface CompanionMap {
    [key: string]: number
}

export interface Quest {
    name: string
    decisions: Decisions
    companions?: string[]
}

export interface Game {
    name: string
    protagonist: Protagonist
    quests: Quest[]
}

export interface Protagonist {
    name: string
    class: string
    origin?: string
    romances: string[]
    companions: string[]
    rivals: string[]
    summary: string
}
