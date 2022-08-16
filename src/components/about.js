import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
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
    font-size: 4rem;
    text-align: center;
    margin: 4rem 0 0;

    @media (max-width: 768px) {
        font-size: 2rem;}
`
const Div = styled.div`
    width: 95%;
    max-width: 1200px;
    margin: 0 auto 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

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
const About = () => {
    const complexquery = useStaticQuery(graphql`
        query{
            allDatoCmsPage(filter:{ slug : { eq: "about"} }) {
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
    const {src} = image.fluid
    
    return (
        <div>
            <Title>{title}</Title>
            <Div>
                <p>{content}</p>
                <Img src={src} alt='index-image'/>
            </Div>
        </div>
      )
    }

export default About