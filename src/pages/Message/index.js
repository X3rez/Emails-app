import React,{useState} from 'react'

import { useParams } from "react-router-dom";

import {Div,H2,Form,Input,Button} from "./styles"

import SunEditor,{buttonList}  from 'suneditor-react';

import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

import Loader from 'react-loader-spinner'



function Message() {
    const [editorValue,setEditorValue] = useState("")
    const [loading,setLoading] = useState(false)
    const {email} = useParams()

    const handleChange = (content) => {
        setEditorValue(() => content)
  }

    const handleForm = async(e) => {
        e.preventDefault()
        
        const subject = e.target[0].value
        
        const data = {
            subject,
            email,
            message:editorValue
        }

        try {
            setLoading(true)
            await fetch("http://localhost:3002/send",{
                        method:'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(data)
            })

            setLoading(false)
            alert("Email Sent")

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Div>
            <H2>{email}</H2>
            <Form onSubmit={handleForm}>
                <Input type="text" placeholder="Subject"/>

                <SunEditor setContents={editorValue} onChange={handleChange} height={200} width={600} setOptions={{buttonList:buttonList.complex}} />
                
                <Button>{loading ? <> Sending <Loader type="Puff" color="#FFF" height={30} width={30} /></>: "Send"}</Button>
            </Form>
        </Div>
    )
}

export default Message
