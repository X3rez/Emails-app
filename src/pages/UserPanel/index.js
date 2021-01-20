import React,{useContext} from 'react'

import Editor from '../../components/Editor/index'

import Dashboard from '../../components/Dashboard/index'

import {Route} from 'react-router-dom'

import { TheContex } from "../../context/AuthContext";


const UserPanel = ()=>{
    const {currentUser} = useContext(TheContex)

    return(
        <>
            <Dashboard userImage={currentUser.photoURL} userName={currentUser.displayName}/>
            <Route path='/userpanel/editor' component={Editor}/>
        </>        
    )
}


export default UserPanel