import {World} from '../types'

export const ADD_WORLD_STATE = 'ADD_WORLD_STATE'
export const SET_WORLD_STATE = 'SET_WORLD_STATE'

export type Action =
    | ReturnType<typeof addWorldState>
    | ReturnType<typeof setWorldState>

export const addWorldState = (world: World) => ({
    type: ADD_WORLD_STATE,
    payload: world,
})

export const setWorldState = () => ({
    type: SET_WORLD_STATE,
})