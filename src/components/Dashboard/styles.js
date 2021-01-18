import styled from "styled-components";


export const Aside = styled.aside`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#000;
    width:12em;
    height:100vh;
    position:absolute;
    z-index:100;
`

export const Img = styled.img`
    width:4em;
    height:4em;
    border-radius:100%;
    margin:1em 0;
    object-fit: cover;
`


export const H5 = styled.h5`
    width:85%;
    a{
        padding:.4em;
        border-radius:5px;
        height:2em;
        text-decoration:none;
        color:#fff;
        width:100%;
        display:inline-block;
        transition: background-color .3s ease-in;
    }
    a:hover{
        background-color:#f50057;
    }
    
`

export const Hr = styled.hr`
    width:80%;
    opacity:.3;
`
