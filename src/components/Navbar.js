import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';
import { NavLink, useHistory } from 'react-router-dom'
import InputBase from '@mui/material/InputBase';
import { newsStoreContext } from '../utils/store'

import { searchNewsAPI } from '../utils/api'
import { SAVE_STORY } from '../utils/mutations'
import { useMutation } from '@apollo/client';

function Navbar() {

    // // create state for holding returned news api data
    const [searchedNews, setSearchedNews] = useState('');
    //   // create state for holding our search field data
    const { setNewsInput } = useContext(newsStoreContext)


    //   //useMutation() Hook to execute the SAVE_BOOK mutation - this is in place of saveBook() function imported from API file
    //   const [savestory, { error }] = useMutation(SAVE_STORY);

    //   // create state to hold saved MongoDB values***** NEED TO FIGURE OUT HOW WE WILL USE MONGODB ID WITH CALLBACK FUNCTION
    //   const [_id, setSavedBookIds] = useState(getSavedBookIds());

    //   // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
    //   // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    //   useEffect(() => {
    //     return () => saveBookIds(savedBookIds);
    //   });

    //   // create method to search for books and set state on form submit
    //   const handleFormSubmit = async (event) => {
    //     event.preventDefault();

    //     if (!searchInput) {
    //       return false;
    //     }

    //     try {
    //       const response = await searchNewsAPI(searchInput);

    //       if (!response.ok) {
    //         throw new Error('something went wrong!');
    //       }

    //       const { items } = await response.json();

    //       const newsData = items.map((news) => ({
    //         news: news.id,
    //         source: book.volumeInfo.authors || ['No author to display'],
    //         title: book.volumeInfo.title,
    //         description: book.volumeInfo.description,
    //         link: asdfasdf,
    //         image: book.volumeInfo.imageLinks?.thumbnail || '',
    //         publishDate: asdfasdf
    //       }));

    //       setSearchedBooks(bookData);
    //       setSearchInput('');
    //     } catch (err) {
    //       console.error(err);
    //     }
    //   };

    //   // create function to handle saving a book to our database
    //   const handleSaveBook = async (bookId) => {
    //     // find the book in `searchedBooks` state by the matching id
    //     const bookToSave = searchedBooks.find((book) => book.bookId === bookId);

    //     // get token
    //     const token = Auth.loggedIn() ? Auth.getToken() : null;

    //     if (!token) {
    //       return false;
    //     }

    //     try {
    //       await saveBook({variables: bookToSave});

    //       if (!response.ok) {
    //         throw new Error('something went wrong!');
    //       }

    //       // if book successfully saves to user's account, save book id to state
    //       setSavedBookIds([...savedBookIds, bookToSave.bookId]);
    //     } catch (err) {
    //       console.error(err);
    //     }
    //   };

    const history = useHistory();

    const handleOnSubmit = () => {
        setNewsInput(searchedNews)
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

                    <div className='light-dark-mode'>
                        <div className='left-content'>
                            <DarkModeIcon />
                        </div>
                        <div className='right-content'>
                            <Switch
                                size='small'
                            />
                        </div>
                    </div>
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
    .light-dark-mode{
        margin-left: 1rem;
        margin-top: .3rem;
        background: #004b69;
        border-radius: 25%;
        width: 4.5rem;
        height: 1.8rem;
        /* z-index: 15; */
        display: flex;
        align-items: center;
        justify-content: center;
        svg{
            display: flex;
            align-items: center;
            font-size: 1.3rem;
            color: white;
        }
    }

`
export default Navbar
