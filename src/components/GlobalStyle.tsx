import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }

    * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    :root {
        --graph-outline-color: #f5f5f5;
        --main-cell-dimension: 100px;
        --light-gray: #767676;
        --small-text: 12px;
        --article-width: 500px;
        --graph-width: calc(var(--main-cell-dimension) * round(up, 100vw / var(--main-cell-dimension), 2));
    }
    
    @media screen and (min-width: 1200px) {
        :root {
            --article-width: 1200px;
        }
    }

    #root {
        position: relative;
    }
`

export default GlobalStyle
