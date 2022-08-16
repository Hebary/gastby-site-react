import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Img = styled.img`
    width: 100%;
    margin-top: 1rem;
    @media (max-width: 768px) {
        width: 70%;
        margin: 0 auto;
    }
    `

const Title = styled.h1`
    font-size: 2rem;
    text-align: left;
    margin: 4rem 0 0;
    border-top: 1px solid #000;
    width: 90%;
    padding-top: 2rem;
    margin: 3rem auto 0;
    @media (max-width: 768px) {
        font-size: 2rem;
        text-align: center;
    }
`

const Div = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto 2rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-top: 3rem;

    p{
        font-size: 1.5rem;
        line-height: 2;
        width: 70%;
        margin: 0 auto;
    }
    @media (max-width: 768px) {
        grid-template-columns:  repeat(auto-fit, minmax(300px,auto ));
        p{
            font-size: 1rem;
            line-height: 1.5rem;
            margin-bottom: 1rem;
        }

    }
    `
    const Btn = styled(Link)`	  
    margin-top: 2rem;
    padding: .5rem;
    background-color: transparent;
    border: 1px solid rgba(44,62,89,.85);
    color: rgba(44,62,89,.85);
    margin-bottom: 4rem;
    width: 28%;
    margin: 0 auto;
    text-align: center;
    font-size: 1.5rem;
    display: block;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;

    &:hover{
        background-color: rgba(44,62,89,.95);
        color:#FFF;
        transition: all 0.2s ease-in-out;
       transform: scale(.985);
    }
    @media (max-width: 768px) {
        margin: 3rem auto 0 auto;
    }
    `
const RoomPreview = ({ room }) => {
    const { content, title, image, slug } = room
    const { src } = image
    return (
        <>
            <Title>{title}</Title>
            <Div>
                <p>{content}</p>
                <Img src={src} alt={title} />   
            <Btn to={slug}>View Room</Btn>
            </Div>
        </>
    )
}

export default RoomPreview
