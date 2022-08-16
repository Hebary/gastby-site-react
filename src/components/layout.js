import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './header'
import Footer from './footer'

import {Global, css} from '@emotion/react'
import useSeo from '../hooks/useSeo'

const Layout = ({children}) => {

    const seo = useSeo();

    const { fallbackSeo:{description, title	}} = seo


    return (
        <>
            <Global
                styles = {css`
                
                html{
                        font-size: 62.5%; 
                        box-sizing: border-box;

                    }
                    *, *:before, *:after{
                        box-sizing: inherit;
                    }
                    body{
                        margin: 0;
                        line-height: 1.5;
                        font-size:1.6rem;
                        font-family: 'Roboto', sans-serif;
                    }

                    h1, h2, h3{
                        margin: 0;
                        line-height: 1.5;
                    }
                    
                    h1, h2{
                        font-family: 'Roboto', sans-serif;
                    }

                    h3 {
                        font-family: 'PT Sans', sans-serif;
                    }

                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
          
          />
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={description} />
                <meta name="keywords" content="gatsby, gatsbyjs, gatsbyjs.io, gatsbyjs.io" />
                <title>{title}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&family=Roboto:wght@300;500;700&display=swap" rel="stylesheet"/>
            </Helmet>
            <Header/>
            {children}
            <Footer
                title={title}
            />
        </>
    )
}

export default Layout
