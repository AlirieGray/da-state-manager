import Worlds from './Worlds'
import  {useContext} from 'react'
import { PageViewContext } from '../../context/pageView'
import { PageViewContextType, PageViewType } from '../../types'
import './dashboard.css'

// todo: use auth context
// and protected routes
// use context for nav page name and state
function Dashboard() {
    const { setPageView } = useContext(PageViewContext) as PageViewContextType
    setPageView(PageViewType.OVERVIEW)
    return (
        <div>
            <Worlds />
        </div>
    )  

}


export default Dashboard
