import {getFormEdit, getFormView} from '../selectors/worldForm';
import { editFormSuccess, editFormPending, setNewEditableForm} from '../actions/worldForm';
import { AppDispatch } from '../store/configureStore'

export function setupForm() {
  return function _setupForm(dispatch: AppDispatch, getState: any) {
    const form = getFormView(getState());
    dispatch(setNewEditableForm(form));
  }
}

// TODO: getState function type??
export function saveForm() {
  return function _saveForm(dispatch: AppDispatch, getState: any) {
    dispatch(editFormPending());
    const form = getFormEdit(getState());
    dispatch(editFormSuccess(form));
  }
}