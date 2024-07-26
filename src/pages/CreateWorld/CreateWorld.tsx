import { useContext, useEffect, useReducer} from 'react'
import WorldForm from "../../components/WorldForm/WorldForm"
import { PageViewContext } from '../../context/pageView'
import { PageViewContextType, PageViewType, UserContextType } from '../../types'
import { defaultCreateWorldForm, createWorldFormReducer } from '../../reducers/createWorldForm'
import { usePostWorldstate } from '../../hooks/worldstate'
import { AuthContext } from '../../context/auth'
// import { usePostWorldstate } from '../../hooks/worldstate'
// todo: organize types all into types file/directory, out of context dir


function CreateWorld() {
    const { setPageView } = useContext(PageViewContext) as PageViewContextType
    const [formState, dispatch] = useReducer(createWorldFormReducer, defaultCreateWorldForm)
    const { accessToken, refreshToken } = useContext(AuthContext) as UserContextType
    const [worldErr, postWorld] = usePostWorldstate(formState, accessToken, refreshToken)
    
    useEffect(() => {
        setPageView(PageViewType.CREATING)
    }, [])
    // todo: tab through order should go to games next, not buttons
    return <WorldForm 
        view={PageViewType.CREATING} 
        handleSubmit={postWorld} 
        state={formState} 
        dispatch={dispatch} />
}

export default CreateWorld