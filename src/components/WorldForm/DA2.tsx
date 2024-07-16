import { Dispatch } from 'react'
import { Game, CompanionMap, MultiSelectOption, WorldFormAction } from '../../types'
import MultiSelectDropdown from '../MultiSelectDropdown/MultiSelectDropdown'
import { get } from 'lodash'
import TextInput from '../TextInput/TextInput'


type DA2Props = {
    gameState: Game
    onChange: Dispatch<WorldFormAction>
} 

const romancesMap: CompanionMap = {
    'Isabela': 0,
    'Fenris': 1,
    'Merrill': 2,
    'Anders': 3,
    'Sebastian': 4,
    'Varric': 5,
    'Tallis': 6,
    'Arishok': 7,
    'Aveline': 8
}

const defaultRomances: MultiSelectOption[] = [
    {name: 'Isabela', id: 0 },
    {name: 'Fenris', id: 1 }, 
    {name: 'Merrill', id: 2 },
    {name: 'Anders', id: 3 },
    {name: 'Sebastian', id: 4 },
    {name: 'Varric', id: 5} ,
    {name: 'Tallis', id: 6 },
    {name: 'Arishok', id: 7},
    {name: 'Aveline', id: 8}
]

const companionsMap: CompanionMap = {
    'Bethany': 0,
    'Carver': 1,
    'Varric': 2,
    'Isabela': 3,
    'Fenris': 4,
    'Sebastian': 5,
    'Merrill': 6,
    'Anders': 7,
    'Aveline': 8,
    'Dog': 9,
    'Tallis': 10
}

const defaultCompanions: MultiSelectOption[] = [
    {name: 'Bethany', id: 0 },
    {name: 'Carver', id: 1 }, 
    {name: 'Varric', id: 2 },
    {name: 'Isabela', id: 3 },
    {name: 'Fenris', id: 4 },
    {name: 'Sebastian', id: 5},
    {name: 'Merrill', id: 6},
    {name: 'Anders', id: 7},
    {name: 'Aveline', id: 8 },
    {name: 'Tallis', id: 9 },
]

function DA2({ gameState, onChange }: DA2Props) {
        // todo: this code is duplicated across three components, consolidate and move to util file
        const getSelectedRomances = (): MultiSelectOption[] => {
            const romArray: string[] = get(gameState, 'protagonist.romances')
            return romArray.map((romance: string) => {
                return { name: romance, id: romancesMap[`${romance}`] }
            })
        }

        const getSelectedCompanions = (): MultiSelectOption[] => {
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
                    <MultiSelectDropdown 
                        title='Romance'
                        options={defaultRomances}
                        selected={getSelectedRomances()}
                        setSelected={(romanceSelection) => {
                        const romances = romanceSelection.map((romance) => {
                            return romance.name
                        })
                        onChange({type: 'SET_DA2_MULTI', payload: {key: 'romances', value: romances}})
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
                            onChange({type: 'SET_DA2_MULTI', payload: {key: 'companions', value: companions}})
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
                            onChange({type: 'SET_DA2_MULTI', payload: {key: 'rivals', value: rivals}})
                        }}
                    />
                    </div>
                    <div className='questSection'>
                        <h2>Companions</h2>
                        <TextInput 
                            title="What was Bethany's career?"
                            value={get(gameState, 'quests.5.decisions.bethany')}
                            suggestedValues={[
                                'Bethany died while escaping Lothering',
                                'Bethany became a Circle mage',
                                'Bethany became a Grey Warden',
                                'Bethany died in the Deep Roads'
                            ]}
                            handleChange={(value) => onChange({type: 'SET_DA2_COMPANION_ATTR', payload: {key: 'bethany', value}})}
                        />
                        <TextInput 
                            title="What was Carver's career?"
                            value={get(gameState, 'quests.5.decisions.bethany')}
                            suggestedValues={[
                                'Carver died while escaping Lothering',
                                'Carver became a templar',
                                'Carver became a Grey Warden',
                                'Carver died in the Deep Roads'
                            ]}
                            handleChange={(value) => onChange({type: 'SET_DA2_COMPANION_ATTR', payload: {key: 'carver', value}})}
                        />

                        <TextInput 
                            title="Was Varric's brother Bartrand killed?"
                            value={get(gameState, 'quests.5.decisions.bartrand')}
                            suggestedValues={[
                                'Bartrand survived his descent into madness',
                                `Hawke spared Varric's brother Bartrand`,
                                'After receiving healing from Anders, Hawke allowed Bartrand to live',
                            ]}
                            handleChange={(value) => onChange({type: 'SET_DA2_COMPANION_ATTR', payload: {key: 'bartrand', value}})}
                        />

                        <TextInput 
                            title="Did Hawke help Varric discover what was haunting his brother Bartrand's mansion?"
                            value={get(gameState, 'quests.5.decisions.haunting')}
                            suggestedValues={[
                                `Varric's family home was abandoned for years after Bartrand's descent into madness`,
                                `Varric's family home was restored to some semblance of normalcy after Hawke dealt with the manifestations there`
                            ]}
                            handleChange={(value) => onChange({type: 'SET_DA2_COMPANION_ATTR', payload: {key: 'haunting', value}})}
                        />

                        <TextInput 
                            title="Did Varric keep a piece of the red lyrium idol?"
                            value={get(gameState, 'quests.5.decisions.lyrium')}
                            suggestedValues={[
                                `Varric had a master enchanter "process" the red lyrium idol fragment, ultimately destroying it`,
                                `Varric kept the red lyrium idol fragment, hoping it would be too small to affect him`
                            ]}
                            handleChange={(value) => onChange({type: 'SET_DA2_COMPANION_ATTR', payload: {key: 'lyrium', value}})}
                        />
                        <TextInput 
                            title="Did Merrill destroy the eluvian?"
                            value={get(gameState, 'quests.5.decisions.eluvian')}
                            suggestedValues={[
                                `Merill refused to abandon the mirror after spending so much time restoring it`,
                                `The eluvian lay in shards when Merrill finished, the cursed thing destroyed`
                            ]}
                            handleChange={(value) => onChange({type: 'SET_DA2_COMPANION_ATTR', payload: {key: 'eluvian', value}})}
                        />
                        <TextInput 
                            title="What happened to Merrill's clan?"
                            value={get(gameState, 'quests.5.decisions.clan')}
                            suggestedValues={[
                                `Merrill's clan remained alive and well`,
                                `Merrill's clan was killed`
                            ]}
                            handleChange={(value) => onChange({type: 'SET_DA2_COMPANION_ATTR', payload: {key: 'clan', value}})}
                        />
                    </div>
                </div>
                <div>
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
                            title='What became of Feynriel?'
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
                                'Hawke turned Isabela over to the Arishok'
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
                </div>
                <div>
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
                            title={`Did Hawke approve of Anders's actions at the Chantry?`}
                            value={get(gameState, 'quests.2.decisions.andersapprove')}
                            suggestedValues={[
                                'No amount of explanation could convince Hawke that Anders was in the right.',
                                'Hawke backed Anders\'s actions, perhaps moved by his claims that such things were inevitable.'
                            ]}
                            handleChange={(value) => onChange({type: 'SET_ACT_THREE_ATTR', payload: {key: 'andersapprove', value}})}
                        />
                        <TextInput 
                            title={`What happened to Anders?`}
                            value={get(gameState, 'quests.2.decisions.anders')}
                            suggestedValues={[
                                'Hawke executed Anders',
                                'Anders is alive and well'
                            ]}
                            handleChange={(value) => onChange({type: 'SET_ACT_THREE_ATTR', payload: {key: 'anders', value}})}
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
                        <TextInput 
                            title={`Who joined Hawke in the final battle?`}
                            multiLine={true}
                            value={get(gameState, 'quests.2.decisions.allies')}
                            suggestedValues={[
                                `All of Hawke's companions fought at Hawke's side in the final battle`,
                                `Sebastian left Hawke after Hawke spared Anders`,
                                `Merrill left Hawke after Hawke decided to side with the Templars, and Hawke killed her in the final battle`,
                                `Fenris left Hawke after Hawke decided to side with the mages, and Hawke killed him in the final battle`,
                                `Fenris left Hawke after Hawke decided to side with the mages, but was later moved to rejoin Hawke`,
                                'Aveline left Hawke after Hawke decided to side with the mages',
                                'After Hawke spared his life and then sided with the Templars, Anders confronted Hawke in the Gallows and Hawke was forced to kill him',
                                `After Hawke spared his life and then sided with the mages, Anders resumed his place at Hawke's side`
                            ]}
                            handleChange={(value) => onChange({type: 'SET_ACT_THREE_ATTR', payload: {key: 'allies', value}})}
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
                    <div className='questSection'>
                        <h2>Legacy DLC</h2>
                        <TextInput 
                            title={`Who did Hawke side with in Corypheus's prison?`}
                            value={get(gameState, 'quests.4.decisions.side')}
                            suggestedValues={[
                                `Despite Larius's obvious corruption, Hawke heeded the former Warden and worked to prevent Janeka from freeing the imprisoned darkspawn`,
                                `Unable to fully trust Larius, Hawke supported Janeka's theory and worked with her to free the imprisoned darkspawn`,
                            ]}
                            handleChange={(value) => onChange({type: 'SET_LEGACY_ATTR', payload: {key: 'side', value}})}
                        />

                        <TextInput 
                            title={`Did Hawke find Malcolm's will in the Grey Warden prison tower?`}
                            value={get(gameState, 'quests.4.decisions.will')}
                            suggestedValues={[
                                `Malcolm had left traces of his legacy behind in the ancient prison, unaware that his child would one day follow in his footsteps. Hawke found Malcolm's will`,
                                `Hawke did not uncover Malcolm's will in the Grey Warden prison tower`,
                            ]}
                            handleChange={(value) => onChange({type: 'SET_LEGACY_ATTR', payload: {key: 'will', value}})}
                        />
                    </div>
                </div>
            </div>
        )
}

export default DA2