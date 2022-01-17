import React, { useState  } from 'react'
import { Grid, Paper, Typography, TextField } from '@material-ui/core'
import Button from '@mui/material/Button';
import signupicon from '../images/signup_icon.png'
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import styled from 'styled-components';
import SignUpSuccess from '../components/SignUpSuccess'

function SignUp() {

    const [userFormData, setUserFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [addUser ] = useMutation(ADD_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...userFormData },
            });
            console.log(data);
            Auth.login(data.addUser.token);
        } catch (err) {
            console.error(err);
        }

        setUserFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        });
        <SignUpSuccess />
    };
    const headerStyle = { margin: '.3 1rem' }
    return (
        <SignInStyles>
        <Grid>
            <Paper elevation={20} style={{ maxWidth: 535, margin: '4.5rem auto' }} className={'paper'}>
                <Grid align='center'>
                    <img src={signupicon} alt='add user' />
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption'>Fill out the form, become a member and start saving news you care about</Typography>
                </Grid>
                <form onSubmit={handleFormSubmit}>
                    <Grid container spacing={2}>
                        <Grid item></Grid>
                        <Grid xs={12} item>
                            <TextField
                                type='input'
                                label='First Name'
                                name="firstName"
                                placeholder='First Name'
                                variant='outlined'
                                onChange={handleInputChange}
                                value={userFormData.firstName}
                                fullWidth
                                required
                                InputLabelProps={{ style: { color: 'var(--font-dark)' }, }} />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                type='input'
                                label='Last Name'
                                name="lastName"
                                placeholder='Last Name'
                                variant='outlined'
                                onChange={handleInputChange}
                                value={userFormData.lastName}
                                fullWidth
                                required
                                InputLabelProps={{ style: { color: 'var(--font-dark)' }, }} />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                type='input'
                                label='Email'
                                placeholder='Email'
                                name="email"
                                variant='outlined'
                                onChange={handleInputChange}
                                value={userFormData.email}
                                fullWidth
                                required
                                InputLabelProps={{ style: { color: 'var(--font-dark)' }, }} />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                type='input'
                                label='Password'
                                placeholder='Password'
                                name="password"
                                variant='outlined'
                                onChange={handleInputChange}
                                value={userFormData.password}
                                fullWidth
                                required
                                InputLabelProps={{ style: { color: 'var(--font-dark)' }, }} />
                        </Grid>
                        <Grid xs={12} item>
                            <Button type='submit' color='primary' variant='contained' fullWidth>Sign Up!</Button>
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
