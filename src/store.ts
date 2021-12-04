import { createStore } from 'redux'
import worldsReducer from './reducers/worldsReducer'


const store = createStore(() => ({
    reducer: {
        worlds: worldsReducer,
    }
    // worldStates: [
    //   {
    //     name: "default",
    //     ficLinks: [],
    //     warden: {
    //       name: "Kallian Tabris",
    //       origin: "City Elf",
    //       class: "Warrior",
    //       romance: "Alistair",
    //       ruler: "Anora",
    //     },
    //     hawke: {
    //       name: "Marian Hawke",
    //       class: "Mage",
    //       romance: "Isabela",
    //       sided: "mages",
    //     },
    //     inky: {
    //       name: "Herah Adaar",
    //       class: "Rogue",
    //       romance: "Cassandra",
    //       disband: true,
    //     },
    //   },
      
    // ],
  }))


