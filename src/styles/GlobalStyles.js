import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        --background: #F5F5F5;
        --nav-bar: #002838;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
    body{
        background-color: var(--background)
    }
`

export default GlobalStyles