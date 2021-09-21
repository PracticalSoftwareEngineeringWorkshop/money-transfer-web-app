import React, {useState, useEffect} from 'react';
import {TextField, Button, Grid} from '@material-ui/core';
import axios from 'axios';
import {API_BASE_URL} from '../../utils/Constants';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    grid: {
        flex: 1,
        padding: 20
    }
})

const CreateAccount = ({history}) => {

    const classes = useStyles();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState('1990-01-01');
    const [pin, setPin] = useState();
    const [confirmPin, setConfirmPin] = useState();

    const [isSubmitClicked, setIsSubmitClicked] = useState(false);

    function handleSubmit() {
        setIsSubmitClicked(true);
    }

    useEffect(() => {
        if (isSubmitClicked === true) {
            if (pin === confirmPin) {
                axios
                    .post(`${API_BASE_URL}/account/create`,
                        {
                            'firstName': firstName,
                            'lastName': lastName,
                            'email': email,
                            'phoneNumber': phoneNumber,
                            'pin': pin,
                            'dateOfBirth': dateOfBirth
                        })
                    .then((response) => {
                        const {data} = response
                        console.log(data);
                        alert(data.message);
                    })
                    .catch((error) => {
                        console.log(error);
                        alert(error.error);
                    })
                history.push('/')
            } else {
                alert("Pin and confirmed pin are not the same!");
                setIsSubmitClicked(false);
            }
        }
    }, [email, firstName, lastName, phoneNumber, dateOfBirth, pin, confirmPin, isSubmitClicked, history])

    // https://material-ui.com/components/grid/#grid
    return (
        <form onSubmit={handleSubmit}>

            <Grid container
                  spacing={3}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  className={classes.grid}>
                <Grid item xs={12}>
                    <TextField
                        type="text"
                        placeholder="First Name"
                        label="First Name"
                        name="firstName"
                        variant="outlined"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        type="text"
                        placeholder="Last Name"
                        label="Last Name"
                        name="lastName"
                        variant="outlined"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        type="email"
                        placeholder="Email"
                        label="Email"
                        name="email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /></Grid>
                <Grid item xs={12}>
                    <TextField
                        type="tel"
                        placeholder="Phone Number"
                        label="Phone Number"
                        name="phoneNumber"
                        variant="outlined"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    /></Grid>

                <Grid item xs={12}>
                    <TextField
                        type="date"
                        placeholder="Date of Birth"
                        label="Date of Birth"
                        name="dateOfBirth"
                        variant="outlined"
                        value={dateOfBirth}
                        onChange={(event) =>
                            setDateOfBirth(event.target.value)}
                        required
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        type="password"
                        placeholder="Pin"
                        label="Pin"
                        name="pin"
                        variant="outlined"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        required
                    /></Grid>

                <Grid item xs={12}>
                    <TextField
                        type="password"
                        placeholder="Confirm Pin"
                        label="Confirm Pin"
                        name="confirmPin"
                        variant="outlined"
                        value={confirmPin}
                        onChange={(e) => setConfirmPin(e.target.value)}
                        required
                    /></Grid>

                <Grid item xs={12}>
                    <Button type="button" color="primary" onClick={(e) => handleSubmit()} variant="contained">
                        Create Account
                    </Button>
                </Grid>

            </Grid>
        </form>

    );
}

export default CreateAccount;
