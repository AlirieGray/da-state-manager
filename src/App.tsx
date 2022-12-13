import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import CreateWorld from './pages/CreateWorld/CreateWorld'
import { Route, Routes } from 'react-router-dom'
import AuthContextProvider from './context/auth'
import Nav from './components/Nav/Nav'
import PageViewContextProvider from './context/pageView'
import ThemeContextProvider from './context/theme'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import EditWorld from './pages/EditWorld/EditWorld'
import ViewWorld from './pages/ViewWorld/ViewWorld'

// todo: nice 404 not route found page with redirect to home

function App() {
  
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
      <PageViewContextProvider>
        <div className="appWrapper">
          <Nav />
          <Routes> 
            <Route path='/' element={<PrivateRoute outlet={<Dashboard />} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/world/:id/edit' element={<PrivateRoute outlet={<EditWorld />} />} />
            <Route path='/world/:id/view' element={<PrivateRoute outlet={<ViewWorld />} />} />
            <Route path='/create' element={<PrivateRoute outlet={<CreateWorld />} />} />
          </Routes>
        </div>
      </PageViewContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
    
  )
}

export default App
