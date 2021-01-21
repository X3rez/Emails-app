import styled from "styled-components";


export const Div = styled.div`
    background-color:#e0e0e0;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:17%;
    width:83%;
    height:100vh;
`

export const Form = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    width:25em;
    flex-direction:column;
`

export const Input = styled.input`
    text-align:center;
    border-radius:5px;
    width:100%;
    height:3em;
    border:none;
    outline:none;
`

export const Button = styled.button`
    background-color:white;
    width:10em;
    border-radius:5px;
    padding: .6em;
    border:none;
    outline:none;
    margin-top:1em;
    cursor:pointer;
    transition:background-color .5s ease;
    font-weight:800;
    &:hover{
        background-color:pink;
    }
`
