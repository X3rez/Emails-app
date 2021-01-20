import React,{useContext} from "react";

import {Button} from './styles';

import {TheContex} from "../../context/AuthContext";



const LoginButton = ({loginWith, background,color })=>{
    const {loginFacebook,loginGoogle} = useContext(TheContex)
    const checkIn = loginWith === "Facebook" ? loginFacebook : loginGoogle

    return(
        <Button onClick={checkIn} color={color} background={background} >Login With {loginWith}</Button> 
    )
}


export default LoginButton