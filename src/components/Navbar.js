import React, { useContext } from 'react';
import styled from 'styled-components'
import { NavLink, useHistory } from 'react-router-dom'
import InputBase from '@mui/material/InputBase';
import { newsStoreContext } from '../utils/store'
import { useState } from 'react';
import DarkModeSwitch from './DarkModeSwitch'

function Navbar() {
    // // create state for holding returned news api data
    const [searchedNews, setSearchedNews] = useState('');
    //   // create state for holding our search field data
    const { setNewsInput } = useContext(newsStoreContext)
    const history = useHistory();

    const handleOnSubmit = () => {
        setNewsInput(searchedNews)
        // if (!searchedNews) {
        //     return false;
        // }

        // try {
        //     const response = await fetch(`https://free-news.p.rapidapi.com/v1/search?q=${searchedNews}&lang=en`, {
        //         "method": "GET",
        //         "headers": {
        //             "x-rapidapi-host": "free-news.p.rapidapi.com",
        //             "x-rapidapi-key": "47a0d92aa0mshe43772b8385d985p151404jsnb86a00526e7a"
        //         }
        //     })

        //     if (!response.ok) {
        //         throw new Error('something went wrong!');
        //     }

        //     const { articles } = await response.json();
        //     console.log(articles);
        //     const newsData = articles.map((story) => ({
        //         storyId: story._id,
        //         source: story.clean_url,
        //         title: story.title,
        //         description: story.summary,
        //         link: story.link,
        //         image: story.media,
        //         publishDate: story.published_date
        //     }));
        //     setSearchedStories(newsData);
        // } catch (err) {
        //     console.error(err);
        // }
        history.push(`/searchnews`);
    };
    
    return (
        <NavBarStyles>
            <div className='nav'>
                <div className='icon'> <NavLink exact to='/' activeClassName='active-class'>📰 The Scroll <span className='down'>Down</span></NavLink></div>
                <div className='search_box'>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search for News"
                        inputProps={{ 'aria-label': 'search for news' }}
                        onChange={(e) => setSearchedNews(e.target.value)}
                    />
                    <button onClick={handleOnSubmit}>Search</button>
                    <DarkModeSwitch />
                </div>
                <ol className='container'>
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
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        transition: all 2s ease;
    }
    button:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
    .nav ol{
        display: flex;
    }
    .nav ol li{
        margin: 0 2px;
        font-size: 20px;
        letter-spacing: 1px;
        padding: 7px 10px;
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
    .container {
        overflow: hidden;
        text-align:center;
    }
    .container a {
        display: inline-block;
        color: white;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
    }
    .container a::before {
        content:'';
        width:0%;
        height:.5px;
        display:block;
        background-color: #fff;
        margin-bottom:5px;
    }
    .container a:hover::before {
        width: 100%;
        transition: all .4s;
    }

`
export default Navbar
