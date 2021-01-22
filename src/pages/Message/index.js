import React,{useState} from 'react'

import { useParams } from "react-router-dom";

import {Div,H2,Form,Input,Button} from "./styles"

import SunEditor,{buttonList}  from 'suneditor-react';

import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File



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
            const res = await fetch("http://localhost:3002/send",{
                        method:'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(data)
            })

            setLoading(false)
            console.log(res)

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
                
                <Button>{loading ? "Sending" : "Send"}</Button>
            </Form>
        </Div>
    )
}

export default Message
