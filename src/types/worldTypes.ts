export interface World {
    name: string
    ID: string
    wip: boolean
    summary: string
    active: boolean
    ficLinks: string[]
    games: Game[]
}

export interface Decision {
    name: string 
    choice: string
}

export interface Quest {
    name: string
    decisions: Decision[]
}

export interface Game {
    name: string
    protagonist: Protagonist
    quests: Quest[]
}

export interface Protagonist {
    name: string
    class: string
    origin: string
    romances: string[]
    companions: string[]
    rivals: string[]
    summary: string
}
