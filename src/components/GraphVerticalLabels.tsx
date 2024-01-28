import styled from "styled-components"

const Wrapper = styled.div`
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: var(--main-cell-dimension);
    flex-direction: column;
    overflow: hidden;
    pointer-events: none;

    @media screen and (min-width: 1200px) {
        display: flex;
    }
`

const Label = styled.span<{ children: React.ReactNode }>`
    height: var(--main-cell-dimension);
    width: var(--main-cell-dimension);
    flex-shrink: 0;
    padding: 8px;
    color: var(--light-gray);
    font-size: var(--small-text);
`

const GraphVerticalLabels = () => {
    return (
        <Wrapper>
            {Array.from({ length: 14 }).map((_, index) => (
                <Label key={index}>{index * 100}</Label>
            ))}
        </Wrapper>
    )
}

export default GraphVerticalLabels
