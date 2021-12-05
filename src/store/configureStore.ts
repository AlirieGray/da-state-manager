import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux'
import rootReducer from '../reducers/index'
import { AppState } from '../types'
import { initialState as initialWorldsState } from '../reducers/worlds'
import { initialState as initialWorldForm } from '../reducers/worldForm'
import { initialState as initialOverlays } from '../reducers/overlays'

const initialState: AppState = {
    worlds: initialWorldsState(),
    worldForm: initialWorldForm(),
    overlays: initialOverlays(),
}

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...[thunkMiddleware]))
)

export type AppDispatch = typeof store.dispatch

export default store