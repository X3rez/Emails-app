import React from 'react'

import Editor from '../../components/Editor/index'

import Dashboard from '../../components/Dashboard/index'

import {Route} from 'react-router-dom'


const UserPanel = ()=>{
    const IMG = "https://free4kwallpapers.com/uploads/originals/2020/04/30/retro-mustang-wallpaper.jpg"

    return(
        <>
            <Dashboard userImage={IMG} userName="Chris"/>
            <Route path='/userpanel/editor' component={Editor}/>
        </>        
    )
}


export default UserPanel