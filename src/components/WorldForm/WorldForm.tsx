
import {CreateWorldForm, PageViewType} from '../../types'
import React, { Dispatch } from 'react'
import { WorldFormAction } from '../../reducers/createWorldForm'
import Origins from './Origins'
import DA2 from './DA2'
import {get} from 'lodash'
import Inquisition from './Inquisition'
import TextInput from '../TextInput/TextInput'
import './worldForm.css'

type Props = {
    view: PageViewType
    handleSubmit: () => void //formState: CreateWorldForm
    state: CreateWorldForm
    dispatch: Dispatch<WorldFormAction>
}


// todo: handle multi-select options (such as romances, companions)
// pre load with default values
// todo: move reducer hook to hooks directory
// todo: useReducer for login and auth
// todo: use different reducers depending on props view
// todo: store form state in local storage ? and use context
// todo: RESTYLE
// todo: restructure to use same types for create and edit (?)

function WorldForm({handleSubmit, state, dispatch}: Props) {
    return (
        <div>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault()
                handleSubmit()}} 
                className='formWrapper'>
                <div className='formHeader'>
                    <div>
                        <TextInput 
                            title='World State Name' 
                            value={get(state, 'name')} 
                            handleChange={(value) => {dispatch({type: 'SET_WORLD_NAME', payload: value})}}/>
                        <TextInput 
                            title='Summary'
                            value={get(state, 'summary')} 
                            handleChange={(value) => {dispatch({type: 'SET_WORLD_SUMMARY', payload: value})}}/>
                        <label> Save as work in progress? </label>
                        <input type='checkbox' />
                    </div>
                    <div className='formButtons'>
                        <button onClick={() => dispatch({type: 'CLEAR_FORM'})} className='clearButton'> CLEAR FORM </button>
                        <button type="submit" className='submit'> SUBMIT </button>
                    </div>
                </div>
                <div className='gamesWrapper'>
                    <div >
                        <h1>Origins</h1>
                        <Origins gameState={get(state, 'games.0')} onChange={dispatch}/>
                    </div>
                    <div >
                        <h1>Dragon Age 2</h1>
                        <DA2 gameState={get(state, 'games.1')} onChange={dispatch}/>
                    </div>
                    <div >
                        <h1>Dragon Age Inquisition</h1>
                        <Inquisition gameState={get(state, 'games.2')} onChange={dispatch} />
                    </div>
                </div>

            </form>

        </div>
        
    )
}

export default WorldForm