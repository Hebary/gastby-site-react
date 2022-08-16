import { Link } from 'gatsby'
import React from 'react'
import { Div } from "../ui/Header"
import Nav from './nav'
import styled from '@emotion/styled'

const A = styled(Link)`
    color: #fff;
    font-size: 2.5rem;
    font-weight: bold;
    text-decoration: none;

`

const StyledFooter = styled.footer`
    
background-color: #000;
    padding: 2rem; 
    margin-top: auto;
    `
const Footer = ({title}) => {
    return (
        <>
            <StyledFooter>
                <Div>
                    <Nav/>
                    <A to={'/'}>Hotel Gatsby</A>
                </Div>
            <p style={{color: 'white'}}> 
                Copyright © {new Date().getFullYear()}, {title} app,
                <span> ® All rights reserved.</span>
            </p>
            </StyledFooter>
        </>
    )
}

export default Footer