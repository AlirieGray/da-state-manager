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
                <div className='questSection'>
                    <h2> Protagonist </h2>
                    <TextInput 
                        title='Name' 
                        value={get(gameState, 'protagonist.name')} 
                        handleChange={(value) => onChange({type: 'SET_DA2_PROTAG_ATTR', payload: {key: 'name', value}})} />
                    <TextInput 
                        title='Class'
                        value={get(gameState, 'protagonist.class')}
                        suggestedValues={['Mage', 'Rogue', 'Warrior']}
                        handleChange={(value) => onChange({type: 'SET_DA2_PROTAG_ATTR', payload: {key: 'class', value}})}
                    />
                    <TextInput 
                        title='Summary'
                        multiLine={true}
                        value={get(gameState, 'protagonist.summary')}
                        handleChange={(value) => onChange({type: 'SET_DA2_PROTAG_ATTR', payload: {key: 'summary', value}})}
                    />
                </div>
                <div className='questSection'>
                    <h2>Act One</h2>
                    <TextInput 
                        title='How did Hawke deal with Ketojan?'
                        value={get(gameState, 'quests.0.decisions.ketojan')}
                        suggestedValues={[
                            'Hawke defended Ketojan from the Qunari, and then Ketojan took his own life',
                            'Hawke handed Ketojan over to the Qunari'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_ACT_ONE_ATTR', payload: {key: 'ketojan', value}})}
                    />
                    <TextInput 
                        title='Did Hawke send Feynriel to the Circle or the Dalish?'
                        value={get(gameState, 'quests.0.decisions.feynriel')}
                        suggestedValues={[
                            'Hawke sent Feynriel to the Dalish',
                            'Hawke sent Feynriel to the Circle'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_ACT_ONE_ATTR', payload: {key: 'feynriel', value}})}
                    />
                    <TextInput 
                        title='Did Hawke return Saemus to the Viscount?'
                        value={get(gameState, 'quests.0.decisions.saemus')}
                        suggestedValues={[
                            'Saemus was rescued from the mercenary group determined to hold him hostage',
                            'Saemus was not returned to his father'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_ACT_ONE_ATTR', payload: {key: 'saemus', value}})}
                    />
                    <TextInput 
                        title={`What did Hawke tell Ghyslain about his wife's death?`}
                        value={get(gameState, 'quests.0.decisions.ghyslain')}
                        suggestedValues={[
                            'Hawke did not find Ninette',
                            `Hawke told Ghyslain that his wife had died, but spared him the grisly details`,
                            `Hawke told Ghyslain the full truth of his wife's death`
                        ]}
                        handleChange={(value) => onChange({type: 'SET_ACT_ONE_ATTR', payload: {key: 'ghyslain', value}})}
                    />
                </div>
                <div className='questSection'>
                    <h2>Act Two</h2>
                    <TextInput 
                        title={`What happened to Feynriel after his ordeal in the Fade?`}
                        value={get(gameState, 'quests.1.decisions.feynriel')}
                        suggestedValues={[
                            'Feynriel left for Tevinter',
                            'Feynriel was made Tranquil',
                            'Feynriel became possessed'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_ACT_TWO_ATTR', payload: {key: 'feynriel', value}})}
                        />
                    <TextInput 
                        title={'Did Hawke side with Petrice?'}
                        value={get(gameState, 'quests.1.decisions.petrice')}
                        suggestedValues={[
                            'Petrice received no aid from Hawke in her plans to villify the Qunari of Kirkwall', 
                            `With Hawke's help, Petrice was able to blame the death of the Viscount's son on the Qunari.`
                        ]}
                        handleChange={(value) => onChange({type: 'SET_ACT_TWO_ATTR', payload: {key: 'petrice', value}})}
                    />
                    <TextInput 
                        title={`Did Isabela return after stealing the Tome?`}
                        value={get(gameState, 'quests.1.decisions.isabelaReturn')}
                        suggestedValues={[
                            'Isabela left for good with the stolen Tome',
                            'Isabela returned the Tome to Hawke and the Qunari'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_ACT_TWO_ATTR', payload: {key: 'isabelaReturn', value}})}
                    />
                    <TextInput 
                        title={`Was Isabela turned over to the Arishok?`}
                        value={get(gameState, 'quests.1.decisions.isabelaArishok')}
                        suggestedValues={[
                            'Hawke did not turn Isabela over to the Arishok, resulting in a violent conflict',
                            'Hawke turned Isabela over to the Arishok.'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_ACT_TWO_ATTR', payload: {key: 'isabelaArishok', value}})}
                    />
                    <TextInput 
                        title={`What was the Arishok's fate?`}
                        value={get(gameState, 'quests.1.decisions.arishok')}
                        suggestedValues={[
                            'Hawke defeated the Arishok in single combat',
                            'Hawke killed the Arishok in an all-out battle',
                            'The Arishok returned to Par Vollen with his Antaam'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_ACT_TWO_ATTR', payload: {key: 'arishok', value}})}
                    />
                </div>
                <div className='questSection'>
                    <h2>Act Three</h2>
                    <TextInput 
                        title={`What became of the conspirators?`}
                        value={get(gameState, 'quests.2.decisions.conspirators')}
                        suggestedValues={[
                            'Hawke handed the conspirators to Orsino, allowing the First Enchanter to deal with them away from Templar eyes',
                            `Hawke presented the conspirators to Meredith, confirming the knight-commander's fears`
                        ]}
                        handleChange={(value) => onChange({type: 'SET_ACT_THREE_ATTR', payload: {key: 'conspirators', value}})}
                    />
                    <TextInput 
                        title={`Who did Hawke side with in the final battle?`}
                        value={get(gameState, 'quests.2.decisions.side')}
                        suggestedValues={[
                            'Hawke went to the defense of the mages as the Gallows burned',
                            'The templars counted on the Champion of Kirkwall as an ally while they put down the rebellious mages'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_ACT_THREE_ATTR', payload: {key: 'side', value}})}
                    />
                </div>
                <div className='questSection'>
                    <h2>Mark of the Assassin DLC</h2>
                    <TextInput 
                        title={`What was Tallis and Hawke's relationship?`}
                        value={get(gameState, 'quests.3.decisions.tallis')}
                        suggestedValues={[
                            'Hawke did not encounter Tallis',
                            'Hawke and Tallis parted on amicable terms',
                            'Hawke and Tallis shared a kiss before they parted',
                            'Hawke and Tallis fundamentally disagreed about her ultimate objective and how it related to the Qunari'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_MOTA_ATTR', payload: {key: 'tallis', value}})}
                    />
                </div>
                {/* <h2>Legacy DLC</h2> */}
            </div>
        )
}

export default DA2