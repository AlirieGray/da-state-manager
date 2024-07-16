import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import { useEffect } from 'react'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import CreateWorld from './pages/CreateWorld/CreateWorld'
import { Route, Routes } from 'react-router-dom'
import AuthContextProvider from './context/auth'
import Nav from './components/Nav/Nav'
import PageViewContextProvider from './context/pageView'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import EditWorld from './pages/EditWorld/EditWorld'
import ViewWorld from './pages/ViewWorld/ViewWorld'
import About from './pages/About/About'
import WorldsContextProvider from './context/worlds'

// todo: nice 404 not route found page with redirect to home

function App() {

  useEffect(() => {
    window.addEventListener('error', e => {
        if (e.message === 'ResizeObserver loop limit exceeded') {
            const resizeObserverErrDiv = document.getElementById(
                'webpack-dev-server-client-overlay-div'
            );
            const resizeObserverErr = document.getElementById(
                'webpack-dev-server-client-overlay'
            );
            if (resizeObserverErr) {
                resizeObserverErr.setAttribute('style', 'display: none');
            }
            if (resizeObserverErrDiv) {
                resizeObserverErrDiv.setAttribute('style', 'display: none');
            }
        }
    });
}, []);
  
  return (
    <AuthContextProvider>
      <PageViewContextProvider>
        <WorldsContextProvider>
          <div className="appWrapper">
            <Nav />
            <Routes> 
              <Route path='/' element={<PrivateRoute outlet={<Dashboard />} />} />
              <Route path='/login' element={<Login />} />
              <Route path='/about' element={<About />} />
              <Route path='/register' element={<Register />} />
              <Route path='/world/:id/edit' element={<PrivateRoute outlet={<EditWorld />} />} />
              <Route path='/world/:id/view' element={<PrivateRoute outlet={<ViewWorld />} />} />
              <Route path='/create' element={<PrivateRoute outlet={<CreateWorld />} />} />
            </Routes>
          </div>
        </WorldsContextProvider>
      </PageViewContextProvider>
    </AuthContextProvider>
    
  )
}

export default App
