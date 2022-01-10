import React from 'react'
import styled from 'styled-components'
import logo from '../images/newspaper_1f4f0.png'

const NavBarStyles = styled.div `
    background-color: var(--nav-bar);
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`

function Navbar() {
    return (
        <NavBarStyles>
                <img src={logo} alt="Logo" />
        </NavBarStyles>
    )
}

export default Navbar
