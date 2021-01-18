import React from 'react'

import LoginButton from "../../components/LoginButton/index";

import {Main} from './styles'

import Navbar from '../../components/Navbar/index'


const Home = ()=>{
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