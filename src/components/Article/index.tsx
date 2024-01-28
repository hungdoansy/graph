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
    height: calc(var(--main-cell-dimension) * 3);
    margin: 0 auto 90px;
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

const P = styled.p`
    margin: 0;
    padding: 0;

    max-width: calc(var(--main-cell-dimension) * 3);
    margin-left: auto;
    margin-bottom: 30px;
    margin-right: auto;
    font-size: var(--paragraph-text);
    line-height: 2.25;
    color: var(--black);

    @media screen and (min-width: 560px) {
        max-width: unset;
    }

    @media screen and (min-width: 1200px) {
        padding-left: 20px;
        padding-right: 80px;
    }
`

const Link = styled.a`
    --icon-opacity: 0.5;
    padding: 8px 24px;
    border: 1px solid var(--solid-outline-color);
    border-radius: var(--full-border-radius);
    background: var(--white);
    width: max-content;

    display: flex;

    line-height: 1.6;
    font-weight: 500;
    text-decoration: none;

    color: var(--black);
    transition: 0.1s var(--ease-out-sine);
    &:hover {
        color: var(--dark-red);
    }
`

const Footer = styled.footer`
    margin: auto;
    margin-top: 100px;

    display: flex;
    font-size: var(--action-text);
    font-style: italic;
    text-decoration: underline;
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

                <section>
                    <P>
                        Bézier curves have been a recurring theme in my frontend engineering career. I have used them
                        extensively in my work - in animations and SVG paths of illustrations and icons. However, I only
                        recently took an interest in understanding the underlying logic that governs their behaviour.
                        This demystified curve-related path commands for me and gave me a deeper understanding of web
                        animations. In this article, I’ll share my interesting findings on Bézier curves.
                    </P>

                    <P>
                        In CSS animations, easing functions specify the rate of change of a property over time. There
                        are 3 types of easing functions - Linear, Step and Cubic Bézier.
                    </P>

                    <P>
                        Predefined CSS easings like ease, ease-in, ease-out and ease-in-out as well as commonly used
                        smooth easings like ease in sine and ease in cubic are examples of cubic Bézier easing
                        functions. Custom easings can also be generated with cubic Bézier easing functions.
                    </P>

                    <P>
                        {`Easing functions in CSS compute how an animation accelerates and decelerates. This generated animation path can be represented in an easing graph where the x-axis is animation progress and the y-axis is degree of change. The cubic Bézier easing function has fixed anchor points at (0, 0) and (1, 1) which correspond to the animation’s start and end points. The curve that defines the animation’s smooth acceleration and deceleration is set by the 2 control points in the cubic-bezier(<x1>, <y1>, <x2>, <y2>) function. By setting these control points to the same values as the fixed anchor points cubic-bezier(0, 0, 1, 1), the cubic Bézier easing function can be used to generate a linear path animation.`}
                    </P>
                </section>

                <section>
                    <P>
                        <Link
                            as="a"
                            href="https://blog.richardekwonye.com/bezier-curves"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>Full article</span>
                            <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <g opacity="var(--icon-opacity, 1)">
                                    <path
                                        d="M8.27942 7.33252V1H1.9469"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M8.05882 1.22058L1 8.2794"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </Link>
                    </P>
                </section>
                <section>
                    <Footer>
                        <P>This is merely a clone of the original website.</P>
                    </Footer>
                </section>
            </main>
        </Wrapper>
    )
}

export default Article
