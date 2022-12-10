import React, {useContext} from 'react'
import {AuthContext, UserContextType} from '../../context/auth'
import { Route, Navigate, RouteProps } from 'react-router-dom'

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
