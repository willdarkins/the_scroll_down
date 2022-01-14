import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import SavedNews from './pages/SavedNews'
import SearchNews from './pages/SearchNews';
import { newsStoreContext } from './utils/store'

function App() {
  const [newsInput, setNewsInput] = useState('')
  const [savedNews, setSavedNews] = useState([])
  return (
    <>
      <Router>
        <newsStoreContext.Provider value={{ newsInput, setNewsInput, savedNews, setSavedNews }}>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/savednews' component={SavedNews} />
            <Route exact path='/searchnews' component={SearchNews} />
          </Switch>
        </newsStoreContext.Provider>
      </Router>
    </>
  )
}

export default App
