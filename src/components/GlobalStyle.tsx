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
        --graph-width: 1400px;
        --graph-outline-color: #f5f5f5;
        --main-cell-dimension: 100px;
        --light-gray: #767676;
        --small-text: 12px;
    }

    #root {
        position: relative;
    }
`

export default GlobalStyle
