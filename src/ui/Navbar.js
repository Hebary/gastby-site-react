import styled from '@emotion/styled'


export const Navbar = styled.nav`
    display: grid;
    grid-template-columns: repeat(autofill, minmax(260px, auto));
    grid-auto-flow: column;
    gap: 0 2rem;
    font-family: 'PT Sans', sans-serif;
    a{
        text-decoration: none;
        color: #fff;
        font-bold: 700;
        &: hover{
            color: #ccc;
        }
        &.current-page{
            border-bottom: 2px solid #fff;
        }
        @media (max-width: 768px) {
            justify-content: center;
            grid-auto-flow: row;
            gap: 0 1rem;
            text-align: center;
        }
    }
`