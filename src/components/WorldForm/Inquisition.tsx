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
            <h2>Champions of the Just</h2>
            <TextInput
                title='Did the Templars assist the Inquisition?'
                value={get(gameState, 'quests.1.decisions.templars')}
                handleChange={(value) => onChange({type: 'SET_COTJ_ATTR', payload: {key: 'templars', value}})} />
            <TextInput
                title='What became of Ser Barris?'
                value={get(gameState, 'quests.1.decisions.barris')}
                handleChange={(value) => onChange({type: 'SET_COTJ_ATTR', payload: {key: 'barris', value}})} />
            <h2>In Hushed Whispers</h2>
            <TextInput
                title='Did the mages assist the Inquisition?'
                value={get(gameState, 'quests.2.decisions.mages')}
                handleChange={(value) => onChange({type: 'SET_IHW_ATTR', payload: {key: 'mages', value}})} />
            <TextInput
                title='Did Dorian join the Inquisition?'
                value={get(gameState, 'quests.2.decisions.dorian')}
                handleChange={(value) => onChange({type: 'SET_IHW_ATTR', payload: {key: 'dorian', value}})} />
            <h2>Here Lies the Abyss</h2>
            <TextInput
                title='What became of the Grey Wardens?'
                value={get(gameState, 'quests.3.decisions.gw')}
                handleChange={(value) => onChange({type: 'SET_HLTA_ATTR', payload: {key: 'gw', value}})} />
            <TextInput
                title='Who sacrified themselves to stop the Nightmare Demon?'
                value={get(gameState, 'quests.3.decisions.sacrifice')}
                handleChange={(value) => onChange({type: 'SET_HLTA_ATTR', payload: {key: 'sacrifice', value}})} />
            <h2>Wicked Eyes and Wicked Hearts</h2>
            <TextInput
                title='Who is the ruling monarch of Orlais?'
                value={get(gameState, 'quests.4.decisions.ruler')}
                handleChange={(value) => onChange({type: 'SET_WEWH_ATTR', payload: {key: 'ruler', value}})} />
            <TextInput
                title='What became of Grand Duchess Florianne?'
                value={get(gameState, 'quests.4.decisions.florianne')}
                handleChange={(value) => onChange({type: 'SET_WEWH_ATTR', payload: {key: 'florianne', value}})} />
            <h2>What Pride Had Wrought</h2>
            <TextInput
                title='Who drank from the Well of Sorrows?'
                value={get(gameState, 'quests.5.decisions.well')}
                handleChange={(value) => onChange({type: 'SET_WPHW_ATTR', payload: {key: 'well', value}})} />
            <TextInput
                title='How did the Inquisitor handle the rituals and the guardians of the Temple of Mythal?'
                value={get(gameState, 'quests.5.decisions.ritual')}
                handleChange={(value) => onChange({type: 'SET_WPHW_ATTR', payload: {key: 'ritual', value}})} />
            <h2>Doom Upon All the World</h2>
            <TextInput
                title='Who became the next Divine?'
                value={get(gameState, 'quests.6.decisions.divine')}
                handleChange={(value) => onChange({type: 'SET_DUATW_ATTR', payload: {key: 'divine', value}})} />
            <h2>Trespasser DLC</h2>
            <TextInput
                title='What was the final fate of the Inquisition?'
                value={get(gameState, 'quests.7.decisions.divine')}
                handleChange={(value) => onChange({type: 'SET_DUATW_ATTR', payload: {key: 'divine', value}})} />
            <TextInput
                title={`What was the Inquisitor's final goal regarding Solas?`}
                value={get(gameState, 'quests.7.decisions.divine')}
                handleChange={(value) => onChange({type: 'SET_DUATW_ATTR', payload: {key: 'divine', value}})} />
        </div>
    )
}

export default Inquisition