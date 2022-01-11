import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'

const AppStyles = styled.div`
`

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <AppStyles>
        
        <Homepage />
      </AppStyles>
      </Router>
    </>
  )
}

export default App
