import React from 'react'
import { Grid, Paper } from '@material-ui/core'

function SignIn() {
  const paperStyles ={padding: 20, width: 460, margin: '4.5rem auto'}
    return (
        <>
          <Grid>
            <Paper elevation={10} style={paperStyles}>
            Sign In
            </Paper>
          </Grid>
        </>
    )
}

export default SignIn
