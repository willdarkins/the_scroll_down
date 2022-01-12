import React from 'react'
import { Grid, Paper, Typography, TextField } from '@material-ui/core'
import signinicon from '../images/log-in.png'

function SignIn() {
  const paperStyles = { padding: 20, width: 460, margin: '4.5rem auto' }
  const headerStyle = { margin: '0 1rem' }
  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyles}>
          <Grid align='center'>
            <img src={signinicon} alt='Sign In icon' />
            <h2 style={headerStyle}>Sign In</h2>
            <Typography variant='caption'>Provide your credentials, log in, save stories and get informed</Typography>
          </Grid>
          <form>
            <Grid container spacing={2}>

              <Grid xs={12} item>
              <TextField label='Username' placeholder='Enter Username' variant='outlined' fullWidth required/>
              </Grid>
              
            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  )
}

export default SignIn
