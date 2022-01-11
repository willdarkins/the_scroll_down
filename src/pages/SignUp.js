import React from 'react'
import styled from 'styled-components'
import { Grid, Paper, Typography, TextField } from '@material-ui/core'
import Button from '@mui/material/Button';
import signupicon from '../images/signup_icon.png'

const FormStyles = styled.div`
    .formstyles{
        margin: .5rem auto;
    }
    .btn{
        margin-top: 2rem;
    }
`
    


function SignUp() {
    const paperStyle = { padding: '30px 20px', width: 400, margin: '4.5rem auto' }
    const headerStyle = { margin: '0' }
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



                    {/* <Grid item spacing={5}>
                    <TextField fullWidth label ='First Name' placeholder='Enter your first name'/>
                    </Grid>
                    <Grid item spacing={3}>
                    <TextField fullWidth label ='Last Name' placeholder='Enter your last name'/>
                    </Grid>
                    <Grid item spacing={3}>
                    <TextField fullWidth label ='Email' placeholder='Enter your email address'/>
                    </Grid>
                    <Grid item spacing={3}>
                    <TextField fullWidth label ='Password' placeholder='Enter a password'/>
                    </Grid>
                    <Button className='btn' type='submit' variant='contained' color='primary'>Sign Up!</Button> */}
                </form>
            </Paper>
        </Grid>
    )
}

export default SignUp
