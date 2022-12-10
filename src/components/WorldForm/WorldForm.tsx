import { useReducer } from 'react'
import {PageViewType} from '../../types'
import useInput from '../../hooks/useInput'
import { defaultCreateWorldForm, createWorldFormReducer } from '../../reducers/createWorldForm'
import Origins from './Origins'
import DA2 from './DA2'
import {get} from 'lodash'
import Inquisition from './Inquisition'

type Props = {
    view: PageViewType;
}


// todo: handle multi-select options (such as romances, companions)
// pre load with default values
// todo: clear form button
// todo: move reducer hook to hooks directory
// todo: useReducer for login and auth
// todo: use different reducers depending on props view
// todo: store form state in local storage ? and use context

function WorldForm(props: Props) {
    const [state, dispatch] = useReducer(createWorldFormReducer, defaultCreateWorldForm)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{display: 'flex', width: '80vw', justifyContent: 'space-around' }}>
                <div className='formSection'>
                    <h1>Origins</h1>
                    <Origins gameState={get(state, 'games.0')} onChange={dispatch}/>
                </div>
                <div className='formSection'>
                    <h1>Dragon Age 2</h1>
                    <DA2 gameState={get(state, 'games.1')} onChange={dispatch}/>
                </div>
                <div className='formSection'>
                    <h1>Dragon Age Inquisition</h1>
                    <Inquisition gameState={get(state, 'games.2')} onChange={dispatch} />
                </div>
            </form>
            <button onClick={() => dispatch({type: 'CLEAR_FORM'})}> CLEAR FORM </button>
        </div>
        
    )
}

export default WorldForm