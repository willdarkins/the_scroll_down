import React from 'react'
import { Grid, Paper, Typography, TextField } from '@material-ui/core'
import Button from '@mui/material/Button';
import signinicon from '../images/log-in.png'

function SignIn() {
  const paperStyles = { padding: 20, width: 460, margin: '4.5rem auto' }
  const headerStyle = { margin: '.3  1rem' }
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
              <Grid item></Grid>
              <Grid xs={12} item>
                <TextField label='Email' placeholder='Enter Email Address' variant='outlined' fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField label='Password' placeholder='Enter Password' variant='outlined' fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type='submit' color='primary' variant='contained' fullWidth>Sign In</Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  )
}

export default SignIn
