import { ADD_WORLD_STATE } from '../actions/actions'
import { WorldsState, World } from '../types'

const defaultWorld = (): World => ({
    name: "default",
    ficLinks: [],
    warden: {
        name: "Kallian Tabris",
        origin: "City Elf",
        class: "Warrior",
        romance: "Alistair",
        ruler: "Anora",
        alive: true,
    },
    hawke: {
        name: "Marian Hawke",
        class: "Mage",
        romance: "Isabela",
        sided: "mages",
    },
    inky: {
        name: "Herah Adaar",
        class: "Rogue",
        romance: "Cassandra",
        disband: true,
    },
})

const initialState = (): WorldsState => ({
    worlds: [
        defaultWorld(),
    ],
})



export default (state: WorldsState = initialState(), action) => {
    switch (action.type) {
        case ADD_WORLD_STATE: {
            return {
                ...state,
                worldStates: [
                    ...state.worlds,
                    action.payload,
                ]
            }
        }
        default:
            return state
    }
}