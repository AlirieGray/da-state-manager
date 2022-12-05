import { useState } from 'react'
import {World} from '../types'

const GET_WORLDS_URL = 'http://localhost:5555/worlds/get'
// todo: handle loading, API errors, etc

export function useGetWorldstates() {
    const [worlds, setWorlds] = useState<Array<World>>([])

    const getWorlds = async () => {
        try {
            // set fetch state to loading
            fetch(GET_WORLDS_URL).then(res => {
                console.log(res)
                return res.json()
            }).then((resJSON) => {
                console.log("get world states: ")
                console.log(resJSON)
            })
        } catch(err) {
            console.log(err)
            // set fetch state to error
        }
    }
    return [worlds, getWorlds] as const
}