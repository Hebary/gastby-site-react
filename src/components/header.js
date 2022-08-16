import { Link } from 'gatsby'
import React from 'react'
import { Div, StyledHeader } from "../ui/Header"
import Nav from './nav'
import styled from '@emotion/styled'

const A = styled(Link)`
    color: #fff;
    font-size: 2.5rem;
    font-weight: bold;
    text-decoration: none;

`

const Header = () => {
    return (
        <StyledHeader>
            <Div>
                <A to={'/'}>Hotel Gatsby</A>
            <Nav/>
            </Div>
        </StyledHeader>
    )
}

export default Header