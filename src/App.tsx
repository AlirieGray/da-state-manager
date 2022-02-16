import './App.css'
import Worlds from './components/Worlds'
import { Route, Routes } from "react-router-dom";

function App() {


  return (
    <Routes> 
      <Route path="/" element={<Worlds />} />
    </Routes>
  )
}

export default App
