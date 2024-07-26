import { CreateWorldForm, Game, WorldFormAction } from '../types'

// todo: use immer ?
// use consts for world form action types
// todo: persist state in local storage

export const createWorldFormReducer = (state: CreateWorldForm, action: WorldFormAction) => {
    switch (action.type) {
        case 'SET_WORLD_NAME':
            return {...state, name: action.payload}
        case 'SET_WORLD_SUMMARY':
            return {...state, summary: action.payload}
        case 'SET_WORLD_IMG':
            return {...state, imgLink: action.payload}
        case 'SET_ACTIVE_GAME':
            return {...state, activeGame: action.payload}
        case 'SET_ORIGINS_PROTAG_ATTR':
            const originsKey = action.payload.key
            let newOriginsProtag = {...state.games[0].protagonist}
            if (originsKey === 'name') {
                newOriginsProtag = {...newOriginsProtag, name: action.payload.value}
            } else if (originsKey === 'class') {
                newOriginsProtag = {...newOriginsProtag, class: action.payload.value}
            } else if (originsKey === 'origin') {
                newOriginsProtag = {...newOriginsProtag, origin: action.payload.value}
            } else if (originsKey === 'summary') {
                newOriginsProtag = {...newOriginsProtag, summary: action.payload.value}
            }

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 0) {
                    return {...game, protagonist: newOriginsProtag}
                }
                return game
            })}

        case 'SET_ORIGINS_MULTI':
            const multiKey = action.payload.key
            let newOriginsProtagMultiOption = {...state.games[0].protagonist}
            if (multiKey === 'romances') {
                newOriginsProtagMultiOption = {...newOriginsProtagMultiOption, romances: action.payload.value}
            } else if (multiKey === 'companions') {
                newOriginsProtagMultiOption = {...newOriginsProtagMultiOption, companions: action.payload.value}
            } else if (multiKey === 'rivals') {
                newOriginsProtagMultiOption = {...newOriginsProtagMultiOption, rivals: action.payload.value}
            }

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 0) {
                    return {...game, protagonist: newOriginsProtagMultiOption}
                }
                return game
            })}

        case 'SET_DA2_PROTAG_ATTR': 
            const da2Key = action.payload.key
            let newDA2Protag = {...state.games[1].protagonist}
            if (da2Key === 'name') {
                newDA2Protag = {...newDA2Protag, name: action.payload.value}
            } else if (da2Key === 'class') {
                newDA2Protag = {...newDA2Protag, class: action.payload.value}
            } else if (da2Key === 'summary') {
                newDA2Protag = {...newDA2Protag, summary: action.payload.value}
            }

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 1) {
                    return {...game, protagonist: newDA2Protag}
                }
                return game
            })}

        case 'SET_INQ_PROTAG_ATTR': 
            const daiKey = action.payload.key
            let newDAIProtag = {...state.games[2].protagonist}
            if (daiKey === 'name') {
                newDAIProtag = {...newDAIProtag, name: action.payload.value}
            } else if (daiKey === 'class') {
                newDAIProtag = {...newDAIProtag, class: action.payload.value}
            } else if (daiKey === 'origin') {
                newDAIProtag = {...newDAIProtag, origin: action.payload.value}
            } else if (daiKey === 'summary') {
                newDAIProtag = {...newDAIProtag, summary: action.payload.value}
            }

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 2) {
                    return {...game, protagonist: newDAIProtag}
                }
                return game
            })}

        // origins decisions
        case 'SET_PROLOGUE_ATTR':
            const prologueKey = action.payload.key
            let newPrologueChoices = {...state.games[0].quests[0].decisions}
            newPrologueChoices[`${prologueKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 0) {
                    let newQuests = [...state.games[0].quests]
                    newQuests[0].decisions = newPrologueChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}

        case 'SET_LOTHERING_ATTR':
            const lotheringKey = action.payload.key
            let newLotheringChoices = {...state.games[0].quests[1].decisions}
            newLotheringChoices[`${lotheringKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 0) {
                    let newQuests = [...state.games[0].quests]
                    newQuests[1].decisions = newLotheringChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}
        case 'SET_REDCLIFFE_ATTR':
            const redcliffeKey = action.payload.key
            let newRedcliffeChoices = {...state.games[0].quests[2].decisions}
            newRedcliffeChoices[`${redcliffeKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 0) {
                    let newQuests = [...state.games[0].quests]
                    newQuests[2].decisions = newRedcliffeChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}

        case 'SET_URN_ATTR':
            const urnKey = action.payload.key
            let newUrnChoices = {...state.games[0].quests[3].decisions}
            newUrnChoices[`${urnKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 0) {
                    let newQuests = [...state.games[0].quests]
                    newQuests[3].decisions = newUrnChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}

        case 'SET_CIRCLE_ATTR':
            const circleKey = action.payload.key
            let newCircleChoices = {...state.games[0].quests[4].decisions}
            newCircleChoices[`${circleKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 0) {
                    let newQuests = [...state.games[0].quests]
                    newQuests[4].decisions = newCircleChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}

        case 'SET_NATURE_OF_THE_BEAST_ATTR':
            const natureKey = action.payload.key
            let newNatureChoices = {...state.games[0].quests[5].decisions}
            newNatureChoices[`${natureKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 0) {
                    let newQuests = [...state.games[0].quests]
                    newQuests[5].decisions = newNatureChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}

        case 'SET_PARAGON_ATTR':
            const paragonKey = action.payload.key
            let newParagonChoices = {...state.games[0].quests[6].decisions}
            newParagonChoices[`${paragonKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 0) {
                    let newQuests = [...state.games[0].quests]
                    newQuests[6].decisions = newParagonChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}

        case 'SET_LANDSMEET_ATTR':
            const landsmeetKey = action.payload.key
            let newlandsmeetChoices = {...state.games[0].quests[7].decisions}
            newlandsmeetChoices[`${landsmeetKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 0) {
                    let newQuests = [...state.games[0].quests]
                    newQuests[7].decisions = newlandsmeetChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}
        case 'SET_BATTLE_DENERIM_ATTR':
            const battleKey = action.payload.key
            let newBattleChoices = {...state.games[0].quests[8].decisions}
            newBattleChoices[`${battleKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 0) {
                    let newQuests = [...state.games[0].quests]
                    newQuests[8].decisions = newBattleChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}

        case 'SET_EPILOGUE_ATTR':
            const epilogueKey = action.payload.key
            let newEpilogueChoices = {...state.games[0].quests[9].decisions}
            newEpilogueChoices[`${epilogueKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 0) {
                    let newQuests = [...state.games[0].quests]
                    newQuests[9].decisions = newEpilogueChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}

        case 'SET_AWAKENING_ATTR':
            const awakeKey = action.payload.key
            let newAwakeChoices = {...state.games[0].quests[10].decisions}
            newAwakeChoices[`${awakeKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 0) {
                    let newQuests = [...state.games[0].quests]
                    newQuests[10].decisions = newAwakeChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}

        case 'SET_DAO_COMPANION_ATTR':
            const compKey = action.payload.key
            let newCompanionChoices = {...state.games[0].quests[11].decisions}
            newCompanionChoices[`${compKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 0) {
                    let newQuests = [...state.games[0].quests]
                    newQuests[11].decisions = newCompanionChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}
    
        // set da2 decisions
        case 'SET_ACT_ONE_ATTR':
            const actOneKey = action.payload.key
            let newActOneChoices = {...state.games[1].quests[0].decisions}
            newActOneChoices[`${actOneKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 1) {
                    let newQuests = [...state.games[1].quests]
                    newQuests[0].decisions = newActOneChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}
        case 'SET_ACT_TWO_ATTR':
            const actTwoKey = action.payload.key
            let newActTwoChoices = {...state.games[1].quests[1].decisions}
            newActTwoChoices[`${actTwoKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 1) {
                    let newQuests = [...state.games[1].quests]
                    newQuests[1].decisions = newActTwoChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}
        case 'SET_ACT_THREE_ATTR':
            const actThreeKey = action.payload.key
            let newActThreeChoices = {...state.games[1].quests[2].decisions}
            newActThreeChoices[`${actThreeKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 1) {
                    let newQuests = [...state.games[1].quests]
                    newQuests[2].decisions = newActThreeChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}
        case 'SET_MOTA_ATTR':
            const motaKey = action.payload.key
            let newMotaChoices = {...state.games[1].quests[3].decisions}
            newMotaChoices[`${motaKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 1) {
                    let newQuests = [...state.games[1].quests]
                    newQuests[3].decisions = newMotaChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}
        case 'SET_LEGACY_ATTR':
            return {...state}

        // inquisition decisions
        case 'SET_IYHSB_ATTR':
            return {...state}
        case 'SET_COTJ_ATTR':
            const cotjKey = action.payload.key
            let newCotjChoices = {...state.games[2].quests[1].decisions}
            newCotjChoices[`${cotjKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 2) {
                    let newQuests = [...state.games[2].quests]
                    newQuests[1].decisions = newCotjChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}
        case 'SET_IHW_ATTR':
            const ihwKey = action.payload.key
            let newIhwChoices = {...state.games[2].quests[2].decisions}
            newIhwChoices[`${ihwKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 2) {
                    let newQuests = [...state.games[2].quests]
                    newQuests[2].decisions = newIhwChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}
        case 'SET_HLTA_ATTR':
            const hltaKey = action.payload.key
            let newHltaChoices = {...state.games[2].quests[3].decisions}
            newHltaChoices[`${hltaKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 2) {
                    let newQuests = [...state.games[2].quests]
                    newQuests[3].decisions = newHltaChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}
        case 'SET_WEWH_ATTR':
            const wewhKey = action.payload.key
            let newWickedChoices = {...state.games[2].quests[4].decisions}
            newWickedChoices[`${wewhKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 2) {
                    let newQuests = [...state.games[2].quests]
                    newQuests[4].decisions = newWickedChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}
        case 'SET_WPHW_ATTR':
            const wphwKey = action.payload.key
            let newPrideChoices = {...state.games[2].quests[5].decisions}
            newPrideChoices[`${wphwKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 2) {
                    let newQuests = [...state.games[2].quests]
                    newQuests[5].decisions = newPrideChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}
        case 'SET_DUATW_ATTR':
            const duatwKey = action.payload.key
            let newDoomChoices = {...state.games[2].quests[6].decisions}
            newDoomChoices[`${duatwKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 2) {
                    let newQuests = [...state.games[2].quests]
                    newQuests[6].decisions = newDoomChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}
        case 'SET_TRESPASSER_ATTR':
            const tresspaserKey = action.payload.key
            let newTresspaserChoices = {...state.games[2].quests[7].decisions}
            newTresspaserChoices[`${tresspaserKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 2) {
                    let newQuests = [...state.games[2].quests]
                    newQuests[7].decisions = newTresspaserChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}

        case 'CLEAR_FORM':
            return {
                ...state,
                name: '',
                wip: true,
                summary: '',
                active: true,
                fanWorks: [],
                games: [
                    {
                        name: 'Origins',
                        protagonist: {
                            name: '',
                            class: '',
                            origin: '',
                            romances: [],
                            companions: [],
                            rivals: [],
                            summary: '',
                        },
                        // TODO:  iterate over decisions key/value pairs to create array for the backend
                        quests: [
                            {
                                name: 'Prologue',
                                decisions: {
                                    'summary': '',
                                    'prisoner': '',
                                },
                            },
                            {
                                name: 'Lothering',
                                decisions: {
                                    'leliana': '',
                                    'merchant': '',
                                    'sten': ''
                                }
                            },
                            {
                                name: 'The Arl of Redcliffe',
                                decisions: {
                                    'connor': '',
                                    'prepare': '',
                                    'fight': '',
                                    'isolde': '',
                                    'bella': '',
                                    'valena': '',
                                    'demon': '',
                                    'bevin': '',
                                }
                            },
                            {
                                name: 'The Urn of Sacred Ashes',
                                decisions: {
                                    'defiled': '',
                                    'dragon': '',
                                    'genitivi': ''
                                }
                            },
                            {
                                name: 'Broken Circle',
                                decisions: {
                                    'side': '',
                                    'cullen': '',
                                    'irving': ''
                                }
                            },
                            {
                                name: 'Nature of the Beast',
                                decisions: {
                                    'side': '',
                                    'cammen': '',
                                    'deygan': '',
                                    'halla': '',
                                    'athras': ''
                                }
                            },
                            {
                                name: 'Paragon of her Kind',
                                decisions: {
                                    'king': '',
                                    'anvil': '',
                                    'ruck': '',
                                    'zerlinda': '',
                                    'dagna': '',
                                    'burkel': ''
                                }
                            },
                            {
                                name: 'The Landsmeet',
                                decisions: {
                                    'ruler': '',
                                    'loghain': ''
                                }
                            },
                            {
                                name: 'Battle of Denerim',
                                decisions: {
                                    'archdemon': '',
                                    'ritual': '',
                                    'leader': ''
                                }
                            },
                            {
                                name: 'Awakening DLC',
                                decisions: {
                                    'architect': '',
                                    'keep': '',
                                    'nathaniel': ''
                                }
                            },  
                            {
                                name: 'Companions',
                                decisions: {
                                    'sten_fate': '',
                                    'wynne': '',
                                    'leliana': '',
                                    'ali_fate': '',
                                    'sten_haven': ''
                                }
                            },
                        ]
                    },
                    {
                        name: 'Dragon Age 2',
                        protagonist: {
                            name: '',
                            class: '',
                            romances: [],
                            companions: [],
                            rivals: [],
                            summary: ''
                        },
                        quests: [
                            {
                                name: 'Act One',
                                decisions: {
                                    'ketojan': '',
                                    'feynriel': '',
                                    'saemus': ''
                                }
                            },
                            {
                                name: 'Act Two',
                                decisions: {
                                    'feynriel': '',
                                    'petrice': '',
                                    'isabelaReturn': '',
                                    'isabelaArishok': '',
                                    'arishok': ''
                                }
                            },
                            {
                                name: 'Act Three',
                                decisions: {
                                    'conspirators': '',
                                    'side': '',
                                    'anders': '',
                                    'andersapprove': '',
                                    'allies': ''
                                }
                            },
                            {
                                name: 'Mark of the Assassin DLC',
                                decisions: {
                                    'tallis': ''
                                }
                            },
                            {
                                name: 'Legacy DLC',
                                decisions: {
                                    'side': '',
                                    'will': ''
                                }
                            },
                            {
                                name: 'Companions',
                                decisions: {
                                    'bethany': '',
                                    'carver': '',
                                    'bartrand': '',
                                    'haunting': '',
                                    'lyrium': '',
                                    'eluvian': '',
                                    'clan': ''
                                }
                            }
                        ]
                    },
                    {
                        name: 'Inquisition',
                        protagonist: {
                            name: '',
                            class: '',
                            origin: '',
                            romances: [],
                            companions: [],
                            rivals: [],
                            summary: ''
                        },
                        quests: [
                            {
                                name: 'In Your Heart Shall Burn',
                                decisions: {}
                            },
                            {
                                name: 'Champions of the Just',
                                decisions: {
                                    'templars': '',
                                    'barris': ''
                                }
                            },
                            {
                                name: 'In Hushed Whispers',
                                decisions: {
                                    'mages': '',
                                    'dorian': ''
                                }
                            },
                            {
                                name: 'Here Lies the Abyss',
                                decisions: {
                                    'gw': '',
                                    'sacrifice': ''
                                }
                            },
                            {
                                name: 'Wicked Eyes and Wicked Hearts',
                                decisions: {
                                    'ruler': '',
                                    'florianne': ''
                                }
                            },
                            {
                                name: 'What Pride Had Wrought',
                                decisions: {
                                    'well': '',
                                    'ritual': '',
                                    'abelas': ''
                                }
                            },
                            {
                                name: 'Doom Upon All the World',
                                decisions: {
                                    'divine': ''
                                }
                            },
                            {
                                name: 'Trespasser DLC',
                                decisions: {
                                    'disband': '',
                                    'solas': ''
                                }
                            },
                        ]
                    }
                ]
            }

        default: 
            return {...state}
    }
}

export const defaultCreateWorldForm: CreateWorldForm = {
    name: '',
    wip: true,
    summary: '',
    active: true,
    fanWorks: [],
    activeGame: 0,
    games: [
        {
            name: 'Origins',
            protagonist: {
                name: '',
                class: '',
                origin: '',
                romances: [],
                companions: [],
                rivals: [],
                summary: '',
            },
            // TODO:  iterate over decisions key/value pairs to create array for the backend
            quests: [
                {
                    name: 'Prologue',
                    decisions: {
                        'summary': '',
                        'prisoner': '',
                    },
                },
                {
                    name: 'Lothering',
                    decisions: {
                        'leliana': '',
                        'merchant': '',
                        'sten': ''
                    }
                },
                {
                    name: 'The Arl of Redcliffe',
                    decisions: {
                        'prepare': '',
                        'fight': '',
                        'isolde': '',
                        'connor': '',
                        'demon': '',
                        'bella': '',
                        'valena': '',
                        'bevin': '',
                    }
                },
                {
                    name: 'The Urn of Sacred Ashes',
                    decisions: {
                        'defiled': '',
                        'dragon': '',
                        'genitivi': ''
                    }
                },
                {
                    name: 'Broken Circle',
                    decisions: {
                        'side': '',
                        'cullen': '',
                        'irving': ''
                    }
                },
                {
                    name: 'Nature of the Beast',
                    decisions: {
                        'side': '',
                        'cammen': '',
                        'deygan': '',
                        'halla': '',
                        'athras': ''
                    }
                },
                {
                    name: 'Paragon of her Kind',
                    decisions: {
                        'king': '',
                        'anvil': '',
                        'ruck': '',
                        'zerlinda': '',
                        'dagna': '',
                        'burkel': ''
                    }
                },
                {
                    name: 'The Landsmeet',
                    decisions: {
                        'ruler': '',
                        'loghain': ''
                    }
                },
                {
                    name: 'Battle of Denerim',
                    decisions: {
                        'archdemon': '',
                        'ritual': '',
                        'leader': ''
                    }
                },
                {
                    name: 'Epilogue',
                    decisions: {
                        'boon': '',
                        'after': '',
                    }
                },
                {
                    name: 'Awakening DLC',
                    decisions: {
                        'architect': '',
                        'keep': '',
                        'nathaniel': ''
                    }
                },  
                {
                    name: 'Companions',
                    decisions: {
                        'sten_fate': '',
                        'wynne': '',
                        'leliana': '',
                        'ali_fate': '',
                        'sten_haven': '',
                        'marj': ''
                    }
                },
            ]
        },
        {
            name: 'Dragon Age 2',
            protagonist: {
                name: '',
                class: '',
                romances: [],
                companions: [],
                rivals: [],
                summary: ''
            },
            quests: [
                {
                    name: 'Act One',
                    decisions: {
                        'smuggler_mercenary':'',
                        'errant': '',
                        'mercy': '',
                        'martin' : '',
                        'ketojan': '',
                        'feynriel': '',
                        'saemus': '',
                        'magistrate': '',
                        'ghyslain': '',
                        'danzig': ''
                    }
                },
                {
                    name: 'Act Two',
                    decisions: {
                        'feynriel': '',
                        'petrice': '',
                        'isabelaReturn': '',
                        'isabelaArishok': '',
                        'arishok': ''
                    }
                },
                {
                    name: 'Act Three',
                    decisions: {
                        'conspirators': '',
                        'side': '',
                        'anders': '',
                        'andersapprove': '',
                        'allies': ''
                    }
                },
                {
                    name: 'Mark of the Assassin DLC',
                    decisions: {
                        'tallis': ''
                    }
                },
                {
                    name: 'Legacy DLC',
                    decisions: {
                        'side': '',
                        'will': ''
                    }
                },
                {
                    name: 'Companions',
                    decisions: {
                        'bethany': '',
                        'carver': '',
                        'bartrand': '',
                        'haunting': '',
                        'lyrium': '',
                        'eluvian': '',
                        'clan': ''
                    }
                }
            ]
        },
        {
            name: 'Inquisition',
            protagonist: {
                name: '',
                class: '',
                origin: '',
                romances: [],
                companions: [],
                rivals: [],
                summary: ''
            },
            quests: [
                {
                    name: 'In Your Heart Shall Burn',
                    decisions: {}
                },
                {
                    name: 'Champions of the Just',
                    decisions: {
                        'templars': '',
                        'barris': ''
                    }
                },
                {
                    name: 'In Hushed Whispers',
                    decisions: {
                        'mages': '',
                        'dorian': ''
                    }
                },
                {
                    name: 'Here Lies the Abyss',
                    decisions: {
                        'gw': '',
                        'sacrifice': ''
                    }
                },
                {
                    name: 'Wicked Eyes and Wicked Hearts',
                    decisions: {
                        'ruler': '',
                        'florianne': ''
                    }
                },
                {
                    name: 'What Pride Had Wrought',
                    decisions: {
                        'well': '',
                        'ritual': '',
                        'abelas': ''
                    }
                },
                {
                    name: 'Doom Upon All the World',
                    decisions: {
                        'divine': ''
                    }
                },
                {
                    name: 'Trespasser DLC',
                    decisions: {
                        'disband': '',
                        'solas': ''
                    }
                },
            ]
        }
    ]
}