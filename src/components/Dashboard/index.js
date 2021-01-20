import React from 'react'

import {NavLink} from 'react-router-dom'

import { IconContext } from "react-icons";

import { FaPlus } from "react-icons/fa";

import { AiOutlineMail } from "react-icons/ai";

import {IoOptionsSharp} from 'react-icons/io5'

import LogoutButton from "../LogoutButton/index";

import {Aside,Img,H5,Hr,Name} from './styles'




const Dashboard = ({userImage,userName})=>{
    return(
        <Aside>
            <IconContext.Provider value={{style:{color:'white',fontSize:25,margin:"0 0.5em"}}}>
                    <Img src={`${userImage}`}/>
                    <Name>{userName}</Name>
                    <Hr/>
                    <H5>
                        <NavLink activeStyle={{backgroundColor:'#f50057'}} to='/userpanel/addemail'><FaPlus /> ADD NEW EMAIL</NavLink>
                    </H5>

                    <H5>
                        <NavLink activeStyle={{backgroundColor:'#f50057'}} to='/userpanel/emails'> <AiOutlineMail /> MY EMAILS</NavLink>
                    </H5>

                    <H5>
                        <NavLink activeStyle={{backgroundColor:'#f50057'}} to='/userpanel/configurations'><IoOptionsSharp />CONFIGURATIONS</NavLink>
                    </H5>

                        <LogoutButton />

            </IconContext.Provider>
        </Aside>        
    )
}


export default Dashboard