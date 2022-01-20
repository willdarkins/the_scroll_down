import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { REMOVE_STORY } from '../utils/mutations';
import { removeStoryId } from '../utils/localStorage';

function SavedNews() {
    const { loading, data } = useQuery(QUERY_ME);
    const [removeStory] = useMutation(REMOVE_STORY);

    const userData = data?.me || {};

    const handleDeleteStory = async (storyId) => {
        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await removeStory({
                variables: { storyId },
            });

            // upon success, remove story's id from localStorage
            removeStoryId(storyId);
        } catch (err) {
            console.error(err);
        }
        window.location.reload();
    };

    if (loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        <SavedStyles>
            <h1 className='search-header'>
            {userData.savedStories.length
            ? `Viewing ${userData.savedStories.length} saved ${userData.savedStories.length === 1 ? 'story' : 'stories'}:`
            : 'No Saved News Stories to Display 🤷‍♂️'}
            </h1>
            <div className='news-grid'>
                {userData.savedStories.map((story, i) => {
                    return (
                        <motion.div key={story.storyId} className='news-card'
                            initial={{ opacity: 0, translateX: i % 2 === 0 ? -50 : 50, translateY: -50 }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{ duration: .4, delay: i * .4 }}
                        >
                            <div className='news-content'>
                                <img src={story.image} alt='news' />
                                <div className='descriptor'>
                                    <h4 className='source'>
                                        <span>{story.source}</span>
                                        <p>{story.publishDate}</p>
                                    </h4>
                                </div>
                                <div className='title-info'>
                                    <a target='_blank' rel='noopener noreferrer' href={story.link}><h1>{story.title}</h1></a>
                                    <p>{story.description}</p>
                                    <button className="learn-more"
                                    onClick={() => handleDeleteStory(story.storyId)}
                                    >
                                        <span className="circle" aria-hidden="true">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">Delete</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </SavedStyles>
    )
}

const SavedStyles = styled.div`
    padding: 30px 170px;
    .search-header{
        letter-spacing: -1px;
        font-size: 40px;
        color: var(--font-dark);
    }
    .news-grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        padding: 20px 0;
        .news-card{
            padding: 1rem;
            min-width: 250px;
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
                h1{
                    font-size: 20px;
                    letter-spacing: -.5px;
                    line-height: 1rem;
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
                    transition: all, 0.45s, cubic-bezier(0.65,0,.076,1);
                    position: relative;
                    display: block;
                    margin: 0;
                    width: 3rem;
                    height: 3rem;
                    background: var(--red);
                    border-radius: 1.625rem;
                .icon {
                    transition: (all, 0.45s, cubic-bezier(0.65,0,.076,1));
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                    background: white;
                &.arrow {
                    transition: (all, 1s, cubic-bezier(0.65,0,.076,1));
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
      transition:(all, 0.45s, cubic-bezier(0.65,0,.076,1));
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0.75rem 0;
      margin: 0 0 0 1.85rem;
      color: var(--red);
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
`

export default SavedNews
