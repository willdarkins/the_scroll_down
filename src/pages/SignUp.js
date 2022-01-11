import React from 'react'
import { Grid, Paper, Typography, TextField } from '@material-ui/core'
import Button from '@mui/material/Button';
import signupicon from '../images/signup_icon.png'

function SignUp() {
    const paperStyle = { padding: '30px 20px', width: 400, margin: '4.5rem auto' }
    const headerStyle = { margin: '0 1rem' }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <img src={signupicon} alt='add user' />
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption'>Fill out the form, become a member and start saving news you care about</Typography>
                </Grid>
                <form className='formstyles'>

                <Grid container spacing={2}>
                            <Grid xs={12} sm={6} item>
                                <TextField
                                    type='input'
                                    label='First Name'
                                    placeholder='First Name'
                                    variant='outlined'
                                    fullWidth
                                    required/>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                            <TextField
                                    type='input'
                                    label='Last Name'
                                    placeholder='Last Name'
                                    variant='outlined'
                                    fullWidth
                                    required/>
                            </Grid>
                            <Grid xs={12} item>
                            <TextField
                                    type='input'
                                    label='Email'
                                    placeholder='Email'
                                    variant='outlined'
                                    fullWidth
                                    required/>
                            </Grid>
                            <Grid xs={12} item>
                            <TextField
                                    type='input'
                                    label='Password'
                                    placeholder='Password'
                                    variant='outlined'
                                    fullWidth
                                    required/>
                            </Grid>
                            <Grid xs={12} item>
                                <Button
                                    type='submit' color='primary' variant='contained' fullWidth>Sign Up!</Button>
                            </Grid>
                        </Grid>
                </form>
            </Paper>
        </Grid>
    )
}

export default SignUp
