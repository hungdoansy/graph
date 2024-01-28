import styled from "styled-components"

const Content = styled.div`
    width: var(--article-width);
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 0 var(--main-cell-dimension);

    @media screen and (min-width: 1200px) {
        padding: calc(var(--main-cell-dimension) * 2) var(--main-cell-dimension) var(--main-cell-dimension);
    }
`

export default Content
