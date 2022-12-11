import React, {useState} from 'react'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import CreateWorld from './pages/CreateWorld/CreateWorld'
import { Route, Routes } from 'react-router-dom'
import AuthContextProvider from './context/auth'
import Nav from './components/Nav/Nav'
import PageViewContextProvider from './context/pageView'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import EditWorld from './pages/EditWorld/EditWorld'

// todo: protected routes using auth context provider

function App() {
  
  return (
    <AuthContextProvider>
      <PageViewContextProvider>
        <div className="appWrapper">
          <Nav />
          <Routes> 
            <Route path='/' element={<PrivateRoute outlet={<Dashboard />} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/world/:id/edit' element={<EditWorld />} />
            <Route path='/create' element={<PrivateRoute outlet={<CreateWorld />} />} />
          </Routes>
        </div>
      </PageViewContextProvider>
    </AuthContextProvider>
    
  )
}

export default App
