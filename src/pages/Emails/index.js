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
    
   const dbEmails = Object.keys(emails)
    return (
        <Div>

            {dbEmails.map(id => <Email key={id} owner={emails[id].owner} em={emails[id].mail} id={id}/>)}
            
            {dbEmails.length < 1 && <h1>You haven't emails added</h1>}
       
        </Div>
    )
}

export default Emails
