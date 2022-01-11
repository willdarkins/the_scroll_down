import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        --background: #F5F5F5;
        --nav-bar: #002838;
        --green: #0ea84c;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Work Sans', sans-serif;
    }
    body{
        background-color: var(--background)
    }
`

export default GlobalStyles