import { AppState } from "../types";

export function getFormView(state: AppState) {
    return state.worldForm.view.world;
  }
  
  export function getFormEdit(state: AppState) {
    return state.worldForm.edit.world;
  }
  
  export function getHasChanged(state: AppState) {
    return state.worldForm.edit.changed;
  }