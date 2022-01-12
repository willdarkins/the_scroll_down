import React from 'react'
import styled from 'styled-components'
import NewsPicSample from '../images/NewsPic_Sample.jpeg'

const SavedStyles = styled.div`
    padding: 30px 170px;
    .search-header{
        letter-spacing: -1px;
        font-size: 40px;
    }
    .news-grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        padding: 40px 0;
        .news-card{
            padding: 1rem;
            min-width: 300px;
            margin: auto;
            background: white;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
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
                    color: #3b3b3b;
                    padding-bottom: 28px;
                }
            }
        }
    }


`

function SavedNews() {
    return (
        <SavedStyles>
            <h1 className='search-header'>Search Term Will Go Here</h1>
            <div className='news-grid'>
                <div className='news-card'>
                    <div className='news-content'>
                        <img src={NewsPicSample} alt='news' />
                        <div className='descriptor'>
                            <h4 className='source'>
                            <span>New York Times</span>
                            <p>1.11.2021</p>
                            </h4>
                        </div>
                        <div className='title-info'>
                            <h1>Example News Title</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec posuere mauris sit amet leo elementum tempus. Cras lorem neque,
                                facilisis in dolor sed, facilisis vestibulum erat. Nunc a ipsum dolor.</p>
                        </div>
                    </div>
                </div>

                <div className='news-card'>
                    <img src={NewsPicSample} alt='news' />
                    <div className='descriptor'>
                        <h4 className='source'>
                        <span>New York Times</span>
                        <p>1.11.2021</p>
                        </h4>
                    </div>
                    <div className='title-info'>
                        <h1>Example News Title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec posuere mauris sit amet leo elementum tempus. Cras lorem neque,
                            facilisis in dolor sed, facilisis vestibulum erat. Nunc a ipsum dolor.</p>
                    </div>
                </div>

                <div className='news-card'>
                    <img src={NewsPicSample} alt='news' />
                    <div className='descriptor'>
                        <h4 className='source'>
                        <span>New York Times</span>
                        <p>1.11.2021</p>
                        </h4>
                    </div>
                    <div className='title-info'>
                        <h1>Example News Title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec posuere mauris sit amet leo elementum tempus. Cras lorem neque,
                            facilisis in dolor sed, facilisis vestibulum erat. Nunc a ipsum dolor.</p>
                    </div>
                </div>
            </div>
        </SavedStyles>
    )
}

export default SavedNews
