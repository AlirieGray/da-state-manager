import { World, Game, WorldFormAction } from '../types'
import { defaultCreateWorldForm } from './createWorldForm'

// todo: use immer ?
// use consts for world form action types
// todo: persist state in local storage

export const editWorldForm = (state: World, action: WorldFormAction) => {
    switch (action.type) {
        case 'SET_WORLD_NAME':
            return {...state, name: action.payload}
        case 'SET_WORLD_SUMMARY':
            return {...state, summary: action.payload}
        case 'SET_WORLD_IMG':
            return {...state, imgLink: action.payload}
        case 'SET_WORLD':
            return {...action.payload, activeGame: 0}
        case 'SET_ACTIVE_GAME':
            return {...state, activeGame: action.payload}
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
            let newLandsmeetChoices = {...state.games[0].quests[7].decisions}
            newLandsmeetChoices[`${landsmeetKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 0) {
                    let newQuests = [...state.games[0].quests]
                    newQuests[7].decisions = newLandsmeetChoices
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

        case 'SET_AWAKENING_ATTR':
            return {...state}
    
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
            let newActTwoChoices = {...state.games[1].quests[0].decisions}
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
            let newActThreeChoices = {...state.games[1].quests[0].decisions}
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
            let newMotaChoices = {...state.games[1].quests[0].decisions}
            newMotaChoices[`${motaKey}`] = action.payload.value

            return {...state, games: state.games.map((game: Game, index) => {
                if (index === 1) {
                    let newQuests = [...state.games[1].quests]
                    newQuests[2].decisions = newMotaChoices
                    return {...game, quests: newQuests}
                }
                return game
            })}
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

export const defaultWorld: World = {...defaultCreateWorldForm, ID: ''}