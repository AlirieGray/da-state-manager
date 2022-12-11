import { Dispatch } from 'react'
import { WorldFormAction } from '../../reducers/createWorldForm'
import {Game} from '../../types'
import {get} from 'lodash'
import TextInput from '../TextInput/TextInput'

type OriginsProps = {
    gameState: Game
    onChange: Dispatch<WorldFormAction>
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
                <label>Did the Warden help Redcliffe prepare?</label>
                <input type="checkbox" />
                <TextInput
                    title={`What was Connor's fate?`}
                    value={get(gameState, 'quests.2.decisions.connor')}
                    handleChange={(value) => onChange({type: 'SET_REDCLIFFE_ATTR', payload: {key: 'connor', value}})} />    
                <TextInput
                    title={`What was Isolde's fate?`}
                    value={get(gameState, 'quests.2.decisions.isolde')}
                    handleChange={(value) => onChange({type: 'SET_REDCLIFFE_ATTR', payload: {key: 'isolde', value}})} />   
                <TextInput
                    title='Did the Warden rescue Bella from the castle?'
                    value={get(gameState, 'quests.2.decisions.bella')}
                    handleChange={(value) => onChange({type: 'SET_REDCLIFFE_ATTR', payload: {key: 'bella', value}})} />     
            </div>
            <h2>The Urn of Sacred Ashes</h2>
            <TextInput
                title='Did the Warden defile the Ashes of Andraste?'
                value={get(gameState, 'quests.3.decisions.defiled')}
                handleChange={(value) => onChange({type: 'SET_URN_ATTR', payload: {key: 'defiled', value}})} />
            <TextInput
                title='Did the Warden slay the High Dragon at the Temple of Sacred Ashes?'
                value={get(gameState, 'quests.3.decisions.dragon')}
                handleChange={(value) => onChange({type: 'SET_URN_ATTR', payload: {key: 'dragon', value}})} />
            <h2>Broken Circle</h2>
            <TextInput
                title='Who did the Warden support at the Circle?'
                value={get(gameState, 'quests.4.decisions.side')}
                handleChange={(value) => onChange({type: 'SET_CIRCLE_ATTR', payload: {key: 'side', value}})} />
            <TextInput
                title='Did First Enchanter Irving survive?'
                value={get(gameState, 'quests.4.decisions.irving')}
                handleChange={(value) => onChange({type: 'SET_CIRCLE_ATTR', payload: {key: 'irving', value}})} />
            <TextInput
                title={`Did the Warden agree to Cullen's request?`}
                value={get(gameState, 'quests.4.decisions.cullen')}
                handleChange={(value) => onChange({type: 'SET_CIRCLE_ATTR', payload: {key: 'cullen', value}})} />
            <h2>Nature of the Beast</h2>
            <TextInput
                title='Who did the Warden side with?'
                value={get(gameState, 'quests.5.decisions.side')}
                handleChange={(value) => onChange({type: 'SET_NATURE_OF_THE_BEAST_ATTR', payload: {key: 'side', value}})} />
            <TextInput
                title='What happened to Cammen and Gheyna?'
                value={get(gameState, 'quests.5.decisions.cammen')}
                handleChange={(value) => onChange({type: 'SET_NATURE_OF_THE_BEAST_ATTR', payload: {key: 'cammen', value}})} />
            <TextInput
                title='How did the Warden deal with Deygan?'
                value={get(gameState, 'quests.5.decisions.deygan')}
                handleChange={(value) => onChange({type: 'SET_NATURE_OF_THE_BEAST_ATTR', payload: {key: 'deygan', value}})} />
            <TextInput
                title='What was the fate of the Halla?'
                value={get(gameState, 'quests.5.decisions.halla')}
                handleChange={(value) => onChange({type: 'SET_NATURE_OF_THE_BEAST_ATTR', payload: {key: 'halla', value}})} />
            <TextInput
                title={`Did the Warden tell Athras about his wife's fate?`}
                value={get(gameState, 'quests.5.decisions.athras')}
                handleChange={(value) => onChange({type: 'SET_NATURE_OF_THE_BEAST_ATTR', payload: {key: 'athras', value}})} />
            <h2>Paragon of Her Kind</h2>
            <TextInput
                title='Who rules Orzammar?'
                value={get(gameState, 'quests.6.decisions.king')}
                handleChange={(value) => onChange({type: 'SET_PARAGON_ATTR', payload: {key: 'king', value}})} />
            <TextInput
                title='What happened to the Anvil of the Void?'
                value={get(gameState, 'quests.6.decisions.anvil')}
                handleChange={(value) => onChange({type: 'SET_PARAGON_ATTR', payload: {key: 'anvil', value}})} />
            <TextInput
                title='How did the Warden deal with Ruck?'
                value={get(gameState, 'quests.6.decisions.ruck')}
                handleChange={(value) => onChange({type: 'SET_PARAGON_ATTR', payload: {key: 'ruck', value}})} />
            <TextInput
                title='What happened to Zerlinda?'
                value={get(gameState, 'quests.6.decisions.zerlinda')}
                handleChange={(value) => onChange({type: 'SET_PARAGON_ATTR', payload: {key: 'zerlinda', value}})} />
            <h2>The Landsmeet</h2>
            <TextInput
                title='Who rules Ferelden?'
                value={get(gameState, 'quests.7.decisions.ruler')}
                handleChange={(value) => onChange({type: 'SET_LANDSMEET_ATTR', payload: {key: 'ruler', value}})} />
            <TextInput
                title='What became of Loghain?'
                value={get(gameState, 'quests.7.decisions.loghain')}
                handleChange={(value) => onChange({type: 'SET_LANDSMEET_ATTR', payload: {key: 'loghain', value}})} />
            <h2>Battle of Denerim</h2>
            <TextInput
                title='Who slew the Archdemon?'
                value={get(gameState, 'quests.8.decisions.archdemon')}
                handleChange={(value) => onChange({type: 'SET_BATTLE_DENERIM_ATTR', payload: {key: 'archdemon', value}})} />
            <TextInput
                title={`Did the Warden agree to complete Morrigan's dark ritual?`}
                value={get(gameState, 'quests.8.decisions.ritual')}
                handleChange={(value) => onChange({type: 'SET_BATTLE_DENERIM_ATTR', payload: {key: 'ritual', value}})} />
        </div>
    )
}

export default Origins