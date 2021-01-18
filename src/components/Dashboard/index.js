import React from 'react'

import { IconContext } from "react-icons";

import { GrAddCircle } from "react-icons/gr";

import {Aside,Img,H5,Hr} from './styles'

import {NavLink} from 'react-router-dom'



const Dashboard = ()=>{
    return(
        <Aside>
            <IconContext.Provider value={{style:{color:'white',fontSize:20}}}>
                    <Img src="https://free4kwallpapers.com/uploads/originals/2020/04/30/retro-mustang-wallpaper.jpg"/>
                    <Hr/>
                    <H5>
                        <NavLink activeStyle={{backgroundColor:'#f50057'}} to='/userpanel/addemail'><GrAddCircle /> ADD NEW EMAIL</NavLink>
                    </H5>

                    <H5>
                        <NavLink activeStyle={{backgroundColor:'#f50057'}} to='/userpanel/emails'>MY EMAILS</NavLink>
                    </H5>

                    <H5>
                        <NavLink activeStyle={{backgroundColor:'#f50057'}} to='/userpanel/configurations'>CONFIGURATIONS</NavLink>
                    </H5>
            </IconContext.Provider>
        </Aside>        
    )
}


export default Dashboard