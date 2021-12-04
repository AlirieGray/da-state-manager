
export interface World {
    name: string
    ID: string
    ficLinks: string[]
    warden: Warden
    hawke: Hawke
    inky: Inky
}

export interface Protagonist {
    name: string
    class: string
    romance: string
}

export interface Warden extends Protagonist {
    origin: string
    ruler: string
    alive: boolean
}

export interface Hawke extends Protagonist  {
    sided: string
}

export interface Inky extends Protagonist  {
    disband: boolean
}

export interface WorldsState {
    worlds: World[],
}

export interface OverlaysState {
    editOverlayOn: boolean 
}

export interface WorldViewState {
    status: null | string
    world: World
}

export interface WorldEditState {
    status: null | string
    world: null | World
    changed: null | boolean
}

export interface WorldFormState {
    view: WorldViewState
    edit: WorldEditState
}


export interface AppState {
    worlds: WorldsState
    worldForm: WorldFormState
    overlays: OverlaysState
}
