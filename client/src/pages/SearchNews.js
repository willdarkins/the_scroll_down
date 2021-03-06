
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { useMutation } from '@apollo/client';
import { SAVE_STORY } from '../utils/mutations';
import Auth from '../utils/auth';
import { saveStoryIds, getSavedStoriesIds } from '../utils/localStorage';

function SearchNews(props) {

    const [searchedNews, setSearchedNews] = useState(props.searchValue);

    const [saveStory] = useMutation(SAVE_STORY);

    // create state to hold saved storyId values
    const [savedStoryIds, setSavedStoriesIds] = useState(getSavedStoriesIds());

    useEffect(() => {
        return () => saveStoryIds(savedStoryIds);
    });

    // create function to handle saving a story to our database
    const handleSaveStory = async (storyToSave) => {

        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            console.log("no valid token");
            return false;
        }
        const storyArray = [storyToSave];

        const adjustedStoryData = storyArray.map((story) => ({
            storyId: story._id,
            source: story.clean_url,
            title: story.title,
            description: story.summary,
            link: story.link,
            image: story.media,
            publishDate: story.published_date
        }));

        try {
            const { data } = await saveStory({
                variables: { storyData: { ...adjustedStoryData[0] } },
            });
            setSavedStoriesIds([...savedStoryIds, storyToSave._id]);
            console.log(savedStoryIds);
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <SearchStyles>
            <h1 className='search-header'>Results for: "{props.searchValue}"</h1>
            <div className='news-grid'>
                {props.newsResults.map((news, i) => {
                    return (
                        <motion.div onChange={()=> setSearchedNews(searchedNews)} key={news._id} className='news-card'
                            initial={{ opacity: 0, translateX: i % 2 === 0 ? -50 : 50, translateY: -50 }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{ duration: .4, delay: i * .4 }}
                        >
                            <div className='news-content'>
                                <img src={news.media} alt='news' />
                                <div className='descriptor'>
                                    <h4 className='source'>
                                        <span>{news.clean_url}</span>
                                        <p>{news.published_date}</p>
                                    </h4>
                                </div>
                                <div className='title-info'>
                                    <a target='_blank' rel='noopener noreferrer' href={news.link}><h1>{news.title}</h1></a>
                                    <p>{news.summary}</p>
                                    {Auth.loggedIn() && (
                                    <button
                                        disabled={savedStoryIds?.some(
                                            (savedId) => savedId === news._id
                                        )}
                                        className="learn-more"
                                        onClick={() => handleSaveStory(news)}
                                    >
                                        <span className="circle" aria-hidden="true">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">
                                        {savedStoryIds?.some((savedId) => savedId === news._id)
                                        ? '??? Saved'
                                        : 'Save'}
                                            </span>
                                    </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </SearchStyles>
    )
}

const SearchStyles = styled.div`
    padding: 30px 150px;
    .search-header{
        letter-spacing: -1px;
        font-size: 40px;
        color: var(--font-dark);
    }
    .news-grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        padding: 40px 0;
        .news-card{
            padding: 1rem;
            min-width: 275px;
            margin: auto;
            background: var(--dark-card);
            box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
            height: 100%;
            text-decoration: none;
            color: var(--font-dark);
            img{
                width: 100%;
            }
            .descriptor{
                margin-top: 1rem;
                display: flex;
                flex-direction: column;
                padding: 0px 30px 0 30px 0;
                .source{
                    display: flex;
                    align-items: center;
                }
                span{
                    display: inline;
                    padding: 5px 6px;
                    border-radius: 4px;
                    background: #d192a5;
                    font-size: 10px;
                    color: #5f0924;
                }
                p{
                    padding-left: 10px;
                    font-size: 10px;
                    font-weight: 500;
                }
            }
            .title-info{
                a{
                        text-decoration: underline;
                        color: var(--font-dark);
                    }
                    a:visited { 
                        text-decoration: none; 
                        color: var(--font-dark); 
                    }
                h1{
                    font-size: 20px;
                    letter-spacing: -.5px;
                    line-height: 1.4rem;
                    padding: 20px 0;
                    font-weight: 700;
                    text-decoration: underline;
                }
                p{
                    font-size: 12px;
                    line-height: 1.5rem;
                    color: var(--font-dark);
                    padding-bottom: 1rem;
                }
                button {
                    position: relative;
                    display: inline-block;
                    cursor: pointer;
                    outline: none;
                    border: 0;
                    vertical-align: middle;
                    text-decoration: none;
                    background: transparent;
                    padding: 0;
                    font-size: inherit;
                    font-family: inherit;
                &.learn-more {
                    width: 12rem;
                    height: auto;
                .circle {
                    transition: all, 1.5s, cubic-bezier(0.65,0,.076,1);
                    position: relative;
                    display: block;
                    margin: 0;
                    width: 3rem;
                    height: 3rem;
                    background: var(--blue);
                    border-radius: 1.625rem;
                .icon {
                    transition: (all, 1.5s, cubic-bezier(0.65,0,.076,1));
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                    background: white;
                &.arrow {
                    transition: (all, 1.5s, cubic-bezier(0.65,0,.076,1));
                    left: 0.625rem;
                    width: 1.125rem;
                    height: 0.125rem;
                    background: none;
                &::before {
                    position: absolute;
                    content: '';
                    top: -0.25rem;
                    right: 0.0625rem;
                    width: 0.625rem;
                    height: 0.625rem;
                    border-top: 0.125rem solid #fff;
                    border-right: 0.125rem solid #fff;
                    transform: rotate(45deg);
                }
            }
        }
    }
    .button-text {
      transition:(all, 1.5s, cubic-bezier(0.65,0,.076,1));
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0.75rem 0;
      margin: 0 0 0 3.2rem;
      color: var(--blue);
      font-weight: 700;
      line-height: 1.6;
      text-align: center;
      text-transform: uppercase;
    }
  }
  &:hover {
    .circle {
      transition: all .3s ease-in-out ;
      width: 100%;
      .icon {
        &.arrow {
        background: white;
        transform: translate(1rem, 0);
        }
      }
    }
    .button-text {
      color: white;
    }
  }
            }
        }
    }
}
@media screen and (max-width: 1220px){
    .search-header{
        font-size: 35px;
    }
    .news-grid{
        grid-template-columns: repeat(2, 1fr);
    }
}
@media screen and (max-width: 900px){
    .news-grid{
        grid-template-columns: repeat(1, 1fr);
    }
    .search-header{
        font-size: 28px;
    } 
}
@media screen and (max-width: 768px){
    padding: 30px 150px;
    .news-grid{
        grid-template-columns: repeat(1);
        grid-gap: 2rem;
    }
    .search-header{
        font-size: 20px;
    } 
}
@media screen and (max-width: 660px){
    padding: 30px 110px;
}
@media screen and (max-width: 475px){
    padding: 30px 90px;
    .news-card{
        min-width: 350px;
    }
}
@media screen and (max-width: 440px){
    padding: 30px 70px;
    .news-card{
        min-width: 350px;
    }
}
@media screen and (max-width: 400px){
    padding: 30px 50px;
    .news-card{
        min-width: 350px;
    }
}
@media screen and (max-width: 381px){
    padding: 30px 10px;
    .news-card{
        width: 50px;
        
        img{
            width: 20%;
        }
    }
}
@media screen and (max-width: 321px){
    padding: 30px 10px;
        img{
            width: 10%;
        }
}
`

export default SearchNews

