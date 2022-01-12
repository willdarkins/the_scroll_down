import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import SavedNews from './pages/SavedNews'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/savednews' component={SavedNews} />
        </Switch>
      </Router>
    </>
  )
}

export default App
