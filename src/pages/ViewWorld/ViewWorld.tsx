import { useContext, useEffect, useState } from 'react'
import { PageViewContext } from '../../context/pageView'
import { Link } from 'react-router-dom'
import {  PageViewContextType, PageViewType, Game, Quest, World } from '../../types'
import { useGetWorldstate } from '../../hooks/worldstate'
import {AuthContext, UserContextType} from '../../context/auth'
import { useParams } from 'react-router'
import GameView from './GameView'
import './viewWorld.css'
// TODO: get world by id, then load edit form with values as default in state


function ViewWorld() {
    const { id } = useParams()
    const { setPageView } = useContext(PageViewContext) as PageViewContextType
    const { accessToken, refreshToken } = useContext(AuthContext) as UserContextType
    const [world, getWorld] = useGetWorldstate(id as string, accessToken, refreshToken)
    const [gameView, setGameView] = useState('all')
    
    useEffect(() => {
        setPageView(PageViewType.VIEWING)
        getWorld()
    }, [])

    const getGameViews = () => {
        if (gameView === 'all') {
            return world.games.map((game) => {
                return <GameView game={game} />
            })
        } else if (gameView === 'Origins') {
            return <GameView game={world.games[0]} />
        } else if (gameView === 'Dragon Age 2') {
            return <GameView game={world.games[1]}/>
        } else if (gameView === 'Inquisition') {
            return <GameView game={world.games[2]} />  
        }   
    }


    // todo: tab through order should go to games next, not buttons
    return ( 
        <div className='viewWorldWrapper'>
            <div className='viewWorldHeader'>
                <div className='title'>
                    <div className='worldName'> {world.name} </div>
                    <div>
                        <Link to={`/world/${world.ID}/edit`} className='editLink'>EDIT</Link>
                    </div>
                </div>
                <div className='summary'>
                    {world.summary}
                </div>
                <div className='protagButtons'>
                    {world.games.map((game: Game) => {
                        return <button className='protagButton' onClick={() => setGameView(game.name)}>{game.protagonist.name !== '' ? game.protagonist.name : game.name}</button>
                    })}
                    <button className='protagButton' onClick={() => setGameView('all')}>View All</button>
                </div>
            </div>
            <div className='gameViewsWrapper'>
                {getGameViews()}
            </div>
        </div>
    )
}

export default ViewWorld