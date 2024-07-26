import { useReducer, useContext } from 'react'
import {World, Game, Protagonist, CreateWorldForm, Quest, Decisions, StatusType} from '../types'
import { GET_WORLDS_URL, EDIT_WORLD_URL, CREATE_WORLD_URL, DELETE_WORLD_URL } from '../config'
import { useNavigate } from 'react-router-dom'
import { editWorldForm, defaultWorld } from '../reducers/editWorldForm'
import { WorldsContext } from '../context/worlds'
import { WorldContextType, StatusContextType } from '../types'
import { StatusContext } from '../context/status'


// todo: handle loading, API errors, etc
export function useGetAllWorldstates(accessToken: string, refreshToken: string) {
    const { worlds, setWorlds } = useContext(WorldsContext) as WorldContextType
    const { setStatus } = useContext(StatusContext) as StatusContextType
    const { setErrorMessage } = useContext(StatusContext) as StatusContextType

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
            setStatus(StatusType.LOADING)
            setErrorMessage('')
            fetch(GET_WORLDS_URL, options).then(res => {
                if (res.status !== 200) {
                    setStatus(StatusType.ERROR)
                    setErrorMessage(res.statusText)
                    console.error("error: ", res.statusText)
                    return -1
                }
                return res.json()
            }).then((worldsRes) => {
                const worldObjects = new Array<World>()
                worldsRes.forEach((world: World) => {
                    worldObjects.push(convertWorldstateJSON(world)) 
                })
                setWorlds(worldObjects)
                setStatus(StatusType.COMPLETE)
            }).catch((err) => {
                setStatus(StatusType.ERROR)
                setErrorMessage(`${err}`)
                return err
            })
        } catch(err) {
            setStatus(StatusType.ERROR)
            setErrorMessage(`${err}`)
        }
    }
    return [worlds, getWorlds] as const
}

export function useGetWorldstate(worldID: string, accessToken: string, refreshToken: string) {
    const [world, dispatch] = useReducer(editWorldForm, defaultWorld)

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

export function useDeleteWorldstate(worldID: string, accessToken: string, refreshToken: string) {
    const { worlds, setWorlds } = useContext(WorldsContext) as WorldContextType

    const options = {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-type': 'application/json',
            'x-refresh': `${refreshToken}`
        }
    }
    
    let err = ''
    const deleteWorld = async () => {
        
        try {
            // set fetch state to loading
            fetch(DELETE_WORLD_URL + `/${worldID}`, options).then(res => {
                if (res.status !== 200) {
                    console.error("error: ", res.statusText)
                    return -1
                }
                return res.json()
            }).then((json) => {
                const filteredWorlds = worlds.filter(w => w.ID !== worldID)
                setWorlds(filteredWorlds)
            }).catch((err) => {
                return err
            })
        } catch(err) {
            console.log(err)
            // todo set fetch state to error
        }
    }
    return [err, deleteWorld] as const
}

export function usePostWorldstate(worldstate: CreateWorldForm, accessToken: string, refreshToken: string) {
    const reqBody = convertWorldStateToCreateReqBody(worldstate)
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
    const {name, wip, summary, active, fanWorks, games, imgLink} = worldstate
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
        imgLink,
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
    const {name, _id, summary, wip, games, fanWorks, imgLink} = json
    const gamesArray = new Array<Game>()

    games.forEach((game: any) => {
        gamesArray.push(convertGameJSON(game))
    });
    const world: World =  {
        ID: _id,
        name, 
        summary, 
        imgLink,
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
        
        quest.decisions.forEach((decision: any) => {
            const decisionName = decision.name;
            const decisionChoice = decision.choice;
            convertedDecisions[decisionName] = decisionChoice
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

