import { Dispatch } from 'react'
import { WorldFormAction } from '../../reducers/createWorldForm'
import {Game} from '../../types'
import {get} from 'lodash'
import TextInput from '../TextInput/TextInput'

type InquisitionProps = {
    gameState: Game
    onChange: Dispatch<WorldFormAction>
} 

// todo: checkboxes for yes/no choices (ex. helped redcliffe prepare, stop/redeem solas, etc)

function Inquisition({ gameState, onChange }: InquisitionProps) {
    return (
        <div className='formSection'>
            <h2> Protagonist </h2>
                <TextInput
                    title='Name'
                    value={get(gameState, 'protagonist.name')}
                    handleChange={(value) => onChange({type: 'SET_INQ_PROTAG_ATTR', payload: {key: 'name', value}})} />
                <TextInput
                    title='Class'
                    value={get(gameState, 'protagonist.class')}
                    handleChange={(value) => onChange({type: 'SET_INQ_PROTAG_ATTR', payload: {key: 'class', value}})} />
                <TextInput
                    title='Origin'
                    value={get(gameState, 'protagonist.origin')}
                    handleChange={(value) => onChange({type: 'SET_INQ_PROTAG_ATTR', payload: {key: 'origin', value}})} />
                <TextInput
                    title='Summary'
                    value={get(gameState, 'protagonist.summary')}
                    handleChange={(value) => onChange({type: 'SET_INQ_PROTAG_ATTR', payload: {key: 'summary', value}})} />
            <h2>In Your Heart Shall Burn</h2>
            <h2>In Hushed Whispers</h2>
            <h2>Champions of the Just</h2>
            <h2>Here Lies the Abyss</h2>
            <h2>Wicked Eyes and Wicked Hearts</h2>
            <h2>What Pride Had Wrought</h2>
            <h2>Doom Upon All the World</h2>
            <h2>Trespasser DLC</h2>
        </div>
    )
}

export default Inquisition