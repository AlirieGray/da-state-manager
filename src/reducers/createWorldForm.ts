import { CreateWorldForm, Game } from '../types'

// todo: use immer

export type CreateWorldFormAction = 
    | { type: 'SET_ORIGINS_PROTAG_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_DA2_PROTAG_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_INQ_PROTAG_ATTR', payload: {key: string, value: string} }
    | { type: 'CLEAR_FORM'}

export const createWorldFormReducer = (state: CreateWorldForm, action: CreateWorldFormAction) => {
    console.log(state)
    switch (action.type) {
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

        case 'CLEAR_FORM':
            console.log(state)
            return {...defaultCreateWorldForm}

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
            quests: [
                {
                    name: 'Prologue',
                    decisions: [],
                },
                {
                    name: 'Lothering',
                    decisions: []
                },
                {
                    name: 'The Arl of Redcliffe',
                    decisions: []
                },
                {
                    name: 'The Urn of Sacred Ashes',
                    decisions: []
                },
                {
                    name: 'Broken Circle',
                    decisions: []
                },
                {
                    name: 'Paragon of her Kind',
                    decisions: []
                },
                {
                    name: 'Nature of the Beast',
                    decisions: []
                },
                {
                    name: 'The Landsmeet',
                    decisions: []
                },
                {
                    name: 'Battle of Denerim',
                    decisions: []
                },
                {
                    name: 'Awakening DLC',
                    decisions: []
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
                    decisions: []
                },
                {
                    name: 'Act Two',
                    decisions: []
                },
                {
                    name: 'Act Three',
                    decisions: []
                },
                {
                    name: 'Mark of the Assassin DLC',
                    decisions: []
                },
                {
                    name: 'Legacy DLC',
                    decisions: []
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
                    name: 'In Hushed Whispers',
                    decisions: []
                },
                {
                    name: 'Champions of the Just',
                    decisions: []
                },
                {
                    name: 'In Your Heart Shall Burn',
                    decisions: []
                },
                {
                    name: 'Here Lies the Abyss',
                    decisions: []
                },
                {
                    name: 'Wicked Eyes and Wicked Hearts',
                    decisions: []
                },
                {
                    name: 'What Pride Had Wrought',
                    decisions: []
                },
                {
                    name: 'Doom Upon All the World',
                    decisions: []
                },
                {
                    name: 'Trespasser DLC',
                    decisions: []
                },
            ]
        }
    ]
}