import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import signupicon from '../images/signup_icon.png'

function SignUp() {
    const paperStyle = { padding: '30px 20px', width: 500, margin: '20px, auto' }
    const headerStyle = { margin: '0' }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <img src={signupicon} alt='add user' />
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption'>Fill out the form, become a member and start saving news you care about</Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default SignUp
