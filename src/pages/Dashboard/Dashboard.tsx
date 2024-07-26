import Worlds from './Worlds'
import  {useContext, useState, useEffect} from 'react'
import { PageViewContext } from '../../context/pageView'
import { PageViewContextType, PageViewType } from '../../types'
import Modal  from '../../components/Modal/Modal'
import { useDeleteWorldstate } from '../../hooks/worldstate'
import {AuthContext, UserContextType} from '../../context/auth'
import './dashboard.css'
import { useGetAllWorldstates } from '../../hooks/worldstate'

function Dashboard() {
    const { setPageView } = useContext(PageViewContext) as PageViewContextType
    setPageView(PageViewType.OVERVIEW)
    
    const [modalOpen, setModalOpen ] = useState(false) 
    const [worldToDelete, setWorldToDelete] = useState('')
    const [worldIDToDelete, setWorldIDToDelete] = useState('')
    const { accessToken, refreshToken } = useContext(AuthContext) as UserContextType
    const [deleteWorld] = useDeleteWorldstate(worldIDToDelete, accessToken, refreshToken)
    const [worlds, getWorlds] = useGetAllWorldstates(accessToken, refreshToken)

    useEffect(() => {
        getWorlds()
    }, [])

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
                worlds={worlds}
                setModalOpen={setModalOpen} 
                setWorldToDelete={setWorldToDelete} 
                setWorldIDToDelete={setWorldIDToDelete}
            />
        </>
    )  

}


export default Dashboard
