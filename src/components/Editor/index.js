import React,{useState} from 'react'

import SunEditor,{buttonList}  from 'suneditor-react';

import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File


const Editor = () => {
  const [editorValue,setEditorValue] = useState("")

  const handleChange = (content)=>{
    setEditorValue(() => content)
  }

    return (<SunEditor setContents={editorValue} onChange={handleChange} height={200} width={600} setOptions={{buttonList:buttonList.complex}} />)
} 


export default Editor