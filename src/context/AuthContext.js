import React,{ createContext,useState,useEffect } from "react";

import { useHistory } from "react-router-dom";

import firebase from "../firebase";

const auth = firebase.auth()

export const TheContex = createContext()



const AuthProvider = ({children})=>{   
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    const facebookProvider = new firebase.auth.FacebookAuthProvider()
    const [currentUser,setCurrentUser] = useState({})
    const history = useHistory()
    
    const loginGoogle = () => {
        auth.signInWithPopup(googleProvider)
            .then(res => console.log("user logged"))
            .catch(err => console.log(err))
    }

    const loginFacebook = () => {
        auth.signInWithPopup(facebookProvider)
            .then(res => console.log("user logged"))
            .catch(err => console.log(err))
    }

    const logout = ()=>{
        auth.signOut()
        history.push('/')
    }


    useEffect(() => {
        const unRe = auth.onAuthStateChanged( user => {
                setCurrentUser(user)
        })

        return unRe
        
    },[])


    const data ={
        loginGoogle,
        loginFacebook,
        logout,
        currentUser
    }
    
    return(
        <TheContex.Provider value={data}>
        
            {children}
        
        </TheContex.Provider>)
}


export default AuthProvider