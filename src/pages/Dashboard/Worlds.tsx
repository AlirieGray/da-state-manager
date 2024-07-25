import WorldCard from './WorldCard'
import './worlds.css'
import { World } from '../../types'
import { Link } from 'react-router-dom'

// TODO: type safety props
function Worlds({worlds, setModalOpen, setWorldToDelete, setWorldIDToDelete}: any) {

    return (
        <div className='worldsContainer'>
            {worlds.length === 0 && (
                <div className="noWorlds">
                    {"You don't have any World States yet! "} 
                    <Link className="createLink"to="/create">Click here</Link>
                    {" to create one."}
                </div>
            )}
            {worlds && worlds.map((world: World) => {
                return <WorldCard key={world.ID} 
                    world={world}
                    setModalOpen={setModalOpen}
                    setWorldToDelete={setWorldToDelete} 
                    setWorldIDToDelete={setWorldIDToDelete}
                />
            })}
        </div>
    )
}


export default Worlds
