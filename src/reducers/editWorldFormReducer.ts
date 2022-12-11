import { World, Game } from '../types'
// todo: move to types
import { WorldFormAction } from './createWorldForm'

// todo: use immer ?
// use consts for world form action types
// todo: persist state in local storage

export const editWorldFormReducer = (state: World, action: WorldFormAction) => {
    switch (action.type) {
        case 'SET_WORLD_NAME':
            return {...state, name: action.payload}
        case 'SET_WORLD_SUMMARY':
            return {...state, summary: action.payload}
        case 'SET_WORLD':
            return {...action.payload}
        case 'SET_ORIGINS_PROTAG_ATTR':
            const originsKey = action.payload.key
            let newOriginsProtag = {...state.games[0].protagonist}
            if (originsKey === 'name') {
                newOriginsProtag = {...state.games[0].protagonist, name: action.payload.value}
            } else if (originsKey === 'class') {
                newOriginsProtag = {...state.games[0].protagonist, class: action.payload.value}
            } else if (originsKey === 'origin') {
                newOriginsProtag = {...state.games[0].protagonist, origin: action.payload.value}
            } else if (originsKey === 'summary') {
                newOriginsProtag = {...state.games[0].protagonist, summary: action.payload.value}
            }

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 0) {
                    return {...game, protagonist: newOriginsProtag}
                }
                return game
            })}

        case 'SET_DA2_PROTAG_ATTR': 
            const da2Key = action.payload.key
            let newDA2Protag = {...state.games[1].protagonist}
            if (da2Key === 'name') {
                newDA2Protag = {...state.games[1].protagonist, name: action.payload.value}
            } else if (da2Key === 'class') {
                newDA2Protag = {...state.games[1].protagonist, class: action.payload.value}
            } else if (da2Key === 'summary') {
                newDA2Protag = {...state.games[1].protagonist, summary: action.payload.value}
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
                newDAIProtag = {...state.games[2].protagonist, name: action.payload.value}
            } else if (daiKey === 'class') {
                newDAIProtag = {...state.games[2].protagonist, class: action.payload.value}
            } else if (daiKey === 'origin') {
                newDAIProtag = {...state.games[2].protagonist, origin: action.payload.value}
            } else if (daiKey === 'summary') {
                newDAIProtag = {...state.games[2].protagonist, summary: action.payload.value}
            }

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 2) {
                    return {...game, protagonist: newDAIProtag}
                }
                return game
            })}

        // origins decisions
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

        case 'SET_AWAKENING_ATTR':
            return {...state}
    
        // set da2 decisions
        case 'SET_ACT_ONE_ATTR':
            return {...state}
        case 'SET_ACT_TWO_ATTR':
            return {...state}
        case 'SET_ACT_THREE_ATTR':
            return {...state}
        case 'SET_MOTA_ATTR':
            return {...state}
        case 'SET_LEGACY_ATTR':
            return {...state}

        // inquisition decisions
        case 'SET_IYHSB_ATTR':
            return {...state}
        case 'SET_IHW_ATTR':
            return {...state}
        case 'SET_COTJ_ATTR':
            return {...state}
        case 'SET_HLTA_ATTR':
            return {...state}
        case 'SET_WEWH_ATTR':
            return {...state}
        case 'SET_WPHW_ATTR':
            return {...state}
        case 'SET_DUATW_ATTR':
            return {...state}
        case 'SET_TRESPASSER_ATTR':
            return {...state}

        default: 
            return {...state}
    }
}

export const defaultWorld: World = {
    name: '',
    ID: '',
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
                    decisions: {},
                },
                {
                    name: 'Lothering',
                    decisions: {}
                },
                {
                    name: 'The Arl of Redcliffe',
                    decisions: {
                        'connor': '',
                        'prepare': '',
                        'isolde': '',
                        'bella': ''
                    }
                },
                {
                    name: 'The Urn of Sacred Ashes',
                    decisions: {
                        'defiled': '',
                        'dragon': ''
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
                        'zerlinda': ''
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
                        'ritual': ''
                    }
                },
                {
                    name: 'Awakening DLC',
                    decisions: {
                        'architect': ''
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
                        'isabelaReturn': '',
                        'isabelaArishok': '',
                        'arishok': ''
                    }
                },
                {
                    name: 'Act Three',
                    decisions: {}
                },
                {
                    name: 'Mark of the Assassin DLC',
                    decisions: {}
                },
                {
                    name: 'Legacy DLC',
                    decisions: {}
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
                    decisions: {}
                },
                {
                    name: 'What Pride Had Wrought',
                    decisions: {}
                },
                {
                    name: 'Doom Upon All the World',
                    decisions: {}
                },
                {
                    name: 'Trespasser DLC',
                    decisions: {}
                },
            ]
        }
    ]
}