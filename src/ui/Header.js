import styled from "@emotion/styled"

export const StyledHeader = styled.div`
    background-color: #333;
    padding: 2rem;
`
export const Div = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    h1{
        font-size: 2rem;
        color:#fff;
        text-align: center;
    }
`