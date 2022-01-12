import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavBarStyles = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    .down{
        color: var(--green);
    }
    .icon{
        font-size: 28px;
        font-weight: 600;
        color: white;
        cursor: pointer;
    }
    .nav{
        display: flex;
        width: 100%;
        background-color: var(--nav-bar);
        position: relative;
        justify-content: space-between;
        text-align: center;
        padding: 15px 30px;
    }
    button{
        background-color: var(--blue);
        border: none;
        border-radius: 20px;
        color: white;
        padding: 10px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 13px;
        margin-left: .3rem;
        cursor: pointer;
    }
    .nav ol{
        display: flex;
        margin: auto 0;
    }
    .nav ol li{
        margin: 0 2px;
        font-size: 20px;
        letter-spacing: 1px;
        padding: 5px 10px;
        color: white;
        cursor: pointer;
    }
    a:visited { 
        text-decoration: none; 
        color: white; 
    }
    .nav .search_box{
        display: flex;
        margin: auto 0;
        height: 35px;
        line-height: 35px;

    }
    .nav .search_box input{
        border: none;
        outline: none;
        background: white;
        height: 100%;
        padding: 0 10px;
        font-size: 20px;
        width: 350px;
        border-radius: 20px;
    }

`
function Navbar() {
    return (
        <NavBarStyles>
            <div className='nav'>
                <div className='icon'> <NavLink exact to='/' activeClassName='active-class'>📰 The Scroll <span className='down'>Down</span></NavLink></div>
                <div className='search_box'>
                    <input type={"serach"} placeholder='Search for News' />
                    <button>Serach</button>
                </div>
                <ol>
                    <li><NavLink exact to='/' activeClassName='current'>Home</NavLink></li>
                    <li><NavLink exact to='/signin' activeClassName='current'>Sign In</NavLink></li>
                    <li><NavLink exact to='/signup' activeClassName='current'>Sign Up</NavLink></li>
                    <li><NavLink exact to='/savednews' activeClassName='current'>Saved News</NavLink></li>
                </ol>
                <div className='menu-burger'>
                </div>
            </div>
        </NavBarStyles>
    )
}

export default Navbar
