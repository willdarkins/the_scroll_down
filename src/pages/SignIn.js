import React from 'react'
import { Grid, Paper, Typography, TextField } from '@material-ui/core'
import Button from '@mui/material/Button';
import signinicon from '../images/log-in.png'
import styled from 'styled-components';

function SignIn() {
  const paperStyles = { padding: 20, width: 460, margin: '4.5rem auto' }
  const headerStyle = { margin: '.3  1rem' }

  return (
    <SignInStyles>
      <Grid>
        <Paper elevation={10} style={paperStyles} className={'paper'}>
          <Grid align='center'>
            <img src={signinicon} alt='Sign In icon' />
            <h2 style={headerStyle}>Sign In</h2>
            <Typography variant='caption'>Provide your credentials, log in, save stories and get informed</Typography>
          </Grid>
          <form>
            <Grid container spacing={2}>
              <Grid item></Grid>
              <Grid xs={12} item>
                <TextField label='Email'
                placeholder='Enter Email Address'
                variant='outlined'
                fullWidth
                required
                InputLabelProps={{ style: { color: 'var(--font-dark)' }, }}/>
              </Grid>
              <Grid xs={12} item>
                <TextField
                label='Password'
                placeholder='Enter Password'
                variant='outlined'
                fullWidth
                required
                InputLabelProps={{ style: { color: 'var(--font-dark)' }, }}/>
              </Grid>
              <Grid xs={12} item>
                <Button
                  type='submit' color='primary' variant='contained' fullWidth>Sign In</Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </SignInStyles>
  )
}

const SignInStyles = styled.div`
.paper{
        color: var(--font-dark);
        background: var(--dark-card);
        box-shadow: 8px 8px 8px 8px rgba(0,0,0,0.2);
        transition: 0.3s;
        padding: 1.2rem;
        box-shadow: 5px 10px 18px #888888;
        cursor: pointer;
    }
    .paper:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

export default SignIn
