import styled from "styled-components"

const Graph = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    overflow: hidden;
    z-index: -1;
    pointer-events: none;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: var(--graph-width);
        background-image: linear-gradient(to bottom, var(--graph-outline-color) 1px, transparent 1px),
            linear-gradient(to left, var(--graph-outline-color) 1px, transparent 1px);
        background-size: var(--main-cell-dimension) var(--main-cell-dimension);
    }
`

export default Graph
