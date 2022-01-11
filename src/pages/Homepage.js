import React from 'react'
import styled from 'styled-components'
import newspaperIcon from '../images/newspaper_3.png'

const HomeStyles = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  text-align: center;
    .login-welcome{
    display: flex;
    flex-direction: column;
    .icon{
        margin: 0;
    }
    h1{
        font-size: 80px;
        width: 70%;
        line-height: 1em;
        margin: 10px auto;
        margin-top: 0;
        font-weight: 900;
        letter-spacing: -4px;
        color: var(--font-dark);
        text-decoration: underline;
    }
    p{
        padding: 15px 0;
        line-height: 1.3em;
        width: 50%;
        margin: auto;
        font-size: 16px;
    }
    button{
        width: 300px;
        background-color: var(--green);
        border: none;
        border-radius: 20px;
        color: white;
        text-align: center;
        margin: 15px auto 0px auto;
        padding: 15px 0;
        font-size: 25px;
        cursor: pointer;
        box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);
    }
    button{
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }
    button:after {
        content: '»';
        position: absolute;
        opacity: 0;  
        top: 14px;
        right: -20px;
        transition: 0.5s;
    }

    button:hover{
        padding-right: 24px;
        padding-left:8px;
    }

    button:hover:after {
        opacity: 1;
        right: 10px;
    }
}  
`

function Homepage() {
    return (
        <HomeStyles>
            <div className='login-welcome'>
                <div className='icon'>
                    <img src={newspaperIcon} />
                </div>
                <h1>Your News. Your Choice. Simple.</h1>
                <p>
                    The Scroll Down is a simple platform allowing you to save news stories, and get the facts.
                    <br /><br />Sign up and get informed.
                </p>
                <button>Sign Up!</button>
            </div>
        </HomeStyles>
    )
}

export default Homepage