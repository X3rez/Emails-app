import styled from "styled-components";


export const Button = styled.button`
    background-color:transparent;
    border:3px solid #fff;
    padding:1em;
    width:25em;
    border-radius:5px;
    cursor: pointer;
    box-shadow:3px 3px 5px  rgba(0, 0, 0, 0.2);
    margin:1em;
    position:relative;
    overflow:hidden;
    transition:color .4s ease;
    color:#000;
    font-weight:600;

    &::after{
        position:absolute;
        z-index:-1;
        content:"";
        inset:0px 0px auto auto;
        height:100%;
        width:0;
        transition: width .4s ease;
        background-color:${({background}) => background };
    }

    &:hover{
        color:${({color})=> color};
    }

    &:hover::after{
        width:100%;
    }
`