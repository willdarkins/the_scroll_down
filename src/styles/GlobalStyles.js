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
    .nav-toggle{
        transform: translateX(0);
        z-index: 20;
    }
    .title-info a{
    text-decoration:none;
    display:block;
    line-height:1;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
          to right,
          var(--green),
          var(--green) 50%,
          var(--font-dark) 50%);
    background-size: 200% 100%;
    background-position: -100%;
    transition: all 0.3s ease-in-out;
}
.title-info a:before{
    display:block;
    content:'';
    width:0;
    height:3px;
    bottom:5px;
    left:0;
    bottom:-3px;
    z-index:0;
    position:absolute;
    background:var(--green);
    transition: all 0.3s ease-in-out;
}
.title-info a:hover{
    background-position: 0%;
}

`

export default GlobalStyles