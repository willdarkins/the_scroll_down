
import React, {useContext} from 'react'
import styled from 'styled-components'
import NewsPicSample from '../images/NewsPic_Sample.jpeg'
import { newsStoreContext } from '../utils/store'

function SearchNews() {
    const {newsInput } = useContext(newsStoreContext)
    return (
        <SavedStyles>
            <h1 className='search-header'>Results for: {newsInput}</h1>
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
                            <button class="learn-more">
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                                <span class="button-text">Save</span>
                            </button>
                        </div>
                    </div>
                </div>
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
        padding: 40px 0;
        .news-card{
            padding: 1rem;
            min-width: 300px;
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
                    background: var(--blue);
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
      color: var(--blue);
      font-weight: 700;
      line-height: 1.6;
      text-align: center;
      text-transform: uppercase;
    }
  }
  &:hover {
    .circle {
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
`

export default SearchNews

