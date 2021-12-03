import './App.css'
import { useSelector } from 'react-redux'
import WorldState from './components/WorldState'

function App() {
  const worldStates = useSelector(state => state.worldStates)

  return (
    <div className="wrapper">
      <div className="states">
        {worldStates.map(world => (
          <WorldState key={world.name} world={world}/>
        ))}
      </div>
    </div>
  );
}

export default App
