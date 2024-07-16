import Worlds from './Worlds'
import  {useContext, useState} from 'react'
import { PageViewContext } from '../../context/pageView'
import { PageViewContextType, PageViewType } from '../../types'
import Modal  from '../../components/Modal/Modal'
import { useDeleteWorldstate } from '../../hooks/worldstate'
import {AuthContext, UserContextType} from '../../context/auth'
import './dashboard.css'

// todo: use auth context
// and protected routes
// use context for nav page name and state
function Dashboard() {
    const { setPageView } = useContext(PageViewContext) as PageViewContextType
    setPageView(PageViewType.OVERVIEW)
    
    const [modalOpen, setModalOpen ] = useState(false) 
    const [worldToDelete, setWorldToDelete] = useState('')
    const [worldIDToDelete, setWorldIDToDelete] = useState('')
    const { accessToken, refreshToken } = useContext(AuthContext) as UserContextType
    const [deleteWorldErr, deleteWorld] = useDeleteWorldstate(worldIDToDelete, accessToken, refreshToken)

    return (
        <>
            {modalOpen && <Modal 
                setModalOpen={setModalOpen} 
                worldIDToDelete={worldIDToDelete}
                deleteWorld={deleteWorld}> 
                <h1>Are you sure you want to delete this world state?</h1>
                <p> World: {worldToDelete} </p>
                <p>This action cannot be undone.</p>
            </Modal>}
            <Worlds 
                setModalOpen={setModalOpen} 
                setWorldToDelete={setWorldToDelete} 
                setWorldIDToDelete={setWorldIDToDelete}
            />
        </>
    )  

}


export default Dashboard
