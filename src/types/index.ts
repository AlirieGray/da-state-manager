export enum PageViewType {
    VIEWING, EDITING, CREATING, OVERVIEW, LOGIN, REGISTER, ABOUT
}

export type PageViewContextType = {
    pageView: PageViewType
    setPageView: (page: PageViewType) => void
}

export type InputAttributes = {
    value: string
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export type MultiSelectOption = {
    name: string
    id: number
}

export enum StatusType {
    LOADING, 
    COMPLETE,
    ERROR
}

export type StatusContextType = {
    status: StatusType
    errorMessage: string
    setStatus: (status: StatusType) => void
    setErrorMessage: (erroMessage: string) => void
}


export * from './worldTypes'

export * from './actions'
