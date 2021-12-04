import {World} from '../types'

export const ADD_WORLD_STATE = 'ADD_WORLD_STATE'
export const SET_WORLD_STATE = 'SET_WORLD_STATE'
export const REMOVE_WORLD_STATE = 'REMOVE_WORLD_STATE'

export type Action =
    | ReturnType<typeof addWorldState>
    | ReturnType<typeof setWorldState>
    | ReturnType<typeof removeWorldState>

// addWorldState adds a default world to the worldsState array
// it can be edited later 
export const addWorldState = () => ({
    type: ADD_WORLD_STATE,
} as const)

export const setWorldState = (ID: string, world: World) => ({
    type: SET_WORLD_STATE,
    ID,
    world,
} as const)

export const removeWorldState = (ID: string) => ({
    type: REMOVE_WORLD_STATE,
    ID,
} as const)