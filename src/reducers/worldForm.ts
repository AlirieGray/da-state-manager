import { defaultWorld } from './worlds'
import { WorldViewState, WorldEditState, WorldFormState, World } from '../types'
import { Action, EDIT_FORM_PENDING, EDIT_FORM_SUCCESS, ADD_CHANGE, SET_UP_EDIT_FORM, SAVE_CHANGES} from '../actions/worldForm'
import { combineReducers } from 'redux'


export const initialState = (): WorldFormState => ({
    view: {
        status: null,
        world: defaultWorld(),
    },
    edit: {
        status: null,
        world: null,
        changed: null,
    }
})


const viewReducer = (state: WorldViewState = initialState().view, action: Action) => {
    switch (action.type) {
        case EDIT_FORM_SUCCESS:
            return {
                ...state,
                status: EDIT_FORM_SUCCESS,
                world: action.world,
            }
        default:
            return state
    }
}

const editReducer = (state: WorldEditState = initialState().edit, action: Action) => {
    switch (action.type) {
        case ADD_CHANGE:
            return {
                ...state,
                changed: true,
                world: action.world,
            }
        case SET_UP_EDIT_FORM:
            return {
                ...state,
                changed: false,
                world: action.world,
            }
        case SAVE_CHANGES:
            return {
                ...state,
                changed: false,
                world: action.world,
                status: EDIT_FORM_SUCCESS,
            }
        case EDIT_FORM_PENDING:
            return {
                ...state,
                status: EDIT_FORM_PENDING,
            }
        case EDIT_FORM_SUCCESS:
            return {
                ...state,
                changed: false,
                world: action.world,
                status: EDIT_FORM_SUCCESS,
            }
        default:
            return state
    }
}

export default combineReducers({
    view: viewReducer,
    edit: editReducer,
})