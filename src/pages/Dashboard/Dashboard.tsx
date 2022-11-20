import React from 'react'
import {World, DashViewType} from '../../types'
import Nav from '../../components/Nav'
import { Navigate } from 'react-router-dom';
import Worlds from '../../components/Worlds'
import './dashboard.css'
import {getLocalValue} from '../../hooks/useLocalStorage'


function Dashboard() {
    const authToken = getLocalValue('accessToken', '')
    if (authToken == '') {
        return (
            <Navigate replace to="/login" />
        )
    }

    return (
        <div className="dashboardWrapper">
            <Nav view={DashViewType.OVERVIEW} pageName={"World States At-a-Glance"}/>
            <Worlds />
        </div>
    )  

}


export default Dashboard
