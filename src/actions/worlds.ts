import {World} from '../types'

export const ADD_WORLD_STATE = 'ADD_WORLD_STATE'
export const SET_WORLD_STATE = 'SET_WORLD_STATE'

export type Action =
    | ReturnType<typeof addWorldState>
    | ReturnType<typeof setWorldState>

// addWorldState adds a default world to the worldsState array
// it can be edited later 
export const addWorldState = () => ({
    type: ADD_WORLD_STATE,
})

export const setWorldState = () => ({
    type: SET_WORLD_STATE,
})