import { useEffect, useState } from "react"
import styled from "styled-components"

import { getVerticalLabels } from "@/utils"

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
    const [labels, setLabels] = useState(getVerticalLabels())

    useEffect(() => {
        const listener = () => {
            setLabels(getVerticalLabels())
        }

        window.addEventListener("resize", listener)
        return () => {
            window.removeEventListener("resize", listener)
        }
    }, [])

    return (
        <Wrapper>
            {labels.map((label) => (
                <Label key={label}>{label}</Label>
            ))}
        </Wrapper>
    )
}

export default GraphVerticalLabels
