import { ADD_WORLD_STATE } from './actions'

const defaultWorld = {
    name: "default",
    ficLinks: [],
    warden: {
        name: "Kallian Tabris",
        origin: "City Elf",
        class: "Warrior",
        romance: "Alistair",
        ruler: "Anora",
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
}

const initialState = {
    worldStates: [
        defaultWorld,
    ],
}



export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORLD_STATE: {
            return {
                ...state,
                worldStates: [
                    ...state.worldStates,
                    action.payload,
                ]
            }
        }
        default:
            return state
    }
}