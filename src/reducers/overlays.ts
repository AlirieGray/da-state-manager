import { OverlaysState } from "../types"
import { Action, SHOW_EDIT_OVERLAY, HIDE_EDIT_OVERLAY } from '../actions/overlays'

const initialState = (): OverlaysState => ({
    editOverlayOn: false,
})

export default (state: OverlaysState = initialState(), action: Action) => {
    switch (action.type) {
        case SHOW_EDIT_OVERLAY: {
            return {
                ...state,
                editOverlayOn: true,
            }
        }
        case HIDE_EDIT_OVERLAY: {
            return {
                ...state,
                editOverlayOn: false,
            }
        }
        default:
            return state
    }
}