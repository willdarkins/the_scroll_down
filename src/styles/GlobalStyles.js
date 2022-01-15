import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        --background: #F5F5F5;
        --nav-bar: #002838;
        --font-dark: #151515; 
        --green: #0ea84c;
        --blue: #3F00FF;
        --red: #C41E3A;
        --dark-card: #ffffff
    }
    .light-theme{
        --background: #F5F5F5;
        --nav-bar: #002838;
        --font-dark: #151515; 
        --green: #0ea84c;
        --blue: #3F00FF;
        --red: #C41E3A;
        --dark-card: #ffffff
    }
    .dark-theme{
        --background: #000f14;
        --nav-bar: #002838;
        --font-dark: #ebf1ff; 
        --green: #0ea84c;
        --blue: #3F00FF;
        --red: #C41E3A;
        --dark-card: #002838
    }
    

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none !important;
        font-family: 'Work Sans', sans-serif;
    }
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    body{
        background-color: var(--background)
    }
`

export default GlobalStyles