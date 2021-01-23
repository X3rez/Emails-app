 import React from 'react'

 import {Div,Form,Input,Button} from './styles'
 
import firebase from '../../firebase'


 function AddEmail() {
     const handleSubmit = async(e)=>{
        e.preventDefault()
        const owner = e.target[0].value;
        const mail = e.target[1].value;
        const database = firebase.database()
        const myUserId = firebase.auth().currentUser.uid;

        await database.ref('users/' + myUserId).push().set({owner, mail})
        alert('Email added')
     }

     return (
         <Div>
             <Form onSubmit={handleSubmit}>
                 <Input type='text' placeholder='Owner' required/>
                 <Input type='email' placeholder='New Email' required/>
                 <Button>Save</Button>
             </Form>
         </Div>
     )
 }
 
 export default AddEmail
 