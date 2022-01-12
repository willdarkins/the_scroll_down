import React from 'react'
import styled from 'styled-components'

const SavedStyles = styled.div`
    .news-page{
        padding: 30px 170px;
        .search-grid{
            letter-spacing: -1px;
            font-size: 40px;
        }
        .news-grid{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 50px;
            padding: 40px 0;
        }
    }

`

function SavedNews() {
    return (
        <>
        <div className='news-page'>
        <h1 className='search-header'>Search Term Will Go Here</h1>
        <div className='news-grid'>

        </div>
        </div>
        </>
    )
}

export default SavedNews
