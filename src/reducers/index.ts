import { combineReducers } from "redux";
import worlds from "./worlds";
import { AppState } from '../types'

 
export default combineReducers<AppState>({worlds})