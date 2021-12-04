import { createStore, combineReducers } from 'redux'
import rootReducer from '../reducers'


export default function configureStore() {
  const store = createStore(rootReducer)
}