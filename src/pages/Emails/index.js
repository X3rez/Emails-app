import React,{useEffect,useState} from 'react'

import {Div} from './styles'

import Email from '../../components/Email/index'

import firebase from '../../firebase'



function Emails() {
    const [emails ,setEmails] = useState({})

    const database = firebase.database()
    const myUserId = firebase.auth().currentUser.uid;
    
    useEffect(() => {
        let userEmails = database.ref(`users/${myUserId}`);
        
        userEmails.on('value', (data) => {
            if(data.val() != null){
                setEmails(data.val());
            }
        });
    },[myUserId,database])
    
    return (
        <Div>

            {Object.keys(emails).map(id => <Email key={id} owner={emails[id].owner} em={emails[id].mail} id={id}/>)}
                
        </Div>
    )
}

export default Emails
