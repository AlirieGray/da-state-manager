import React, { createContext, useState } from 'react'
import {World, WorldContextType } from '../types'


export const WorldsContext = createContext<WorldContextType| null >(null)

const WorldsContextProvider = ({ children }: React.PropsWithChildren<unknown>) => {
    const [worlds, setWorlds] = useState<Array<World>>([])

    return <WorldsContext.Provider value={{
        worlds,
        setWorlds
    }}>
        {children}
    </WorldsContext.Provider>
}

export default WorldsContextProvider
