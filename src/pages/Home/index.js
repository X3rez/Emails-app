import React, { useEffect,useContext } from 'react'

import LoginButton from "../../components/LoginButton/index";

import {Main} from './styles'

import Navbar from '../../components/Navbar/index'

import {useHistory} from 'react-router-dom'

import {TheContex} from '../../context/AuthContext'


const Home = ()=>{
    const {currentUser} = useContext(TheContex)
    const history = useHistory()

    useEffect(()=>{
        if(currentUser){
            history.push("/userpanel/addemail")        
        }
    },[currentUser,history])
    return(
    <>
        <Navbar/>
        <Main>
            <LoginButton loginWith="Facebook" color="white" background="#40c4ff"/>
            <LoginButton loginWith="Google" color="white" background="#c62828"/>
        </Main>
    </>
    )
}


export default Home