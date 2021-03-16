import React from 'react';
import useAxios from 'axios-hooks';
import { useParams } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
import { Grid } from '@material-ui/core';
import { API_BASE_URL } from '../../utils/Constants';

const ShowAccount = () => {

    const { accountId } = useParams();

    const [{ data, loading, error }] = useAxios(`${API_BASE_URL}/account/${accountId}`);

    if (loading) return <p>Loading ...</p>

    if (error) return <p>Error!</p>

    return (
        <Grid container spacing={3} key={data.id}>
            <Grid item xs={12}>ID: {data.id}</Grid>
            <Grid item xs={12}>First Name: {data.firstName}</Grid>
            <Grid item xs={12}>Last Name: {data.lastName}</Grid>
            <Grid item xs={12}>Email: {data.email}</Grid>
            <Grid item xs={12}>Phone Number: {data.phoneNumber}</Grid>
            <Grid item xs={12}>PIN: {data.pin}</Grid>
            <Grid item xs={12}>Balance: <CurrencyFormat value={data.balance} displayType={'text'} thousandSeparator={true} prefix={'ETB '} /></Grid>
            <Grid item xs={12}>Is Verified?: {data.isVerified.toString()}</Grid>
        </Grid>
    );
}

export default ShowAccount;