
import React, { Dispatch } from 'react'
import { CreateWorldForm, PageViewType, WorldFormAction} from '../../types'
import {Link} from 'react-router-dom'
import Origins from './Origins'
import DA2 from './DA2'
import { get } from 'lodash'
import Inquisition from './Inquisition'
import TextInput from '../TextInput/TextInput'
import './worldForm.css'

type Props = {
    view: PageViewType
    handleSubmit: () => void
    state: CreateWorldForm
    dispatch: Dispatch<WorldFormAction>
    id?: string
}

// todo: useReducer for login and auth
// todo: use different reducers depending on props view
// todo: store form state in local storage ? and use context
// todo: restructure to use same types for create and edit (?)
// TODO: add link to view IFF view type is editing, not creating

function WorldForm({view, id, handleSubmit, state, dispatch}: Props) {
    let imgLink: string = ''
    const stateImgLink = get(state, 'imgLink')
    if (typeof stateImgLink !== 'undefined') {
        imgLink = stateImgLink
    }

    return (
        <div className='worldFormContainer'>
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
                            multiLine={true}
                            handleChange={(value) => {dispatch({type: 'SET_WORLD_SUMMARY', payload: value})}}/>
                        <TextInput 
                            title='Public Image Link' 
                            value={imgLink} 
                            handleChange={(value) => {dispatch({type: 'SET_WORLD_IMG', payload: value})}}/>
                        <label> Save as work in progress? </label>
                        <input type='checkbox' />
                    </div>
                    <div className='formButtons'>
                        <button onClick={() => dispatch({type: 'CLEAR_FORM'})} className='formButton'> CLEAR FORM </button>
                        <button type="submit" className='formButton'> SUBMIT </button>
                        {(view === PageViewType.EDITING && id !== undefined) && 
                            <Link to={`/world/${id}/view`} className='viewLink'> VIEW </Link>}
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