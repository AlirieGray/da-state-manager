export interface World {
    name: string
    ID: string
    wip: boolean
    summary: string
    active: boolean
    fanWorks: string[]
    games: Game[]
}

export interface CreateWorldForm extends Omit<World, 'ID'> {}

export interface Decision {
    name: string 
    choice: string
}

export interface Quest {
    name: string
    decisions: Decision[]
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
