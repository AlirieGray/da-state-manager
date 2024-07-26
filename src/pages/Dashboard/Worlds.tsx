import WorldCard from './WorldCard'
import './worlds.css'
import { StatusContextType, World } from '../../types'
import { Link } from 'react-router-dom'
import { StatusType } from '../../types'
import { StatusContext } from '../../context/status'
import { useContext } from 'react'
import { Oval } from 'react-loader-spinner'

// TODO: type safety props
function Worlds({worlds, setModalOpen, setWorldToDelete, setWorldIDToDelete}: any) {
    const {status} = useContext(StatusContext) as StatusContextType

    return (
        <div className='worldsContainer'>
            { status === StatusType.LOADING && (
                <div>
                    <Oval
                        visible={true}
                        height="40"
                        width="40"
                        color="#B60BEA"
                        secondaryColor="#6c04a3"
                        ariaLabel="oval-loading"
                        wrapperStyle={{marginTop: "20px"}}
                        wrapperClass=""
                        />
                </div>
            )}
            { worlds.length === 0 && status !== StatusType.LOADING && (
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
