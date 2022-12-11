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
                <TextInput 
                    title='How did Hawke deal with Ketojan?'
                    value={get(gameState, 'quests.0.decisions.ketojan')}
                    handleChange={(value) => onChange({type: 'SET_ACT_ONE_ATTR', payload: {key: 'ketojan', value}})}
                />
                <TextInput 
                    title='Did Hawke send Feynriel to the Circle or the Dalish?'
                    value={get(gameState, 'quests.0.decisions.feynriel')}
                    handleChange={(value) => onChange({type: 'SET_ACT_ONE_ATTR', payload: {key: 'feynriel', value}})}
                />
                <TextInput 
                    title='Did Hawke return Saemus to the Viscount?'
                    value={get(gameState, 'quests.0.decisions.saemus')}
                    handleChange={(value) => onChange({type: 'SET_ACT_ONE_ATTR', payload: {key: 'saemus', value}})}
                />
                <TextInput 
                    title={`What did Hawke tell Ghyslain about his wife's death?`}
                    value={get(gameState, 'quests.0.decisions.ghyslain')}
                    handleChange={(value) => onChange({type: 'SET_ACT_ONE_ATTR', payload: {key: 'ghyslain', value}})}
                />
                <h2>Act Two</h2>
                <TextInput 
                    title={`What happened to Feynriel after his ordeal in the Fade?`}
                    value={get(gameState, 'quests.1.decisions.feynriel')}
                    handleChange={(value) => onChange({type: 'SET_ACT_TWO_ATTR', payload: {key: 'feynriel', value}})}
                />
                <TextInput 
                    title={`Did Isabela return after stealing the Tome?`}
                    value={get(gameState, 'quests.1.decisions.isabelaReturn')}
                    handleChange={(value) => onChange({type: 'SET_ACT_TWO_ATTR', payload: {key: 'isabelaReturn', value}})}
                />
                <TextInput 
                    title={`Was Isabela turned over to the Arishok?`}
                    value={get(gameState, 'quests.1.decisions.isabelaArishok')}
                    handleChange={(value) => onChange({type: 'SET_ACT_TWO_ATTR', payload: {key: 'isabelaArishok', value}})}
                />
                <TextInput 
                    title={`What was the Arishok's fate?`}
                    value={get(gameState, 'quests.1.decisions.arishok')}
                    handleChange={(value) => onChange({type: 'SET_ACT_TWO_ATTR', payload: {key: 'arishok', value}})}
                />
                <h2>Act Three</h2>
                <TextInput 
                    title={`What became of the conspirators?`}
                    value={get(gameState, 'quests.2.decisions.conspirators')}
                    handleChange={(value) => onChange({type: 'SET_ACT_THREE_ATTR', payload: {key: 'conspirators', value}})}
                />
                <TextInput 
                    title={`Who did Hawke side with in the final battle?`}
                    value={get(gameState, 'quests.2.decisions.side')}
                    handleChange={(value) => onChange({type: 'SET_ACT_THREE_ATTR', payload: {key: 'side', value}})}
                />
                <h2>Mark of the Assassin DLC</h2>
                <TextInput 
                    title={`What was Tallis and Hawke's relationship?`}
                    value={get(gameState, 'quests.3.decisions.tallis')}
                    handleChange={(value) => onChange({type: 'SET_MOTA_ATTR', payload: {key: 'tallis', value}})}
                />
                {/* <h2>Legacy DLC</h2> */}
            </div>
        )
}

export default DA2