
import React, { Dispatch } from 'react'
import { Tooltip as ReactTooltip } from "react-tooltip"
import { CreateWorldForm, PageViewType, WorldFormAction} from '../../types'
import { Link } from 'react-router-dom'
import Origins from './Origins'
import DA2 from './DA2'
import { get } from 'lodash'
import Inquisition from './Inquisition'
import TextInput from '../TextInput/TextInput'
import './worldForm.css'
import qMark from '../../images/question.png'

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
// TODO: multi-column view for wide screen, long column for mobile

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
                    <div className='formInputs'>
                        <TextInput 
                            title='World State Name' 
                            value={get(state, 'name')} 
                            required={true}
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
                        {/* <label> Save as work in progress? </label>
                        <input type='checkbox' /> */}
                    </div>
                    <div className='formButtons'>
                    {(view === PageViewType.CREATING) && 
                        <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.preventDefault()
                            dispatch({type: 'CLEAR_FORM'})
                            
                            }} className='formButton'> CLEAR FORM </button>}
                        {(view === PageViewType.EDITING && id !== undefined) && 
                            <Link to={`/world/${id}/view`} className='viewLink'> VIEW </Link>}
                        <button type="submit" className='formButton'> SUBMIT </button>
                    </div>
                </div>
                <div className='selectGameButtonWrapper'>
                    <div className='selectLabel'>
                        Select game <img src={qMark} style={{height:"25px", paddingLeft:'6px'}} alt="Tooltip question mark" data-tooltip-id="select-game" />
                    </div>
                    <div className="selectGameButtons">
                        <button className={((state.activeGame === 0) ? 'selectedGameButton' : 'selectGameButton')} onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.preventDefault()
                            dispatch({type: 'SET_ACTIVE_GAME', payload: 0})
                            
                            }}>Origins</button>
                        <button className={((state.activeGame === 1) ? 'selectedGameButton' : 'selectGameButton')} onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.preventDefault()
                            dispatch({type: 'SET_ACTIVE_GAME', payload: 1})
                            
                            }}>DA2</button>
                        <button className={((state.activeGame === 2) ? 'selectedGameButton' : 'selectGameButton')} onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.preventDefault()
                            dispatch({type: 'SET_ACTIVE_GAME', payload: 2})
                        }}>Inquisition</button>
                        <ReactTooltip
                            id="select-game"
                            place="right"
                            content="Select which game you'd like to set decisions for. You may switch between games at any time while working on this world state without losing progress."
                        />
                    </div>
                </div>
                <div className='gamesWrapper'>
                    {state.activeGame === 0 && <Origins gameState={get(state, 'games.0')} onChange={dispatch}/>}
                   {state.activeGame === 1 && <DA2 gameState={get(state, 'games.1')} onChange={dispatch}/>}
                    {state.activeGame === 2 && <Inquisition gameState={get(state, 'games.2')} onChange={dispatch} />}
                </div>

            </form>

        </div>
        
    )
}

export default WorldForm