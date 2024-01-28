import styled from "styled-components"

import HeroTag from "./HeroTag"
import HeroTitle from "./HeroTitle"

const Wrapper = styled.article`
    width: var(--article-width);
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 0 var(--main-cell-dimension);

    @media screen and (min-width: 1200px) {
        padding: calc(var(--main-cell-dimension) * 2) var(--main-cell-dimension) var(--main-cell-dimension);
    }
`

const Hero = styled.div`
    position: relative;
    max-width: calc(var(--main-cell-dimension) * 3);
    height: calc(var(--main-cell-dimension) * 6);
    margin: 0 auto 10px;
    display: grid;
    grid: auto/auto;

    @media screen and (min-width: 560px) {
        max-width: unset;
    }

    @media screen and (min-width: 1200px) {
        height: calc(var(--main-cell-dimension) * 4);
        margin: auto;
        grid: auto/repeat(2, calc(var(--main-cell-dimension) * 5));
    }
`

const Article = () => {
    return (
        <Wrapper>
            <main>
                <section>
                    <Hero>
                        <HeroTitle />
                        <HeroTag />
                    </Hero>
                </section>
            </main>
        </Wrapper>
    )
}

export default Article
