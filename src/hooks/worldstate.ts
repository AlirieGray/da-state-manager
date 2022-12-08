import { useState } from 'react'
import {World, Game, Protagonist} from '../types'
import {getLocalValue} from './useLocalStorage'

const GET_WORLDS_URL = 'http://localhost:5555/worldstates/get'
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
            // set fetch state to error
        }
    }
    return [worlds, getWorlds] as const
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