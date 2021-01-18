import React from 'react'

import Editor from '../../components/Editor/index'

import Dashboard from '../../components/Dashboard/index'

import {Route} from 'react-router-dom'


const UserPanel = ()=>{
    return(
        <>
            <Dashboard />
            <Route path='/userpanel/editor' component={Editor}/>
        </>        
    )
}


export default UserPanel