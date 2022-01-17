import React, { useState } from 'react'
import { Grid, Paper, Typography, TextField } from '@material-ui/core'
import Button from '@mui/material/Button';
import signinicon from '../images/log-in.png'
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function SignIn() {
  const headerStyle = { margin: '.3  1rem' }
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [login] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      console.log(data);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setUserFormData({
      email: '',
      password: '',
    });

    console.log("user is logged in: ", Auth.loggedIn());
  };

  return (
    <SignInStyles>
      <Grid>
        <Paper elevation={10} style={{ maxWidth: 535, margin: '4.5rem auto' }} className={'paper'}>
          <Grid align='center'>
            <img src={signinicon} alt='Sign In icon' />
            <h2 style={headerStyle}>Sign In</h2>
            <Typography variant='caption'>Provide your credentials, log in, save stories and get informed</Typography>
          </Grid>
          <form onSubmit={handleFormSubmit}>
            <Grid container spacing={2}>
              <Grid item></Grid>
              <Grid xs={12} item>
                <TextField label='Email'
                  placeholder='Enter Email Address'
                  variant='outlined'
                  name='email'
                  onChange={handleInputChange}
                  value={userFormData.email}
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: 'var(--font-dark)' }, }} />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label='Password'
                  placeholder='Enter Password'
                  variant='outlined'
                  name='password'
                  onChange={handleInputChange}
                  value={userFormData.password}
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: 'var(--font-dark)' }, }} />
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
@media screen and (max-width: 768px){
  .paper{
    width: 400px;
  }
@media screen and (max-width: 430px){
  .paper{
    width: 200px;
  }
} 
  
}
`

export default SignIn
