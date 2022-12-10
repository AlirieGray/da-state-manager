import { useState } from 'react'
import {World, Game, Protagonist, CreateWorldForm, Quest, Decisions} from '../types'
import {getLocalValue} from './useLocalStorage'

// todo: dev value and production value
const GET_WORLDS_URL = 'http://localhost:5555/worldstates/get'
const CREATE_WORLD_URL = 'http://localhost:5555/worldstates/create'
// todo: handle loading, API errors, etc

export function useGetWorldstates(accessToken: string) {
    const [worlds, setWorlds] = useState<Array<World>>([])
    // todo: use context for this
    // const authToken = getLocalValue('accessToken', '')

    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-type': 'application/json'
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
                console.log(worlds)
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

// TODO
export function usePostWorldstate(worldstate: CreateWorldForm, accessToken: string) {
    const reqBody = convertWorldStateToCreateReqBody(worldstate)
    const [worldErr, setWorlds] = useState('')

    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-type': 'application/json'
        },
        body: reqBody // todo: type safety
    }
    
    let err = ''
    console.log("req body: ")
    console.log(reqBody)

    const postWorld = async () => {
        try {
            fetch(CREATE_WORLD_URL, options).then(res => {
                if (res.status !== 201) {
                    console.error('error ', res.statusText)
                    return -1
                }
                return res.json()
            }).then(worldRes => {
                console.log(worldRes)
            })
        } catch (e) {
            console.error(e)
            // todo set fetch state to err
        }
        // console.log(reqBody)
    }

    return [err, postWorld] as const
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
    console.log(worldJSON)
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
    const newGame: Game = {
        name,
        protagonist: protag,
        quests, // todo: parse quests correctly, validate
    }
    return newGame
}

