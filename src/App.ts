import './App.css'
import { useSelector } from 'react-redux'
import WorldState from './components/WorldState'
import AddNewState from './components/AddNewState'

function App() {


  return (
    <div className="wrapper">
      <AddNewState />
      <div className="states">
        {worldStates.map(world => (
          <WorldState key={world.name} world={world}/>
        ))}
      </div>
    </div>
  )
}

export default App
