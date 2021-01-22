import React from 'react'

import {useHistory} from 'react-router-dom'

import {Delete,Button,Owner,Div} from './styles'



function Email({em,owner}) {

    const history = useHistory()

    const handleClick = ()=>{
        history.push(`/userpanel/message/${em}`)
    }


    return (
        <Div>
            <Button onClick={handleClick}>Send E-Mail</Button>
            <Owner>{owner}</Owner>
            <h4>{em}</h4>
            <Delete>Delete</Delete>
        </Div>
    )
}

export default Email
