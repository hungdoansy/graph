import styled from "styled-components"

import BezierCurves from "./BezierCurves.svg?react"

const Wrapper = styled.div`
    padding-top: 40px;

    .bezierCurves {
        overflow: visible;
        height: 176px;
        width: auto;
    }

    @media screen and (min-width: 1200px) {
        padding-top: 50px;

        .bezierCurves {
            height: unset;
        }
    }
`

const H1 = styled.h1`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
    z-index: -1;
`

const HeroTitle = () => {
    return (
        <Wrapper>
            <H1>Bézier Curves</H1>
            <BezierCurves />
        </Wrapper>
    )
}

export default HeroTitle
