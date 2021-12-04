import { World } from "../types"

export const EDIT_FORM_SUCCESS = 'EDIT_FORM_SUCCESS'
export const EDIT_FORM_PENDING = 'EDIT_FORM_PENDING'
export const SET_UP_EDIT_FORM = 'SET_UP_EDIT_FORM'
export const ADD_CHANGE = 'ADD_CHANGE'


export type Action =
    | ReturnType<typeof editFormSuccess>
    | ReturnType<typeof editFormPending>
    | ReturnType<typeof addChange>

export const editFormSuccess = (world: World) => ({
    type: EDIT_FORM_SUCCESS,
    world,
} as const)

export const editFormPending = () => ({
    type: EDIT_FORM_PENDING,
} as const)

export const setUpEditForm = (world: World) => ({
    type: SET_UP_EDIT_FORM,
    world,
})

export const addChange = (world: World) => ({
    type: ADD_CHANGE,
    world,
})