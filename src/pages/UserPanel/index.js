import React,{useContext} from 'react'

import Dashboard from '../../components/Dashboard/index'

import { TheContex } from "../../context/AuthContext";


const UserPanel = ()=>{
    const {currentUser} = useContext(TheContex)

    return(
        <>
            <Dashboard userImage={currentUser.photoURL} userName={currentUser.displayName}/>
        </>        
    )
}


export default UserPanel