import { useContext, useEffect} from 'react'
import WorldForm from "../../components/WorldForm/WorldForm"
import { PageViewContext } from '../../context/pageView'
import {  PageViewContextType, PageViewType, UserContextType } from '../../types'
import { usePutWorldstate, useGetWorldstate } from '../../hooks/worldstate'
import { AuthContext } from '../../context/auth'
import { useParams } from 'react-router'

function EditWorld( ) {
    const { id } = useParams()
    const { setPageView } = useContext(PageViewContext) as PageViewContextType
    const { accessToken, refreshToken } = useContext(AuthContext) as UserContextType
    const [world, getWorld, dispatch] = useGetWorldstate(id as string, accessToken, refreshToken)
    const [worldErr, putWorld] = usePutWorldstate(world, accessToken, refreshToken)
    
    useEffect(() => {
        setPageView(PageViewType.EDITING)
        getWorld()
    }, [])

    // todo: tab through order should go to games next, not buttons
    return <WorldForm 
        view={PageViewType.EDITING} 
        handleSubmit={putWorld} 
        state={world} 
        id={world.ID}
        dispatch={dispatch} />
}

export default EditWorld