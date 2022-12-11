import { useContext, useEffect, useReducer} from 'react'
import WorldForm from "../../components/WorldForm/WorldForm"
import { PageViewContext } from '../../context/pageView'
import {  PageViewContextType, PageViewType, Game, Quest, World } from '../../types'
import { editWorldFormReducer, defaultWorld } from '../../reducers/editWorldFormReducer'
import { usePutWorldstate, useGetWorldstate } from '../../hooks/worldstate'
import {AuthContext, UserContextType} from '../../context/auth'
import { useParams } from 'react-router'
// TODO: get world by id, then load edit form with values as default in state


function EditWorld( ) {
    const { id } = useParams()
    const { setPageView } = useContext(PageViewContext) as PageViewContextType
    const { accessToken } = useContext(AuthContext) as UserContextType
    // TODO: separate reducer and state for edit world form
    const [world, getWorld, dispatch] = useGetWorldstate(id as string, accessToken)
    // const [formState, dispatch] = useReducer(editWorldFormReducer, defaultWorld)
    const [worldErr, putWorld] = usePutWorldstate(world, accessToken)

    
    useEffect(() => {
        setPageView(PageViewType.EDITING)
        getWorld()
    }, [])


    // todo: tab through order should go to games next, not buttons
    return <WorldForm 
        view={PageViewType.EDITING} 
        handleSubmit={putWorld} 
        state={world} 
        dispatch={dispatch} />
}

export default EditWorld