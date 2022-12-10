import { useContext } from 'react'
import WorldForm from "../../components/WorldForm/WorldForm"
import { PageViewContext } from '../../context/pageView'
import { PageViewContextType, PageViewType } from '../../types'
// todo: organize types all into types file/directory, out of context dir
// add auth context
function CreateWorld() {
    const { setPageView } = useContext(PageViewContext) as PageViewContextType
    setPageView(PageViewType.CREATING)

    return (
        <div>
            <WorldForm view={PageViewType.CREATING}/>
        </div>
    )
}

export default CreateWorld