import React,{useContext} from "react";

import { Button } from "./styles";

import { TheContex } from "../../context/AuthContext";

const LogoutButton = ()=>{
    const {logout} = useContext(TheContex)


    return (<Button onClick={logout}>Logout</Button>)
}


export default LogoutButton