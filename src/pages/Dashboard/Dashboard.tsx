import Worlds from './Worlds'
import  {useContext, useState} from 'react'
import { PageViewContext } from '../../context/pageView'
import { PageViewContextType, PageViewType } from '../../types'
import Modal  from '../../components/Modal/Modal'
import './dashboard.css'

// todo: use auth context
// and protected routes
// use context for nav page name and state
function Dashboard() {
    const { setPageView } = useContext(PageViewContext) as PageViewContextType
    setPageView(PageViewType.OVERVIEW)
    
    const [modalOpen, setModalOpen ] = useState(false) 
    const [worldToDelete, setWorldToDelete] = useState('')

    return (
        <>
            {modalOpen && <Modal setModalOpen={setModalOpen}> 
                <h1>Are you sure you want to delete this world state?</h1>
                <p> World: {worldToDelete} </p>
                <p>This action cannot be undone.</p>
            </Modal>}
            <Worlds setModalOpen={setModalOpen} setWorldToDelete={setWorldToDelete}/>
        </>
    )  

}


export default Dashboard
