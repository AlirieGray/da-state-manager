import { Dispatch } from 'react'
import { CreateWorldFormAction } from '../../reducers/createWorldForm'
import {Game} from '../../types'
import {get} from 'lodash'
import TextInput from '../TextInput/TextInput'

type OriginsProps = {
    gameState: Game
    onChange: Dispatch<CreateWorldFormAction>
} 

// todo: checkboxes for yes/no choices (ex. helped redcliffe prepare, stop/redeem solas, etc)

function Origins({ gameState, onChange }: OriginsProps) {
    return (
        <div className='formSection'>
            <h2> Protagonist </h2>
                <TextInput
                    title='Name'
                    value={get(gameState, 'protagonist.name')}
                    handleChange={(value) => onChange({type: 'SET_ORIGINS_PROTAG_ATTR', payload: {key: 'name', value}})} />
                <TextInput
                    title='Class'
                    value={get(gameState, 'protagonist.class')}
                    handleChange={(value) => onChange({type: 'SET_ORIGINS_PROTAG_ATTR', payload: {key: 'class', value}})} />
                <TextInput
                    title='Origin'
                    value={get(gameState, 'protagonist.origin')}
                    handleChange={(value) => onChange({type: 'SET_ORIGINS_PROTAG_ATTR', payload: {key: 'origin', value}})} />
                <TextInput
                    title='Summary'
                    value={get(gameState, 'protagonist.summary')}
                    handleChange={(value) => onChange({type: 'SET_ORIGINS_PROTAG_ATTR', payload: {key: 'summary', value}})} />
            <h2>Redcliffe</h2>
                <div>
                    <label>Helped Recliffe prepare?</label>
                    <input type="checkbox" />
                </div>
            <h2>The Urn of Sacred Ashes</h2>
            <h2>Broken Circle</h2>
            <h2>Nature of the Beast</h2>
            <h2>Paragon of Her Kind</h2>
            <h2>The Landsmeet</h2>
            <h2>Battle of Denerim</h2>
            <h2>Awakening DLC</h2>
        </div>
    )
}

export default Origins