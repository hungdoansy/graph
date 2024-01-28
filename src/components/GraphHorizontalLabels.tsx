import { useEffect, useState } from "react"
import styled from "styled-components"

import { getHorizontalLabels } from "@/utils"

const Wrapper = styled.div`
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: calc(var(--main-cell-dimension) + 1px);
    justify-content: center;
    overflow: hidden;
    pointer-events: none;
    z-index: 100;

    @media screen and (min-width: 1200px) {
        display: flex;
    }
`

const Background = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;

    &::before {
        content: "";
        inset: 0;
        position: absolute;
        background: hsla(0, 0%, 100%, 0.7);
        z-index: -1;
        backdrop-filter: blur(24px);
        transform: translateZ(0);
    }

    &::after {
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

const Label = styled.span<{ children: React.ReactNode }>`
    height: var(--main-cell-dimension);
    width: var(--main-cell-dimension);
    flex-shrink: 0;
    padding: 8px;
    color: var(--light-gray);
    font-size: var(--small-text);
`

const GraphHorizontalLabels = () => {
    const [labels, setLabels] = useState(getHorizontalLabels())

    useEffect(() => {
        const listener = () => {
            setLabels(getHorizontalLabels())
        }

        window.addEventListener("resize", listener)
        return () => {
            window.removeEventListener("resize", listener)
        }
    }, [])

    return (
        <Wrapper>
            <Background />
            {labels.map((label) => (
                <Label key={label}>{label}</Label>
            ))}
        </Wrapper>
    )
}

export default GraphHorizontalLabels
