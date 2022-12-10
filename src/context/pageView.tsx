import React, { createContext, useState } from 'react'
import {PageViewType, PageViewContextType} from '../types'

export const PageViewContext = createContext<PageViewContextType | null>(null)

const PageViewContextProvider = ({ children }: React.PropsWithChildren<unknown>) => {
    const [pageView, setPageView] = useState<PageViewType>(PageViewType.OVERVIEW)

    return <PageViewContext.Provider value={{
        pageView,
        setPageView
    }}>
        {children}
    </PageViewContext.Provider>
}

export default PageViewContextProvider
