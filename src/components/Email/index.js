import React from 'react'

import {Delete,Button,Owner,Div} from './styles'




function Email({em,owner}) {
    return (
        <Div>
            <Button>Send E-Mail</Button>
            <Owner>{owner}</Owner>
            <h4>{em}</h4>
            <Delete>Delete</Delete>
        </Div>
    )
}

export default Email
