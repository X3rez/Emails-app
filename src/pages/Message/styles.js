import styled from "styled-components";



export const Div = styled.div`
    background-color:#e0e0e0;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin-left:17%;
    width:83%;
    height:100vh;

`

export const H2 = styled.h2`
    color:#999999;
`

export const Form = styled.form`
    display:flex;
    align-items:center;
    justify-content:center;
    row-gap:1em;
    flex-direction:column;
`

export const Input = styled.input`
    width:75%;
    text-align:center;
    outline:none;
    border:none;
    height:2em;
`

export const Button = styled.button`
    background-color:#f48fb1;
    border:none;
    outline:none;
    cursor:pointer;
    width:10em;
    border-radius:5px;
    padding:.8em;
    transition: background-color .7s ease;
    &:hover{
        background-color:#fd6292;
    }
`
