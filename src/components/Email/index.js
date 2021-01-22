import React from 'react'

import {useHistory} from 'react-router-dom'

import {Delete,Button,Owner,Div} from './styles'

import firebase from '../../firebase'



function Email({em,owner,id}) {

    const history = useHistory()

    const handleSend = () => {
        history.push(`/userpanel/message/${em}`)
    }


    const handleDelete = () => {
        const database = firebase.database()
        const myUserId = firebase.auth().currentUser.uid;
        database.ref(`users/${myUserId}/${id}`).remove(
            err => {
                if(!err) console.log("deleted successfully")
            }
        )
    }


    return (
        <Div>
            <Button onClick={handleSend}>Send E-Mail</Button>
            <Owner>{owner}</Owner>
            <h4>{em}</h4>
            <Delete onClick={handleDelete}>Delete</Delete>
        </Div>
    )
}

export default Email
