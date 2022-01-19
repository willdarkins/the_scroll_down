import React, { useState, useContext } from 'react';
import styled from 'styled-components'
import { NavLink, useHistory } from 'react-router-dom'
import InputBase from '@mui/material/InputBase';
import { newsStoreContext } from '../utils/store'
import DarkModeSwitch from './DarkModeSwitch'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar(props) {
    // // // create state for holding returned news api data
    const [searchedNews, setSearchedNews] = useState(props.searchValue);
    // const { newsInput, setnewsResults } = useContext(newsStoreContext)
    // const [searchedStories, setSearchedStories] = useState([]);
    // //   // create state for holding our search field data
    const history = useHistory();
 


    function handleOnSubmit() {
        props.setSearchValue(searchedNews)
    //     if (!{ newsInput }) {
    //         return false;
    //     }

    //     try {
    //         const response = await fetch(`https://free-news.p.rapidapi.com/v1/search?q=${newsInput}&lang=en`, {
    //             "method": "GET",
    //             "headers": {
    //                 "x-rapidapi-host": "free-news.p.rapidapi.com",
    //                 "x-rapidapi-key": "47a0d92aa0mshe43772b8385d985p151404jsnb86a00526e7a"
    //             }
    //         })
    //         console.log(newsInput)

    //         if (!response.ok) {
    //             throw new Error('something went wrong!');
    //         }

    //         const { articles } = await response.json();
    //         console.log(articles);
    //         const newsData = articles.map((story) => ({
    //             storyId: story._id,
    //             source: story.clean_url,
    //             title: story.title,
    //             description: story.summary,
    //             link: story.link,
    //             image: story.media,
    //             publishDate: story.published_date
    //         }));
    //         setnewsResults(newsData);
    //     } catch (err) {
    //         console.error(err);
    //     }
        history.push(`/searchnews`);
    };

    return (
        <NavBarStyles>
            <input type='checkbox' id='check'></input>
            <div className='nav'>
                <div className='icon'> <NavLink exact to='/' activeClassName='active-class'>📰 The Scroll <span className='down'>Down</span></NavLink></div>
                <div className='search_box'>
                    <InputBase
                        placeholder="Search for News"
                        inputProps={{ 'aria-label': 'search for news' }}
                        value={searchedNews}
                        onChange={(event)=> setSearchedNews(event.target.value)}
                    />
                        <button onClick={handleOnSubmit}
                         >Search</button>
                        <DarkModeSwitch className='dark-mode'/>
                    
                    <label htmlFor='check' className='bar'>
                        <FontAwesomeIcon id='bars' className='fa fa-bars' icon={faBars} size='2x' color='white' style={{ marginLeft: '1rem', marginTop: '.2rem' }} />
                    </label>
                </div>
                <ol className='container'>
                    <li><NavLink exact to='/' activeClassName='current'>Home</NavLink></li>
                    <li><NavLink exact to='/signin' activeClassName='current'>Sign In</NavLink></li>
                    <li><NavLink exact to='/signup' activeClassName='current'>Sign Up</NavLink></li>
                    <li><NavLink exact to='/savednews' activeClassName='current'>Saved News</NavLink></li>
                </ol>
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
        position: sticky;
        top: 0;
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
    .container a {
        display: inline-block;
        color: white;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        border-bottom: 3px solid transparent;
        transition: all .9s ease-in-out;
    }
    .container a:hover{
        border-bottom: 3px solid var(--green);
    }
    .container a:active{
        border-bottom: 3px solid var(--green);
    }
    .fa-bars{
        display: none;
    }
    
    @media screen and (max-width: 1250px) {
        .nav{
            display: block;
            padding: 0;
        }
        .nav .icon{
            display: inline-block;
            padding: 15px 30px;
            }
        .nav .search_box{
            width: 100%;
            display: inline-flex;
            justify-content: center;
            margin-bottom: 1rem;
            }
        .nav ol{
            display: flex;
            flex-direction: column;
            height: 0;
            visibility: hidden;
            transition: .09s;
        }
        .nav ol li{
            text-align: center;
        }
        .nav ol li a{
            display: block;
            font-size: 25px;
            padding: 25px;
        }
        .fa-bars{
            display: block;
            cursor: pointer;
        }
        #check:checked ~ .nav .bar #bars{
            display: block;
        }
        #check:checked ~ .nav ol{
            visibility: visible;
            height: 400px;
        }
    }
    @media screen and (max-width: 768px){
        .nav .search_box input{
            width: 300px;
        }
    }
    @media screen and (max-width: 600px){
        .nav .search_box input{
            width: 250px;
        }
         button{
            padding: 5px 15px;
        }
    }
    @media screen and (max-width: 480px){
        .nav .search_box input{
            width: 180px;
        }
        button{
            padding: 5px 10px;
        }
    }
    @media screen and (max-width: 415px){
        .nav .search_box input{
            width: 100px;
        }
    }
    @media screen and (max-width: 413px) {
        .nav .search_box input{
            width: 150px;
        }
        button{
            padding: 5px 10px;
        } 
    }
    @media screen and (max-width: 391px){
        .nav .search_box{
            width: 100%;
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
            margin-top: 1rem;
            }
        .nav .search_box input{
            height: 40px;
        }
        button{
            width: 50%;
            padding: 10px 0;
            margin-top: .5rem;
        }
        .bar{
            padding-bottom: 110px;
        }
        .nav ol li a{
        font-size: 20px;
        }        
    }
`
export default Navbar