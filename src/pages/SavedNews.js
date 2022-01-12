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
        grid-gap: 50px;
        padding: 40px 0;
        .news-card{
            min-width: 300px;
            margin: auto;
            background: white;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
            height: 100%;
            text-decoration: none;
            color: var(--font-dark);
            .descriptor{
                margin-top: 2rem;
                display: flex;
                flex-direction: column;
                padding: 0px 25px 0 25px 0;
            }
            img{
                width: 100%;
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
                    <img src={NewsPicSample} />
                    <div className='descriptor'>

                    </div>
                </div>
            </div>
        </SavedStyles>
    )
}

export default SavedNews
