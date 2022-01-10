import React from 'react'
import styled from 'styled-components'
import logo from '../images/newspaper_1f4f0.png'
import Search from './Search'

const NavBarStyles = styled.div`
    background-color: var(--nav-bar);
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
    .logo{
        display: flex;
        img{
        cursor: pointer; 
        }
        h1{
        margin-top: .9rem;
        color: #fff;
        text-decoration: none;
        padding: 0 1rem;
        cursor: pointer;
        }
    }

`

function Navbar() {
    return (
        <NavBarStyles>
            <div className='logo'>
                <img src={logo} alt="Logo" />
                <h1>The Scroll Down</h1>
            </div>
            <Search />
        </NavBarStyles>
    )
}

export default Navbar
