import { Dispatch } from 'react'
import { Game, WorldFormAction} from '../../types'
import { get } from 'lodash'
import TextInput from '../TextInput/TextInput'

type InquisitionProps = {
    gameState: Game
    onChange: Dispatch<WorldFormAction>
} 

function Inquisition({ gameState, onChange }: InquisitionProps) {
    return (
        <div className='formSection'>
            <div>
                <div className='questSection'>
                    <h2> Protagonist </h2>
                    <TextInput
                        title='Name'
                        value={get(gameState, 'protagonist.name')}
                        handleChange={(value) => onChange({type: 'SET_INQ_PROTAG_ATTR', payload: {key: 'name', value}})} />
                    <TextInput
                        title='Class'
                        value={get(gameState, 'protagonist.class')}
                        suggestedValues={['Mage', 'Rogue', 'Rouge (archer)','Rouge (dual-wield)', 'Warrior', 'Warrior (sword and shield)', 'Warrior (two-handed weapons)']}
                        handleChange={(value) => onChange({type: 'SET_INQ_PROTAG_ATTR', payload: {key: 'class', value}})} />
                    <TextInput
                        title='Origin'
                        value={get(gameState, 'protagonist.origin')}
                        suggestedValues={[
                            'Dalish elf',
                            'Circle mage',
                            'Apostate mage',
                            'Tal-Vashoth',
                            'Qunari',
                            'Carta dwarf'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_INQ_PROTAG_ATTR', payload: {key: 'origin', value}})} />
                    <TextInput
                        title='Summary'
                        multiLine={true}
                        value={get(gameState, 'protagonist.summary')}
                        handleChange={(value) => onChange({type: 'SET_INQ_PROTAG_ATTR', payload: {key: 'summary', value}})} />
                </div>
                <div className='questSection'>
                    <h2>Companions</h2>
                    <TextInput
                        title={`What became of Vivienne?`}
                        value={get(gameState, 'quests.8.decisions.vivienne')}
                        suggestedValues={[
                            `Vivienne became Divine Victoria after Corypheus was defeated.`,
                            'Vivienne became Grand Enchanter',       
                        ]}
                        handleChange={(value) => onChange({type: 'SET_INQ_COMPANION_ATTR', payload: {key: 'vivienne', value}})} 
                    />

                    <TextInput
                        title={`Did Cassandra rebuild the Seekers?`}
                        value={get(gameState, 'quests.8.decisions.seekers')}
                        suggestedValues={[
                            `Cassandra did not rebuild the Seekers of Truth`,
                            'Cassandra worked to rebuild the Seekers of Truth.',       
                        ]}
                        handleChange={(value) => onChange({type: 'SET_INQ_COMPANION_ATTR', payload: {key: 'seekers', value}})} 
                    />

                    <TextInput
                        title={`What happened to Bull's Chargers?`}
                        value={get(gameState, 'quests.8.decisions.chargers')}
                        suggestedValues={[
                            `The Chargers were sacrificed, and the Inquisition forged and alliance with the Qunari`,
                            'The Chargers were saved',
                            'The Inquisitor did not attempt to forge an alliance with the Qunari.'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_INQ_COMPANION_ATTR', payload: {key: 'chargers', value}})} 
                    />
                    <TextInput
                        title={`What became of Iron Bull?`}
                        value={get(gameState, 'quests.8.decisions.ironbull')}
                        suggestedValues={[
                            `Hissrad attacked the Inquisitor at the behest of his Qunari superiors, and the Inquisitor slew him.`,
                            `Iron Bull continued to lead his Chargers into battle throughout Ferelden and Orlais.`,
                            `Iron Bull remained at the Inquisitor's side for many years.`,
                            `Iron Bull enters a relationship with Dorian that continues even after his return to Tevinter`
                        ]}
                        handleChange={(value) => onChange({type: 'SET_INQ_COMPANION_ATTR', payload: {key: 'ironbull', value}})} 
                    />
                </div>
                <div className='questSection'>
                    <h2>Champions of the Just</h2>
                    <TextInput
                        title='Did the Templars assist the Inquisition?'
                        value={get(gameState, 'quests.1.decisions.templars')}
                        suggestedValues={[
                            'The Inquisitor did not go to Therinfal Redoubt',
                            'The Inquisitor offered redemption to the remaining templars, who joined the Inquisition as allies',
                            'The Inquisitor disbanded the templar order and conscripted the remaining templars into service of the Inquisition'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_COTJ_ATTR', payload: {key: 'templars', value}})} />
                    <TextInput
                        title='What became of Ser Barris?'
                        value={get(gameState, 'quests.1.decisions.barris')}
                        suggestedValues={[
                            'Ser Barris did not survive the battle agains the corrupted templars',
                            'Ser Barris joined forced with the Inquisitor, fought agains the corrupted templars, and survived the battle',
                            'Ser Barris joined forces with the Inquisitor, fought against the corrupted templars, and was promoted to knight-commander'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_COTJ_ATTR', payload: {key: 'barris', value}})} />
                </div>
                <div className='questSection'>
                    <h2>In Hushed Whispers</h2>
                    <TextInput
                        title='Did the mages assist the Inquisition?'
                        value={get(gameState, 'quests.2.decisions.mages')}
                        suggestedValues={[
                            'The Inquisition did not reach out to the mages in Redcliffe for assistance',
                            'After defeating a plot to eliminate the Inquisitor, the Inquisition offered the mages a chance to redeem themselves as free allies',
                            'After defeating a plot to elimiate the Inquisitor, the Inquisition pressed the mages back into the Circles, now under the watch and protection of Inquisition forces'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_IHW_ATTR', payload: {key: 'mages', value}})} />
                </div>
            </div>
            <div>
                <div className='questSection'>
                    <h2>Here Lies the Abyss</h2>
                    <TextInput
                        title='What became of the Grey Wardens?'
                        value={get(gameState, 'quests.3.decisions.gw')}
                        suggestedValues={[
                            'The Grey Wardens were banished from Orlais',
                            'The Grey Wardens were recruited by the Inquisition'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_HLTA_ATTR', payload: {key: 'gw', value}})} 
                    />
                    <TextInput
                        title='Who sacrified themselves to stop the Nightmare Demon?'
                        value={get(gameState, 'quests.3.decisions.sacrifice')}
                        handleChange={(value) => onChange({type: 'SET_HLTA_ATTR', payload: {key: 'sacrifice', value}})}
                        suggestedValues={[
                            'Hawke remained in the Fade to stop the Nightmare Demon',
                            'Alistair Theirin remained in the Fade to stop the Nightmare Demon',
                            'Loghain MacTir remained in the Fade to stop the Nightmare Demon',
                            'Jean-Marc Stroud remained in the Fade to stop the Nightmare Demon'
                        ]}
                        />
                </div>
                <div className='questSection'>
                    <h2>Wicked Eyes and Wicked Hearts</h2>
                    <TextInput
                        title='Who ended up as the ruling monarch of Orlais?'
                        value={get(gameState, 'quests.4.decisions.ruler')}
                        handleChange={(value) => onChange({type: 'SET_WEWH_ATTR', payload: {key: 'ruler', value}})} 
                        suggestedValues={[
                            'Celene remained the Empress of Orlais',
                            'Empress Celene, Gaspard, and Briala reached a truce.',
                            'Empress Celene reconciled with Briala.',
                            'Gaspard became Emperor of Orlais',
                            'Briala assumed power, with Gaspard acting as puppet leader in Orlais',
                        ]}
                        
                        />
                    <TextInput
                        title='What became of Grand Duchess Florianne?'
                        value={get(gameState, 'quests.4.decisions.florianne')}
                        suggestedValues={[
                            'Florianne survived the events at the Winter Palace and was sentenced to encloisterment',
                            'Florianne survived the events at the Winter Palace and was recruited as an agent of the Inquisition',
                            'Florianne survived the events at the Winter Palace and was sentenced to farm work',
                            'Florianne survived the events at the Winter Palace and was exiled',
                            `Florianne survived the events at the Winter Palace and was made the Inquisition's court jester`,
                            'Florianne was killed at the Winter Palace'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_WEWH_ATTR', payload: {key: 'florianne', value}})} />
                </div>
            </div>
            <div>
                <div className='questSection'>
                    <h2>What Pride Had Wrought</h2>
                    <TextInput
                        title='Who drank from the Well of Sorrows?'
                        value={get(gameState, 'quests.5.decisions.well')}
                        suggestedValues={['Morrigan drank from the Well of Sorrows', 'The Inquisitor drank from the Well of Sorrows']}
                        handleChange={(value) => onChange({type: 'SET_WPHW_ATTR', payload: {key: 'well', value}})} />
                    <TextInput
                        title='How did the Inquisitor handle the rituals and the guardians of the Temple of Mythal?'
                        value={get(gameState, 'quests.5.decisions.ritual')}
                        suggestedValues={[
                            `The Inquisitor respected the temple's traditions and forged an alliance with the guardians protecting it`,
                            'The Inquisitor completed the rituals, but did not ally with the temple guardians',
                            `The Inquisitor followed a quicker route through the temple's underground, making enemies of the guardians`
                        ]}
                        handleChange={(value) => onChange({type: 'SET_WPHW_ATTR', payload: {key: 'ritual', value}})} />
                    <TextInput
                        title='What became of Abelas?'
                        value={get(gameState, 'quests.5.decisions.abelas')}
                        suggestedValues={['Abelas left the Temple alive and well.','Abelas was killed by Morrigan.']}
                        handleChange={(value) => onChange({type: 'SET_WPHW_ATTR', payload: {key: 'abelas', value}})} />
                </div>
                <div className='questSection'>
                    <h2>Doom Upon All the World</h2>
                    <TextInput
                        title='Who became the next Divine?'
                        value={get(gameState, 'quests.6.decisions.divine')}
                        suggestedValues={[
                            'Cassandra became the Divine',
                            'Leliana became the Divine',
                            'Vivienne became the Divine'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_DUATW_ATTR', payload: {key: 'divine', value}})} />
                </div>
                <div className='questSection'>
                    <h2>Trespasser DLC</h2>
                    <TextInput
                        title='What was the final fate of the Inquisition?'
                        value={get(gameState, 'quests.7.decisions.disband')}
                        suggestedValues={[
                            'The Inquisition was preserved as a peacekeeping force reporting directly to Divine Victoria',
                            'The Inquisition was formally disbanded'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_TRESPASSER_ATTR', payload: {key: 'disband', value}})} />
                    <TextInput
                        title={`What was the Inquisitor's final goal regarding Solas?`}
                        value={get(gameState, 'quests.7.decisions.solas')}
                        suggestedValues={[
                            'The Inquisitor considers Solas beyond redemption and commits to stopping him at all costs',
                            'The Inquisitor believes that Solas is making a tragic mistake and intends to redeem Solas, if possible'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_TRESPASSER_ATTR', payload: {key: 'solas', value}})} />
                </div>
            </div>
        </div>
    )
}

export default Inquisition