import { useContext, useEffect} from 'react'
import WorldForm from "../../components/WorldForm/WorldForm"
import { PageViewContext } from '../../context/pageView'
import {  PageViewContextType, PageViewType, UserContextType, StatusType, StatusContextType } from '../../types'
import { usePutWorldstate, useGetWorldstate } from '../../hooks/worldstate'
import { AuthContext } from '../../context/auth'
import { useParams } from 'react-router'
import { StatusContext } from '../../context/status'
import { get } from 'lodash'

function EditWorld( ) {
    const { id } = useParams()
    const { setPageView } = useContext(PageViewContext) as PageViewContextType
    const { accessToken, refreshToken } = useContext(AuthContext) as UserContextType
    const [world, getWorld, dispatch] = useGetWorldstate(id as string, accessToken, refreshToken)
    const [putWorld] = usePutWorldstate(world, accessToken, refreshToken)
    const { setStatus, setErrorMessage } = useContext(StatusContext) as StatusContextType

    useEffect(() => {
        setPageView(PageViewType.EDITING)
        getWorld()
    }, [])

    const handleSubmit = () => {
        if (get(world, "name", '').trim() === '') {
            setStatus(StatusType.ERROR)
            setErrorMessage("required field")
        } else {
            putWorld()
        }
    }

    // todo: tab through order should go to games next, not buttons
    return <WorldForm 
        view={PageViewType.EDITING} 
        handleSubmit={handleSubmit} 
        state={world} 
        id={world.ID}
        dispatch={dispatch} />
}

export default EditWorld