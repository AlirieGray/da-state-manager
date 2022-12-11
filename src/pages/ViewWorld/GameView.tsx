import { Game } from '../../types'
import QuestView from './QuestView'
import './viewWorld.css'

type GameViewProps = {
    game: Game
}

function GameView({game}: GameViewProps) {
    return (
        <div className='gameViewWrapper'>
            <div className='protagDetails'>
                <div className='protagName'>{game.protagonist.name !== '' ? game.protagonist.name : game.name }</div>
                <div className='protagDetail'>{game.protagonist.summary}</div>
                <div className='protagDetail'>Class: {game.protagonist.class}</div>
                {game.protagonist.origin !== undefined ? <div className='protagDetail'>Origin: {game.protagonist.origin}</div> : <div></div>}
            </div>
            <div className='quests'>
                {game.quests.map((quest) => {
                    return <QuestView quest={quest}/>
                })}
            </div>
        </div>
    )
}

export default GameView