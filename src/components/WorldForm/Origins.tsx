import { Dispatch, useState } from 'react'
import { Game, WorldFormAction} from '../../types'
import {get} from 'lodash'
import TextInput from '../TextInput/TextInput'
import MultiSelectDropdown from '../MultiSelectDropdown/MultiSelectDropdown'
import { MultiSelectOption, CompanionMap } from '../../types'

type OriginsProps = {
    gameState: Game
    onChange: Dispatch<WorldFormAction>
} 

const romancesMap: CompanionMap = {
    'Morrigan':  0,
    'Leliana':  1, 
    'Zevran':  2,
    'Alistair':  3,
    'Sten':  4,
    'Nathaniel':  5,
    'Loghain':  6,
    'Anora':  7,
    'Jowan':  8
}

const defaultRomances: MultiSelectOption[] = [
    {name: 'Morrigan', id: 0 },
    {name: 'Leliana', id: 1 }, 
    {name: 'Zevran', id: 2 },
    {name: 'Alistair', id: 3 },
    {name: 'Sten', id: 4 },
    {name: 'Nathaniel', id: 5 },
    {name: 'Loghain', id: 6 },
    {name: 'Anora', id: 7 },
    {name:  'Jowan', id: 8 }
]


const companionsMap: CompanionMap = {
    'Morrigan': 0,
    'Leliana': 1, 
    'Zevran': 2,
    'Alistair': 3,
    'Sten': 4,
    'Oghren': 5,
    'Wynne': 6,
    'Shale': 7,
    'Loghain': 8,
    'Dog': 9,
    'Jowan': 10,
    'Anders': 11,
    'Nathaniel': 12,
    'Sigrun': 13,
    'Velanna': 14,
    'Justice': 15
}

const defaultCompanions: MultiSelectOption[] = [
    {name: 'Morrigan', id: 0 },
    {name: 'Leliana', id: 1 }, 
    {name: 'Zevran', id: 2 },
    {name: 'Alistair', id: 3 },
    {name: 'Sten', id: 4 },
    {name: 'Oghren', id: 5},
    {name: 'Wynne', id: 6},
    {name: 'Shale', id: 7},
    {name: 'Loghain', id: 8 },
    {name: 'Dog', id: 9},
    {name: 'Jowan', id: 10 },
    {name: 'Anders', id: 11},
    {name: 'Nathaniel', id: 12 },
    {name: 'Sigrun', id: 13},
    {name: 'Velanna', id: 14},
    {name: 'Justice', id: 15}
]

// todo: checkboxes for yes/no choices (ex. helped redcliffe prepare, stop/redeem solas, etc)

function Origins({ gameState, onChange }: OriginsProps) {
    // todo: reducer to connect to form state, use onChange prop
    // todo: use reducer to get default selected rivals companions and romances in form

    const getSelectedCompanions = (): MultiSelectOption[] => {
        const compArray: string[] = get(gameState, 'protagonist.companions')
        return compArray.map((companion: string) => {
            return { name: companion, id: companionsMap[`${companion}`] }
        })
    }

    const getSelectedRomances = (): MultiSelectOption[] => {
        const romArray: string[] = get(gameState, 'protagonist.romances')
        return romArray.map((romance: string) => {
            return { name: romance, id: romancesMap[`${romance}`] }
        })
    }

    const getSelectedRivals = (): MultiSelectOption[] => {
        const compArray: string[] = get(gameState, 'protagonist.rivals')
        return compArray.map((rival: string) => {
            return { name: rival, id: companionsMap[`${rival}`] }
        })
    }

    return (
        <div className='formSection'>
            <div>
                <div className='questSection'>
                <h2> Protagonist </h2>
                    <TextInput
                        title='Name'
                        value={get(gameState, 'protagonist.name')}
                        handleChange={(value) => onChange({type: 'SET_ORIGINS_PROTAG_ATTR', payload: {key: 'name', value}})} />
                    <TextInput
                        title='Class'
                        value={get(gameState, 'protagonist.class')}
                        suggestedValues={[
                            'Mage',
                            'Blood Mage',
                            'Mage (healer)',
                            'Rogue (archer)',
                            'Rogue (dual-wield)',
                            'Warrior (sword and shield)',
                            'Warrior (dual-wield)'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_ORIGINS_PROTAG_ATTR', payload: {key: 'class', value}})} />
                    <TextInput
                        title='Origin'
                        value={get(gameState, 'protagonist.origin')}
                        suggestedValues={[
                            'Circle Mage',
                            'City Elf',
                            'Dalish Elf',
                            'Human Noble',
                            'Dwarven Noble',
                            'Dwarven Casteless'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_ORIGINS_PROTAG_ATTR', payload: {key: 'origin', value}})} />
                    <TextInput
                        title='Summary'
                        multiLine={true}
                        value={get(gameState, 'protagonist.summary')}
                        handleChange={(value) => onChange({type: 'SET_ORIGINS_PROTAG_ATTR', payload: {key: 'summary', value}})} />
                <MultiSelectDropdown 
                    title='Romance'
                    options={defaultRomances}
                    selected={getSelectedRomances()}
                    setSelected={(romanceSelection) => {
                        const romances = romanceSelection.map((romance) => {
                            return romance.name
                        })
                        onChange({type: 'SET_ORIGINS_MULTI', payload: {key: 'romances', value: romances}})
                    }}
                />
                <MultiSelectDropdown 
                    title='Companions'
                    options={defaultCompanions} // use reduce array function to compare with reducer state?
                    selected={getSelectedCompanions()}
                    // setOptions={(companionOptions) => setRomances(companionOptions)}
                    setSelected={(companionSelection) => {
                        const companions = companionSelection.map((companion) => {
                            return companion.name
                        })
                        onChange({type: 'SET_ORIGINS_MULTI', payload: {key: 'companions', value: companions}})
                    }}
                />
                <MultiSelectDropdown 
                    title='Rivals'
                    options={defaultCompanions}
                    selected={getSelectedRivals()}
                    // setOptions={(rivalOptions) => setRivals(rivalOptions)}
                    setSelected={(rivalSelection) => {
                        const rivals = rivalSelection.map((rival) => {
                            return rival.name
                        })
                        onChange({type: 'SET_ORIGINS_MULTI', payload: {key: 'rivals', value: rivals}})
                    }}
                />
                </div>
                <div className='questSection'>
                    <h2>Prologue</h2>
                    <TextInput
                        title={`What were the events that led to the Warden's conscription into the Grey Wardens?`}
                        value={get(gameState, 'quests.0.decisions.summary')}
                        multiLine={true}
                        handleChange={(value) => onChange({type: 'SET_PROLOGUE_ATTR', payload: {key: 'summary', value}})} />    
                    <TextInput
                        title={`How did the Warden deal with the prisoner at Ostagar?`}
                        value={get(gameState, 'quests.0.decisions.prisoner')}
                        suggestedValues={[
                            'Ostgar prisoner was left to his fate', 
                            'The Warden killed the Ostagar prisoner',
                            'The Warden stole food from the guard and gave it to the prisoner',
                            'The Warden convinced the guard to share his lunch with the prisoner',
                            'The Warden bought food from the guard and gave it to the prisoner',
                            'The Warden stole the key from the prisoner'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_PROLOGUE_ATTR', payload: {key: 'prisoner', value}})} />    
                </div>
                <div className='questSection'>
                    <h2>Lothering</h2>
                    <TextInput
                        title={`Did the Warden recruit Leliana at Lothering?`}
                        value={get(gameState, 'quests.1.decisions.leliana')}
                        suggestedValues={['The Warden recruited Leliana in the tavern at Lothering', 'After initially declining, the Warden recruited Leliana after she made a second attempt when the party was leaving Lothering', `Leliana did not join the Warden's campaign agains the Blight`]}
                        handleChange={(value) => onChange({type: 'SET_LOTHERING_ATTR', payload: {key: 'leliana', value}})} />   
                <TextInput
                        title={`Did the Warden recruit Sten at Lothering?`}
                        value={get(gameState, 'quests.1.decisions.sten')}
                        suggestedValues={['The Warden left Sten to his fate', 'Sten joined the Warden in the campaign against the Fifth Blight']}
                        handleChange={(value) => onChange({type: 'SET_LOTHERING_ATTR', payload: {key: 'sten', value}})} />     
                    <TextInput
                        title={'How did the Warden deal with the unscrupulous merchant at Lothering?'}
                        value={get(gameState, 'quests.1.decisions.merchant')}
                        suggestedValues={['The Warden convinced the Lothering merchant to sell his goods at a fair price', 'The Warden struck a profitable deal with the Lothering merchant', 'The Warden did not deal with the Lothering merchant']}
                        handleChange={(value) => onChange({type: 'SET_LOTHERING_ATTR', payload: {key: 'merchant', value}})} />     
                </div>
            </div>
            <div>
                <div className='questSection'>
                    <h2>Redcliffe</h2>
                    {/* <label>Did the Warden help Redcliffe prepare?</label>
                    <input type="checkbox" /> */}
                    <TextInput
                        title={`What was Connor's fate?`}
                        value={get(gameState, 'quests.2.decisions.connor')}
                        suggestedValues={['Connor did not survive', 'Connor was possessed', 'Connor survived, not possessed']}
                        handleChange={(value) => onChange({type: 'SET_REDCLIFFE_ATTR', payload: {key: 'connor', value}})} />    
                    <TextInput
                        title={`What was Isolde's fate?`}
                        value={get(gameState, 'quests.2.decisions.isolde')}
                        suggestedValues={['Isolde survived the events at Redcliffe castle', 'Isolde sacrified herself in a ritual to save her son']}
                        handleChange={(value) => onChange({type: 'SET_REDCLIFFE_ATTR', payload: {key: 'isolde', value}})} />   
                    <TextInput
                        title='Did the Warden rescue Bella from the castle?'
                        value={get(gameState, 'quests.2.decisions.bella')}
                        suggestedValues={['Bella left Redcliffe', 'Bella took over ownership of the tavern', 'Bella left to start a brewery', 'Bella died in Redcliffe']}
                        handleChange={(value) => onChange({type: 'SET_REDCLIFFE_ATTR', payload: {key: 'bella', value}})} />     
                </div>
                <div className='questSection'>
                    <h2>The Urn of Sacred Ashes</h2>
                    <TextInput
                        title='Did the Warden defile the Ashes of Andraste?'
                        value={get(gameState, 'quests.3.decisions.defiled')}
                        suggestedValues={['The Urn of Sacred Ashes was not defiled', 'The Urn of Sacred Ashes was defiled']}
                        handleChange={(value) => onChange({type: 'SET_URN_ATTR', payload: {key: 'defiled', value}})} />
                    <TextInput
                        title='Did the Warden slay the High Dragon at the Temple of Sacred Ashes?'
                        value={get(gameState, 'quests.3.decisions.dragon')}
                        suggestedValues={['The Warden slew the High Dragon at the Temple of Sacred Ashes', 'The Warden did not slay the High Dragon at the Temple of Sacred Ashes']}
                        handleChange={(value) => onChange({type: 'SET_URN_ATTR', payload: {key: 'dragon', value}})} />

                    <TextInput
                        title='What became of Genitivi?'
                        value={get(gameState, 'quests.3.decisions.genitivi')}
                        suggestedValues={['Brother Genitivi spread the word of the existence of the Temple of Sacred Ashes',
                        'The Warden killed Brother Genitivi at the Temple of Sacred Ashes']}
                        handleChange={(value) => onChange({type: 'SET_URN_ATTR', payload: {key: 'genitivi', value}})} />
                </div>
                    <div className='questSection'>
                    <h2>Broken Circle</h2>
                    <TextInput
                        title='Who did the Warden support at the Circle?'
                        value={get(gameState, 'quests.4.decisions.side')}
                        suggestedValues={['The Warden saved the mages at the Circle and recruited them', 'The Warden used the Right of Annulment and recruited the Templars']}
                        handleChange={(value) => onChange({type: 'SET_CIRCLE_ATTR', payload: {key: 'side', value}})} />
                    <TextInput
                        title='Did First Enchanter Irving survive?'
                        value={get(gameState, 'quests.4.decisions.irving')}
                        suggestedValues={['First Enchanter Irving died in battle', 'First Enchanter Irving survived']}
                        handleChange={(value) => onChange({type: 'SET_CIRCLE_ATTR', payload: {key: 'irving', value}})} />
                    <TextInput
                        title={`Did the Warden agree to Cullen's request?`}
                        value={get(gameState, 'quests.4.decisions.cullen')}
                        suggestedValues={[`The Warden agreed to Cullen's request`, `The Warden did not agree to Cullen's request`]}
                        handleChange={(value) => onChange({type: 'SET_CIRCLE_ATTR', payload: {key: 'cullen', value}})} />
                </div>
                <div className='questSection'>
                    <h2>Nature of the Beast</h2>
                    <TextInput
                        title='Who did the Warden side with?'
                        value={get(gameState, 'quests.5.decisions.side')}
                        suggestedValues={['The Warden eliminated the werewolf threat, forging an alliance with the Dalish', 'The Warden eliminated the Dalish and gained the werewolves as allies', 'The Dalish and Werewolves brokered a peace']}
                        handleChange={(value) => onChange({type: 'SET_NATURE_OF_THE_BEAST_ATTR', payload: {key: 'side', value}})} />
                    <TextInput
                        title='What happened to Cammen and Gheyna?'
                        value={get(gameState, 'quests.5.decisions.cammen')}
                        suggestedValues={['The Warden did not encounter Cammen and Gheyna', 'The Warden broke up Cammen and Gheyna', 'The Warden brought Cammen and Gheyna together']}
                        handleChange={(value) => onChange({type: 'SET_NATURE_OF_THE_BEAST_ATTR', payload: {key: 'cammen', value}})} />
                    <TextInput
                        title='How did the Warden deal with Deygan?'
                        value={get(gameState, 'quests.5.decisions.deygan')}
                        suggestedValues={['The Warden did not encounter Deygan', 'The Warden returned Deygan to the Dalish camp', 'The Warden killed Deygan']}
                        handleChange={(value) => onChange({type: 'SET_NATURE_OF_THE_BEAST_ATTR', payload: {key: 'deygan', value}})} />
                    <TextInput
                        title='What was the fate of the halla?'
                        value={get(gameState, 'quests.5.decisions.halla')}
                        suggestedValues={[`The Warden did not resolve the halla's illness`, 'The halla recovered, thanks to the Warden', 'The halla was put down']}
                        handleChange={(value) => onChange({type: 'SET_NATURE_OF_THE_BEAST_ATTR', payload: {key: 'halla', value}})} />
                    <TextInput
                        title={`Did the Warden tell Athras about his wife's fate?`}
                        value={get(gameState, 'quests.5.decisions.athras')}
                        suggestedValues={['Athras never learned the true fate of his wife', 'The Warden told Athras only that his wife had died', 'The Warden told Athras that his wife had become a werewolf and died']}
                        handleChange={(value) => onChange({type: 'SET_NATURE_OF_THE_BEAST_ATTR', payload: {key: 'athras', value}})} />
                </div>
            </div>
            <div>
                <div className='questSection'>
                    <h2>Paragon of Her Kind</h2>
                    <TextInput
                        title='Who rules Orzammar?'
                        value={get(gameState, 'quests.6.decisions.king')}
                        suggestedValues={['Bhelen was crowned king of Orzammar', 'Harrowmont was crowned king of Orzammar']}
                        handleChange={(value) => onChange({type: 'SET_PARAGON_ATTR', payload: {key: 'king', value}})} />
                    <TextInput
                        title='What happened to the Anvil of the Void?'
                        value={get(gameState, 'quests.6.decisions.anvil')}
                        suggestedValues={[
                            'Cairdin and the Warden defeated Branka, and destroyed the Anvil of the Void', 
                            'The Warden convinced Branka that her quest for the Anvil was self-destruvtive. Branka ultimately destroyed it before ending her own life.', 
                            'Branka and the Warden defeated Caridin, preserving the Anvil of the Void']}
                        handleChange={(value) => onChange({type: 'SET_PARAGON_ATTR', payload: {key: 'anvil', value}})} />
                    <TextInput
                        title='How did the Warden deal with Ruck?'
                        value={get(gameState, 'quests.6.decisions.ruck')}
                        suggestedValues={[
                            'The Warden did not speak with Filda', 
                            'The Warden found and left Ruck alive, but told his mother that he had died in the Deep Roads',
                            `The Warden told Filda the truth about her son's state`,
                            'The Warden killed Ruck and lied to Filda about it',
                            'The Warden killed Ruck and told Filda the truth',
                            'The Warden killed Ruck, and told Filda that he died heroically']}
                        handleChange={(value) => onChange({type: 'SET_PARAGON_ATTR', payload: {key: 'ruck', value}})} />
                    <TextInput
                        title='What happened to Zerlinda?'
                        value={get(gameState, 'quests.6.decisions.zerlinda')}
                        suggestedValues={['Zerlinda remained in Dust Town', 
                        `Zerlinda's father was convinced to take his daughter back`, 
                        'Zerlinda left for the surface',
                        `Zerlinda was taken in by Burkel's chantry`,
                        'Zerlinda left her son in the Deep Roads']}
                        handleChange={(value) => onChange({type: 'SET_PARAGON_ATTR', payload: {key: 'zerlinda', value}})} />
                    <TextInput
                        title='Did Dagna leave Orzammar?'
                        value={get(gameState, 'quests.6.decisions.dagna')}
                        suggestedValues={[`Dagna remained in Orzammar`, 
                        'Dagna left to study magic at the Circle',]}
                        handleChange={(value) => onChange({type: 'SET_PARAGON_ATTR', payload: {key: 'dagna', value}})} />
                    <TextInput
                        title="What became of Brother Burkel's plan to establish a chantry in Orzammar?"
                        value={get(gameState, 'quests.6.decisions.burkel')}
                        suggestedValues={['The Warden did not help Burkel establish a chantry in Orzammar', 
                        `The Warden convinved Shaper Czibor to allow Brother Burkel to form a chantry in Orzammar, but he is later killed protesting the Assembly's restrictions on the Andrastian converts.`]}
                        handleChange={(value) => onChange({type: 'SET_PARAGON_ATTR', payload: {key: 'burkel', value}})} />
                </div>
                <div className='questSection'>
                    <h2>The Landsmeet</h2>
                    <TextInput
                        title='Who rules Ferelden?'
                        value={get(gameState, 'quests.7.decisions.ruler')}
                        suggestedValues={[
                            'Alistair was crowned king of Ferelden',
                            'Alistair and Anora rule Ferelden together',
                            'Alistair and the Warden rule Ferelden together',
                            'Anora assumed the throne of Ferelden',
                            'Anora and the Warden rule Ferelden together'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_LANDSMEET_ATTR', payload: {key: 'ruler', value}})} />
                    <TextInput
                        title='What became of Loghain at the Landsmeet?'
                        value={get(gameState, 'quests.7.decisions.loghain')}
                        suggestedValues={[
                            'Loghain survived his judgment at the Landsmeet',
                            'Loghain was executed by the Warden',
                            'Loghain was executed by Alistair',
                            'Loghain was killed by Alistair in a duel'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_LANDSMEET_ATTR', payload: {key: 'loghain', value}})} />
                </div>
                <div className='questSection'>
                    <h2>Battle of Denerim</h2>

                    <TextInput
                        title={`Did the Warden agree to complete Morrigan's dark ritual?`}
                        value={get(gameState, 'quests.8.decisions.ritual')}
                        suggestedValues={['Morrigan did not have a child after the Fifth Blight', 
                        'Morrigan had an old god baby with the Warden',
                        'Morrigan had an old god baby with Alistair',
                        'Morrigan had an old god baby with Loghain',
                        'Morrigan had a human baby with the Warden']}
                        handleChange={(value) => onChange({type: 'SET_BATTLE_DENERIM_ATTR', payload: {key: 'ritual', value}})} />
                
                <TextInput
                        title='Who did the Warden select to lead the team that stayed behind at the gate during the battle?'
                        value={get(gameState, 'quests.8.decisions.leader')}
                        suggestedValues={['Oghren',
                        'Sten',
                        'Leliana',
                        'Shale',
                        'Zevran',
                        'Loghain',
                        'Alistair',
                        'Morrigan',
                        'Wynne',
                    ]}
                        handleChange={(value) => onChange({type: 'SET_BATTLE_DENERIM_ATTR', payload: {key: 'leader', value}})} />

                <TextInput
                    title='Who slew the Archdemon?'
                    value={get(gameState, 'quests.8.decisions.archdemon')}
                    suggestedValues={['The Warden killed the Archdemon', 'Alistair killed the Archdemon', 'Loghain killed the Archdemon']}
                    handleChange={(value) => onChange({type: 'SET_BATTLE_DENERIM_ATTR', payload: {key: 'archdemon', value}})} 
                    />
                </div>

                <div className='questSection'>
                    <h2>Awakening DLC</h2>

                    <TextInput
                        title='What happened to the Architect?'
                        value={get(gameState, 'quests.8.decisions.architect')}
                        suggestedValues={[
                            'The Warden killed the Architect',
                            'The Warden allowed the Architect to live'
                        ]}
                        handleChange={(value) => onChange({type: 'SET_BATTLE_DENERIM_ATTR', payload: {key: 'architect', value}})} 
                        />
                </div>
            </div>
        </div>
    )
}

export default Origins