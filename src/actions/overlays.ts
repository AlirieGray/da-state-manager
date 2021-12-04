export const SHOW_EDIT_OVERLAY = 'SHOW_EDIT_OVERLAY'
export const HIDE_EDIT_OVERLAY = 'HIDE_EDIT_OVERLAY'

export type Action = 
    | ReturnType<typeof showEditOverlay>
    | ReturnType<typeof hideEditOverlay>

export const showEditOverlay = () => ({
    type: SHOW_EDIT_OVERLAY,
} as const)

export const hideEditOverlay = () => ({
    type: HIDE_EDIT_OVERLAY,
} as const)