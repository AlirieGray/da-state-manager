import { defaultWorld } from './worlds'
import { WorldViewState, WorldEditState, WorldFormState } from '../types'
import { Action, EDIT_FORM_PENDING, EDIT_FORM_SUCCESS, ADD_CHANGE, SET_UP_EDIT_FORM} from '../actions/worldForm'
import { combineReducers } from 'redux'



const initialState = {
    view: {
        status: null,
        world: defaultWorld(),
    },
    edit: {
        status: null,
        world: null,
        changed: null,
    }
}


const viewReducer = (state = initialState.view, action: Action): WorldViewState => {
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

const editReducer = (state = initialState.edit, action: Action): WorldEditState => {
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

export default combineReducers<WorldFormState>({
    view: viewReducer,
    edit: editReducer,
})