import styled from "styled-components"

const Wrapper = styled.div`
    justify-self: start;

    margin: 36px 0 14px;
    padding: 8px 16px 8px 12px;
    background-color: var(--mild-gray-alt);

    display: flex;
    align-items: center;
    column-gap: 10px;
    border-radius: 26px;
    font-size: var(--regular-text);
    font-weight: 400;
    color: var(--black);

    @media screen and (min-width: 1200px) {
        position: absolute;
        margin: 0;
        transform: translateY(-50%);
    }
`

const HeroAuthor = styled.h4`
    font-weight: 500;
    margin: 0;
    padding: 0;
`

const HeroArticleText = styled.span`
    display: none;
    @media screen and (min-width: 1200px) {
        display: unset;
    }
`

const Time = styled.time<{ children: React.ReactNode; datetime: string }>`
    opacity: 0.5;
`

const BookIcon = styled.svg`
    width: 24px;
    height: 24px;

    @media screen and (min-width: 1200px) {
        width: unset;
        height: unset;
    }
`

const HeroTag = () => {
    return (
        <Wrapper>
            <BookIcon
                as="svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M16 25.6665C10.6666 25.6665 6.33331 22.9998 6.33331 22.9998V7.6665C6.33331 7.6665 11.3333 8.99984 16 8.99984V25.6665ZM16 25.6665C21.3333 25.6665 25.6666 22.9998 25.6666 22.9998V7.6665"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16 9.00016C19.3333 9.00016 21.6667 6.3335 21.6667 6.3335V22.6668C21.6667 22.6668 19.3333 25.3335 16 25.3335"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </BookIcon>
            <HeroAuthor>
                <HeroArticleText>Article</HeroArticleText> by Richard Ekwonye
            </HeroAuthor>

            <Time datetime="2023-08">August 2023</Time>
        </Wrapper>
    )
}

export default HeroTag
