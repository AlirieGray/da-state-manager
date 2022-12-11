import { useState, useReducer } from 'react'
import {World, Game, Protagonist, CreateWorldForm, Quest, Decisions} from '../types'
import {getLocalValue} from './useLocalStorage'
import { useNavigate } from 'react-router-dom'
import { editWorldForm, defaultWorld } from '../reducers/editWorldForm'

// todo: dev value and production value
const GET_WORLDS_URL = 'http://localhost:5555/worldstates/get'
const EDIT_WORLD_URL = 'http://localhost:5555/worldstates/edit'
const CREATE_WORLD_URL = 'http://localhost:5555/worldstates/create'
// todo: handle loading, API errors, etc

export function useGetAllWorldstates(accessToken: string, refreshToken: string) {
    const [worlds, setWorlds] = useState<Array<World>>([])
    // todo: use context for this
    // const authToken = getLocalValue('accessToken', '')

    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-type': 'application/json',
            'x-refresh': `${refreshToken}`
        }
    }

    const getWorlds = async () => {
        try {
            // set fetch state to loading
            fetch(GET_WORLDS_URL, options).then(res => {
                if (res.status !== 200) {
                    console.error("error: ", res.statusText)
                    return -1
                }
                return res.json()
            }).then((worldsRes) => {
                const worldObjects = new Array<World>()
                worldsRes.forEach((world: any) => {
                    worldObjects.push(convertWorldstateJSON(world)) 
                })
                setWorlds(worldObjects)
            }).catch((err) => {
                return err
            })
        } catch(err) {
            console.log(err)
            // todo set fetch state to error
        }
    }
    return [worlds, getWorlds] as const
}

export function useGetWorldstate(worldID: string, accessToken: string, refreshToken: string) {
    // const [world, setWorld] = useState<World>()
    const [world, dispatch] = useReducer(editWorldForm, defaultWorld)
    // todo: use context for this
    // const authToken = getLocalValue('accessToken', '')

    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-type': 'application/json',
            'x-refresh': `${refreshToken}`
        }
    }

    const getWorld = async () => {
        try {
            // set fetch state to loading
            fetch(GET_WORLDS_URL + `/${worldID}`, options).then(res => {
                if (res.status !== 200) {
                    console.error("error: ", res.statusText)
                    return -1
                }
                return res.json()
            }).then((worldRes) => {
                const worldObj = convertWorldstateJSON(worldRes)
                // setWorld(worldObj)
                dispatch({type: 'SET_WORLD', payload: worldObj})
            }).catch((err) => {
                return err
            })
        } catch(err) {
            console.log(err)
            // todo set fetch state to error
        }
    }
    return [world, getWorld, dispatch] as const
}

// TODO
export function usePostWorldstate(worldstate: CreateWorldForm, accessToken: string, refreshToken: string) {
    const reqBody = convertWorldStateToCreateReqBody(worldstate)
    const [worldErr, setWorlds] = useState('')
    const navigate = useNavigate()

    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-type': 'application/json',
            'x-refresh': refreshToken
        },
        body: reqBody // todo: type safety
    }
    
    let err = ''

    const postWorld = async () => {
        try {
            fetch(CREATE_WORLD_URL, options).then(res => {
                if (res.status !== 201) {
                    console.error('error ', res.statusText)
                    return -1
                }
                return res.json()
            }).then(worldRes => {
                const worldObj = convertWorldstateJSON(worldRes)
                navigate(`/world/${worldObj.ID}/view`)
            })
        } catch (e) {
            console.error(e)
            // todo set fetch state to err
        }
    }

    return [err, postWorld] as const
}

export function usePutWorldstate(worldstate: World, accessToken: string, refreshToken: string) {
    const reqBody = convertWorldStateToCreateReqBody(worldstate)
    const [worlds, setWorlds] = useState('')
    const navigate = useNavigate()

    const options = {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-type': 'application/json',
            'x-refresh': `${refreshToken}`
        },
        body: reqBody // todo: type safety
    }
    
    let err = ''

    const putWorld = async () => {
        try {
            fetch(EDIT_WORLD_URL + `/${worldstate.ID}`, options).then(res => {
                if (res.status !== 200) {
                    console.error('error ', res.statusText)
                    return -1
                }
                return res.json()
            }).then(worldRes => {
                navigate(`/world/${worldstate.ID}/view`)
            })
        } catch (e) {
            console.error(e)
            // todo set fetch state to err
        }
    }

    return [err, putWorld] as const
}

// todo: move to util ?
const convertWorldStateToCreateReqBody = (worldstate: CreateWorldForm): any => {
    const {name, wip, summary, active, fanWorks, games} = worldstate
    const convertedGames = games.map((game: Game) => {
        const convertedQuests = game.quests.map((quest: Quest) => {
            const convertedDecisions = Object.entries(quest.decisions).map((decisionEntry) => {
                const [name, choice] = decisionEntry
                return {
                    name, 
                    choice
                }
            })
            return {name: quest.name, decisions: convertedDecisions}
        })
        return {name: game.name, protagonist: game.protagonist, quests: convertedQuests}
    })
    let worldJSON = {
        name,
        wip,
        summary,
        active,
        fanWorks,
        games: convertedGames
    }
    return JSON.stringify(worldJSON)
}

// todo: separate function to validate response, type safety
// error messageing

const convertWorldstateJSON = (json: any): World => {
    const {name, _id, summary, wip, games, fanWorks} = json
    const gamesArray = new Array<Game>()

    games.forEach((game: any) => {
        gamesArray.push(convertGameJSON(game))
    });
    const world: World =  {
        ID: _id,
        name, 
        summary, 
        games: gamesArray,
        wip,
        active: true,
        fanWorks: fanWorks
    }
    return world
}

// todo: type safety
const convertGameJSON = (json: any): Game => {
    const { name, protagonist, quests } = json
    const {origin, romances, companions, rivals, summary} = protagonist
    const protag: Protagonist = {
        name: protagonist.name,
        origin: origin,
        class: protagonist.class,
        romances: romances,
        companions: companions,
        rivals: rivals,
        summary: summary
    }
    const convertedQuests = quests.map((quest: any) => {
        const convertedDecisions: Decisions = {}
        
        quest.decisions.map((decision: any) => {
            const decisionName = decision.name;
            const decisionChoice = decision.choice;
            convertedDecisions[decisionName] = decisionChoice
            // return newDecision
        })
        return {
            name: quest.name,
            decisions: convertedDecisions
        }
    })
    const newGame: Game = {
        name,
        protagonist: protag,
        quests: convertedQuests, // todo: parse quests correctly, validate
    }
    return newGame
}

