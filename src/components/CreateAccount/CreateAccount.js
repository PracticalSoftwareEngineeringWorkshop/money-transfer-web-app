import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import axios from 'axios';

const CreateAccount = ({ history }) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [pin, setPin] = useState("")

    const [submitForm, setSubmitForm] = useState(false);

    function handleSubmit() {
        setSubmitForm(true);
    }

    useEffect(() => {
        if (submitForm === true) {
            axios
                .post('http://localhost:8080/api/account/create',
                    {
                        'firstName': firstName,
                        'lastName': lastName,
                        'email': email,
                        'phoneNumber': phoneNumber,
                        'pin': pin
                    })
                .then((response) => {
                    const { data } = response
                    console.log(data);
                    alert(data.message);
                })
                .catch((error) => {
                    console.log(error);
                    alert(error.error);
                })
            history.push('/')
        }
    }, [email, firstName, lastName, phoneNumber, pin, submitForm, history])

    // https://material-ui.com/components/grid/#grid
    return (
        <form onSubmit={handleSubmit}>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <TextField
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        variant="outlined"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <TextField
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        variant="outlined"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <TextField
                        type="email"
                        placeholder="Email"
                        name="email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /></Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <TextField
                        type="tel"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        variant="outlined"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    /></Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <TextField
                        type="password"
                        placeholder="Pin"
                        name="pin"
                        variant="outlined"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        required
                    /></Grid>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <Button type="button" color="primary" onClick={(e) => handleSubmit()}>
                        Create Account
                </Button>
                </Grid>

            </Grid>
        </form>

    );
}

export default CreateAccount;