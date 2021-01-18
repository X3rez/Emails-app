import React from "react";

import {Button} from './styles';



const LoginButton = ({loginWith, background,color })=>{
    return(
        <Button color={color} background={background} >Login With {loginWith}</Button> 
    )
}


export default LoginButton