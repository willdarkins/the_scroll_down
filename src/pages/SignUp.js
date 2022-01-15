import React from 'react'
import { Grid, Paper, Typography, TextField } from '@material-ui/core'
import Button from '@mui/material/Button';
import signupicon from '../images/signup_icon.png'
import styled from 'styled-components';

function SignUp() {
    const paperStyle = { padding: '30px 20px', width: 460, margin: '4.5rem auto' }
    const headerStyle = { margin: '.3 1rem' }
    return (
        <SignInStyles>
        <Grid>
            <Paper elevation={20} style={paperStyle} className={'paper'}>
                <Grid align='center'>
                    <img src={signupicon} alt='add user' />
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption'>Fill out the form, become a member and start saving news you care about</Typography>
                </Grid>
                <form>
                
                    <Grid container spacing={2}>
                    <Grid xs={12} item></Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField
                                type='input'
                                label='First Name'
                                placeholder='First Name'
                                variant='outlined'
                                fullWidth
                                required
                                InputLabelProps={{ style: { color: 'var(--font-dark)' }, }} />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField
                                type='input'
                                label='Last Name'
                                placeholder='Last Name'
                                variant='outlined'
                                fullWidth
                                required
                                InputLabelProps={{ style: { color: 'var(--font-dark)' }, }} />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                type='input'
                                label='Email'
                                placeholder='Email'
                                variant='outlined'
                                fullWidth
                                required
                                InputLabelProps={{ style: { color: 'var(--font-dark)' }, }} />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                type='input'
                                label='Password'
                                placeholder='Password'
                                variant='outlined'
                                fullWidth
                                required
                                InputLabelProps={{ style: { color: 'var(--font-dark)' }, }} />
                        </Grid>
                        <Grid xs={12} item>
                            <Button
                                type='submit' color='primary' variant='contained' fullWidth>Sign Up!</Button>
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

export default SignUp
