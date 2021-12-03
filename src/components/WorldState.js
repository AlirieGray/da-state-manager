import '../styles/worldState.css'
import Protagonist from './Protagonist'

function WorldState(props) {
    const {name, warden, hawke, inky} = props.world
 
  return (
    <div className="stateWrapper">
        <div className="worldStateName">
            World State: {name}
        </div>
        <Protagonist name={warden.name} romance={warden.romance} type={"warden"}/>
        <Protagonist name={hawke.name} romance={hawke.romance} type={"hawke"}/>
        <Protagonist name={inky.name} romance={inky.romance} type={"inky"}/>
    </div>
  );
}

export default WorldState
