import React,{useContext} from 'react'

import {Route,Redirect} from 'react-router-dom'

import {TheContex} from '../../context/AuthContext'




const PrivateRoute = ({component:Component, ...rest})=>{
    
    const {currentUser} = useContext(TheContex)
    
    return(
            <Route 
                {...rest} 
                render={(props) => {
                    return currentUser ? <Component {...props}/> : <Redirect to='/'/>
                }}/>)
}


export default PrivateRoute