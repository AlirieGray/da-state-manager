import './App.css'
import Worlds from './components/Worlds'
import AddNewWorld from './components/AddNewWorld'

function App() {


  return (
    <div className="wrapper">
      <AddNewWorld />
      <Worlds />
    </div>
  )
}

export default App
