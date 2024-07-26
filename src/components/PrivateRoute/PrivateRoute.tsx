import { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { Navigate } from 'react-router-dom'
import { UserContextType } from '../../types'

type ProtectedRouteProps = {
    outlet: JSX.Element
}

function PrivateRoute({ outlet }: ProtectedRouteProps) {
    const { accessToken } = useContext(AuthContext) as UserContextType

    if (accessToken === '') { // todo: check if access token is valid
        return <Navigate to="/login" />
    }
    return outlet

}

export default PrivateRoute
