import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import SavedNews from './pages/SavedNews'
import SearchNews from './pages/SearchNews';
import { newsStoreContext } from './utils/store'

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
  const [newsInput, setNewsInput] = useState('');
  
  //const [savedNews, setSavedNews] = useState([]);
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <newsStoreContext.Provider value={{ newsInput, setNewsInput }}>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/signin' component={SignIn} />
              <Route exact path='/signup' component={SignUp} />
              <Route exact path='/savednews' component={SavedNews} />
              <Route exact path='/searchnews' component={SearchNews} />
            </Switch>
          </newsStoreContext.Provider>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
