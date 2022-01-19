import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import SavedNews from './pages/SavedNews'
import SearchNews from './pages/SearchNews';
import { newsStoreContext } from './utils/store'
import debounce from 'lodash.debounce';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  console.log(token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
console.log(authLink);
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [newsInput, setNewsInput] = useState('');
  // //const [savedNews, setSavedNews] = useState([]);
  const [newsResults, setnewsResults] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getNewsRequest = async (searchValue) => {
    const response = await fetch(`https://free-news.p.rapidapi.com/v1/search?q=${searchValue}&lang=en`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "free-news.p.rapidapi.com",
        "x-rapidapi-key": "47a0d92aa0mshe43772b8385d985p151404jsnb86a00526e7a"
      }
    })
    
    const responseJson = await response.json();
    console.log(responseJson)
    if (responseJson.articles) {
      setnewsResults(responseJson.articles)
    }
  }

  useEffect(() => {
  getNewsRequest(searchValue);
  })

  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          {/* <newsStoreContext.Provider value={{ newsInput, setNewsInput }, {newsResults, setnewsResults}}> */}
          <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
          
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/savednews' component={SavedNews} />
            <SearchNews newsResults={newsResults} searchValue={searchValue}/>
          </Switch>
          {/* </newsStoreContext.Provider> */}
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
