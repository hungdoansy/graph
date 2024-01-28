import styled from "styled-components"

const Layout = styled.div`
    min-width: 100vw;
    width: 100vw;

    min-height: 100vh;

    overflow: hidden;
    display: flex;
    justify-content: center;

    @media screen and (min-width: 560px) {
        overflow: unset;
    }
`

export default Layout
