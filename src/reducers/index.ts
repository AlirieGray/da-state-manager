import { combineReducers } from "redux";
import worlds from "./worlds";
import overlays from './overlays'
import worldForm from './worldForm'
import { AppState } from '../types'

 
export default combineReducers<AppState>({worlds, overlays, worldForm})