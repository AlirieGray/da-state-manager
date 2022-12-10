import { Dispatch } from 'react'
import { WorldFormAction } from '../../reducers/createWorldForm'
import {Game} from '../../types'
import {get} from 'lodash'
import TextInput from '../TextInput/TextInput'


type DA2Props = {
    gameState: Game
    onChange: Dispatch<WorldFormAction>
} 

function DA2({ gameState, onChange }: DA2Props) {
        return (
            <div className='formSection'>
                <h2> Protagonist </h2>
                <TextInput 
                    title='Name' 
                    value={get(gameState, 'protagonist.name')} 
                    handleChange={(value) => onChange({type: 'SET_DA2_PROTAG_ATTR', payload: {key: 'name', value}})} />
                <TextInput 
                    title='Class'
                    value={get(gameState, 'protagonist.class')}
                    handleChange={(value) => onChange({type: 'SET_DA2_PROTAG_ATTR', payload: {key: 'class', value}})}
                />
                <TextInput 
                    title='Summary'
                    value={get(gameState, 'protagonist.summary')}
                    handleChange={(value) => onChange({type: 'SET_DA2_PROTAG_ATTR', payload: {key: 'summary', value}})}
                />
                <h2>Act One</h2>
                <h2>Act Two</h2>
                <h2>Act Three</h2>
                <h2>Mark of the Assassin DLC</h2>
                <h2>Legacy DLC</h2>
            </div>
        )
}

export default DA2