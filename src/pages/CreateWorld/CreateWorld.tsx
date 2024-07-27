import { useContext, useEffect, useReducer} from 'react'
import WorldForm from "../../components/WorldForm/WorldForm"
import { PageViewContext } from '../../context/pageView'
import { PageViewContextType, PageViewType, StatusContextType, StatusType, UserContextType } from '../../types'
import { defaultCreateWorldForm, createWorldFormReducer } from '../../reducers/createWorldForm'
import { usePostWorldstate } from '../../hooks/worldstate'
import { AuthContext } from '../../context/auth'
import { get } from 'lodash'
import { StatusContext } from '../../context/status'


function CreateWorld() {
    const { setPageView } = useContext(PageViewContext) as PageViewContextType
    const [formState, dispatch] = useReducer(createWorldFormReducer, defaultCreateWorldForm)
    const { accessToken, refreshToken } = useContext(AuthContext) as UserContextType
    const [postWorld] = usePostWorldstate(formState, accessToken, refreshToken)
    const { setStatus, setErrorMessage } = useContext(StatusContext) as StatusContextType

    useEffect(() => {
        setPageView(PageViewType.CREATING)
    }, [])

    const handleSubmit = () => {
        if (get(formState, "name") === '') {
            setStatus(StatusType.ERROR)
            setErrorMessage("required field")
        } else {
            postWorld()
        }
    }

    // todo: tab through order should go to games next, not buttons
    return <WorldForm 
        view={PageViewType.CREATING} 
        handleSubmit={handleSubmit} 
        state={formState} 
        dispatch={dispatch} />
}

export default CreateWorld