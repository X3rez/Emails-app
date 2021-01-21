 import React from 'react'

 import {Div,Form,Input,Button} from './styles'
 



 function AddEmail() {
     return (
         <Div>
             <Form>
                 <Input type='text' placeholder='Owner' required/>
                 <Input type='email' placeholder='New Email' required/>
                 <Button>Save</Button>
             </Form>
         </Div>
     )
 }
 
 export default AddEmail
 