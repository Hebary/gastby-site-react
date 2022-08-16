import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'



const BgImg = styled.img`
    width: 100%;
  `

  const TextImg = styled.div`
    text-align: center;
    position: relative;
    bottom: 550px;
    color: #000;
    height: 100%;


    h1{
        font-size: 4rem;
        text-transform: uppercase;
        color: #fff;
        text-shadow: 0 1px 0 #fff,
        1px 0 1px #fff,
        -1px 0 1px #fff,
        0 -1px 1px #fff;

    }

    p{
        color: #fff;
        font-size: 1.5rem;
        font-weight: 500;
        text-transform: uppercase;
        text-shadow: 0 1px 0 #fff,
        1px 0 1px #fff,
        -1px 0 1px #fff,
        0 -1px 1px #fff;
        letter-spacing: 2px;
    }
  ` 

const IndexImg = () => {
    
  const {image} = useStaticQuery(graphql`
  query{
    image: file(relativePath: { eq: "9.jpg" } ) {
        sharp: childImageSharp {
            fluid(quality: 90, maxWidth: 1920, maxHeight: 1080) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}

    `)
    const { fluid:{src}} = image.sharp

    return (
            <>   
                <BgImg src={src} alt="A dinosaur" />
                    <TextImg>
                        <h1>¡Welcome to Gatsby Hotel!</h1>
                        <p>
                            The best place for your vacations
                        </p>
                    </TextImg>
            </>
            )
}

export default IndexImg