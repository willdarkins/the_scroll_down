import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import signinicon from '../images/log-in.png'

function SignIn() {
  const paperStyles ={padding: 20, width: 460, margin: '4.5rem auto'}
  const headerStyle = { margin: '0 1rem' }
    return (
        <>
          <Grid>
            <Paper elevation={10} style={paperStyles}>
              <img src={signinicon} alt='Sign In icon' />
            <h2 style={headerStyle}></h2>Sign In
            </Paper>
          </Grid>
        </>
    )
}

export default SignIn
