import React from 'react';
import useAxios from 'axios-hooks';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    CircularProgress,
    Checkbox
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CurrencyFormat from 'react-currency-format';
import { API_BASE_URL } from '../../utils/Constants';
import {Link} from "react-router-dom";
import {convertPinToStars} from "../../utils/helper";

const ListAccounts = () => {

    const [{ data, loading, error }, refetch] = useAxios(`${API_BASE_URL}/account/list`);

    if (loading) return <p><CircularProgress /></p>

    if (error) return <p>Error!</p>

    return (
        <div>
            <button onClick={refetch}>Refetch</button>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Date of Birth</TableCell>
                            <TableCell>PIN</TableCell>
                            <TableCell>Balance</TableCell>
                            <TableCell>Is Verified?</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        <Link to={`/show/${row.id}`}>{row.id}</Link>
                                    </TableCell>
                                    <TableCell>{row.firstName}</TableCell>
                                    <TableCell>{row.lastName}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.phoneNumber}</TableCell>
                                    <TableCell>{row.dateOfBirth}</TableCell>
                                    <TableCell>{convertPinToStars(row.pin)}</TableCell>
                                    <TableCell><CurrencyFormat value={row.balance} displayType={'text'} thousandSeparator={true} prefix={'ETB '} /></TableCell>
                                    <TableCell>
                                        <Checkbox disabled checked={row.isVerified} />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ListAccounts;
