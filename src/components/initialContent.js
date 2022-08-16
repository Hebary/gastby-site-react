import React from 'react'
import {useStaticQuery, graphql}from 'gatsby'
import styled from "@emotion/styled"

const Img = styled.img`
    width: 100%;
    margin-top: 1rem;
    @media (max-width: 768px) {
        width: 70%;
        margin: 0 auto;
    }
     
    `

const Title = styled.h1`
    font-size: 5rem;
    text-align: center;
    font-weight: 300;
    text-transform: capitalize;
    margin-top: 0;
    margin: 0 auto;
    @media (max-width: 768px) {
        font-size: 4rem;
    }
    
    @media (max-width: 631px) {
        position: relative;
        top: -7rem;
        margin-bottom: 7rem;
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
        line-height: 2;
        width: 70%;
        margin: 0 auto;
    }
    @media (max-width: 768px) {
        grid-template-columns:  repeat(auto-fit, minmax(300px,auto ));
        p{
            line-height: 1.5;
            margin: 1.5rem auto 0;
        }
        @media (max-width: 631px) {
            position: relative;
            top: -7rem;
        }
    `
 
    const InitialContent = () => {
    
    const complexquery = useStaticQuery(graphql`
        query{
            allDatoCmsPage(filter:{ slug : { eq: "inicio"} }) {
                nodes{
                    title
                    content
                    image{
                        fluid{
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `)
    const  {title , content, image} = complexquery.allDatoCmsPage.nodes[0]

    const img = image.fluid.src;
return (
    <>
        <Title>{title}</Title>
        <Div>
            <Img src={img} alt='index-image'/>
            <p>{content}</p>
        </Div>
    </>
  )
}

export default InitialContent
