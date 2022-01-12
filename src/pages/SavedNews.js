import React from 'react'
import styled from 'styled-components'

const SavedStyles = styled.div`
    .news-grid{
        padding: 30px 170px;
        .search-grid{
            letter-spacing: -1px;
            font-size: 40px;
        }
    }

`

function SavedNews() {
    return (
        <>
        <div className='news-grid'>
        <h1 className='search-header'>Search Term Will Go Here</h1>
        </div>
        </>
    )
}

export default SavedNews
