import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
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

    return (
        <div>
            <form onSubmit={handleSubmit}>
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

                <TextField
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    variant="outlined"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />

                <TextField
                    type="email"
                    placeholder="Email"
                    name="email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <TextField
                    type="tel"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    variant="outlined"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />

                <TextField
                    type="password"
                    placeholder="Pin"
                    name="pin"
                    variant="outlined"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    required
                />
                <Button type="button" color="primary" onClick={(e) => handleSubmit()}>
                    Create Account
                </Button>
            </form>

        </div>
    );
}

export default CreateAccount;