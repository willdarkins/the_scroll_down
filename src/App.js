import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'

const AppStyles = styled.div `
`

function App() {
  return (
    <AppStyles>
      <Navbar />
      <Homepage />
    </AppStyles>
  )
}

export default App
