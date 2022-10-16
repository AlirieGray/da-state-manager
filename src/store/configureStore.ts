// import { applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux'
import rootReducer from '../reducers/index'
import { AppState } from '../types'
import throttle from 'lodash/throttle'
// import { initialState as initialWorldsState } from '../reducers/worlds'
// import { initialState as initialWorldForm } from '../reducers/worldForm'
// import { initialState as initialOverlays } from '../reducers/overlays'
import { loadState, saveState } from './localStorage'

// const initialState: AppState = {
//     worlds: initialWorldsState(),
//     worldForm: initialWorldForm(),
//     overlays: initialOverlays(),
// }

const persistedState = loadState()

const store = createStore(
    rootReducer,
    persistedState,
    // composeWithDevTools(applyMiddleware(...[thunkMiddleware]))
)

store.subscribe(throttle(() => {
    saveState({
        worlds: store.getState().worlds,
    })
}))

export default store