import React, { useState  } from 'react'
import { Grid, Paper, Typography, TextField } from '@material-ui/core'
import Button from '@mui/material/Button';
import signupicon from '../images/signup_icon.png'
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

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
    };

    const paperStyle = { padding: '30px 20px', width: 460, margin: '4.5rem auto' }
    const headerStyle = { margin: '.3 1rem' }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <img src={signupicon} alt='add user' />
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption'>Fill out the form, become a member and start saving news you care about</Typography>
                </Grid>
                <form onSubmit={handleFormSubmit}>

                    <Grid container spacing={2}>
                        <Grid xs={12} item></Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField
                                type='input'
                                label='First Name'
                                name="firstName"
                                placeholder='First Name'
                                variant='outlined'
                                onChange={handleInputChange}
                                value={userFormData.firstName}
                                fullWidth
                                required />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField
                                type='input'
                                label='Last Name'
                                name="lastName"
                                placeholder='Last Name'
                                variant='outlined'
                                onChange={handleInputChange}
                                value={userFormData.lastName}
                                fullWidth
                                required />
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
                                required />
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
                                required />
                        </Grid>
                        <Grid xs={12} item>
                            <Button type='submit' color='primary' variant='contained' fullWidth>Sign Up!</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    )
}

export default SignUp
