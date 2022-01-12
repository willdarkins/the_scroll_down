// This should hopefully get the logged in user info

export const getMe =(token) => {
    return fetch ('/api/users/me', {}
}


// Searching with the News API
// hard coded to sort by popularity, but also added a date that will hopefully narrow down by day the query was made
export const searchNewsAPI = (query) => {
    return fetch (`https://newsapi.org/v2/everything?q=${query}&${Date}&sortBy=popularity&apiKey=`)
}