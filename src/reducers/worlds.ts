import { Action, ADD_WORLD_STATE, REMOVE_WORLD_STATE } from '../actions/worlds'
import { WorldsState, World } from '../types'
import { v4 as uuid4 } from "uuid"

export const defaultWorld = (): World => ({
    name: "Default World State",
    ID: uuid4(),
    active: true,
    ficLinks: [],
    warden: {
        name: "Kallian Tabris",
        origin: "City Elf",
        class: "Warrior",
        romance: "Alistair",
        companions: ["Alistair", "Morrigan", "Leliana", "Zevran", "Wynne", "Oghren", "Sten", "Shale"],
        ruler: "Anora",
        alive: true,
    },
    hawke: {
        name: "Marian Hawke",
        class: "Mage",
        romance: "Isabela",
        companions: ["Varric", "Isabela", "Anders", "Fenris", "Merrill", "Sebastian", "Carver"],
        sided: "mages",
    },
    inky: {
        name: "Herah Adaar",
        class: "Rogue",
        romance: "Cassandra",
        companions: ["Cassandra", "Solas", "Varric", "Vivienne", "Sera", "The Iron Bull", "Dorian", "Blackwall"],
        disband: true,
    },
})

export const initialState = (): WorldsState => ({
    worlds: [
        defaultWorld(),
    ],
})



export default (state: WorldsState = initialState(), action: Action) => {
    switch (action.type) {
        case ADD_WORLD_STATE: {
            return {
                ...state,
                worlds: [
                    ...state.worlds,
                    defaultWorld(),
                ]
            }
        }
        case REMOVE_WORLD_STATE: {
            return {
                ...state,
                worlds: state.worlds.filter((world) => {
                    return world.ID != action.ID
                })
            }
        }
        default:
            return state
    }
}