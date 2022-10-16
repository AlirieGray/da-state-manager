import { Action, ADD_WORLD_STATE, REMOVE_WORLD_STATE } from '../actions/worlds'
import { WorldsState, World } from '../types'
import { v4 as uuid4 } from "uuid"

export const defaultWorld = (): World => ({
    name: "original",
    ID: uuid4(),
    wip: false,
    imageLink: "",
    ficLinks: ["https://bit.ly/shortenedao3link"],
    summary: "Sariel Surana becomes mistress to King Alistair Theirin. Rosalind Hawke becomes a pirate with Isabela. Yonazli Adaar conscripts the mages and lives as Tal-Vashoth with Iron Bull.",
    active: true,
    warden: {
        name: "Sariel Surana",
        origin: "Circle Mage Elf",
        class: "mage",
        romance: "Alistair",
        companions: ["Alistair", "Morrigan", "Leliana", "Zevran", "Wynne", "Oghren", "Sten", "Shale"],
        ruler: "Alistair",
        alive: true,
    },
    hawke: {
        name: "Rosalind Hawke",
        class: "Mage",
        romance: "Isabela",
        companions: ["Varric", "Isabela", "Anders", "Fenris", "Merrill", "Sebastian", "Carver"],
        sided: "mages",
    },
    inky: {
        name: "Yonazli Adaar",
        class: "Rogue",
        companions: [],
        romance: "Iron Bull",
        disband: true,
    },
})

export const renegadeWorld = (): World => ({
    name: "Renegade",
    wip: false,
    ID: uuid4(),
    imageLink: "",
    summary: "William Cousland romances Morrigna, marries Anora, then follows Morrigan through the Eluvian. Loghain is spared and Alistair is executed. Sophia Hawke moves in with Merrill and then sides with the mages. Alindra Lavellan is a rogue who romances Solas, frees the rebel mages, and disbands the Inquisition.",
    ficLinks: [],
    active: true,
    warden: {
        name: "William Cousland",
        origin: "Human noble",
        class: "Warrior",
        romance: "Morrigan",
        ruler: "Anora",
        companions: [],
        alive: true,
    },
    hawke: {
        name: "Sophia Hawke",
        class: "Warrior",
        romance: "Merrill",
        sided: "mages",
        companions: [],
    },
    inky: {
        name: "Alindra Lavellan",
        class: "Rogue",
        romance: "Solas",
        companions: [],
        disband: true,
    },
})

export const nonaWip = (): World => ({
    name: "Nona's World",
    wip: true,
    ID: uuid4(),
    imageLink: "",
    summary: "Nona Aeducan begins a new life on the surface with Zevran Arainai. Eva Hawke defects to the Qun with Tallis after the events of Mark of the Assassin.",
    ficLinks: [],
    active: true,
    warden: {
        name: "Nona Aeducan",
        origin: "Dwarf noble",
        class: "Rogue",
        romance: "Zevran",
        ruler: "Alistair and Anora",
        alive: true,
        companions: [],
    },
    hawke: {
        name: "Eva Hawke",
        class: "Warrior",
        romance: "Tallis",
        sided: "Templars",
        companions: [],
    },
    inky: {
        name: "",
        class: "",
        romance: "",
        disband: true,
        companions: [],
    },
})

export const initialState = (): WorldsState => ({
    worlds: [
        defaultWorld(),
        renegadeWorld(),
        nonaWip()
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