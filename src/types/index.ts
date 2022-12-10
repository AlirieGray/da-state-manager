export enum PageViewType {
    VIEWING, EDITING, CREATING, OVERVIEW, LOGIN, REGISTER
}

export type PageViewContextType = {
    pageView: PageViewType
    setPageView: (page: PageViewType) => void
}

export type InputAttributes = {
    value: string
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export * from './worldTypes'
