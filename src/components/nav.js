import React from 'react'
import { Link } from 'gatsby'
import { Navbar } from"../ui/Navbar"




const Nav = () => {
    return (
        <Navbar>
            <Link 
                to='/'
                activeClassName='current-page'
                >Home</Link> 
            <Link 
                to='/us'
                activeClassName='current-page'
                >About Us</Link> 
        </Navbar>
    )
}

export default Nav
