import React from 'react';
import useAxios from 'axios-hooks';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const ListAccounts = () => {

    const [{ data, loading, error }, refetch] = useAxios('http://localhost:8080/api/account/list');

    if (loading) return <p>Loading ...</p>

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
                                        {row.id}
                                    </TableCell>
                                    <TableCell>{row.firstName}</TableCell>
                                    <TableCell>{row.lastName}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.phoneNumber}</TableCell>
                                    <TableCell>{row.pin}</TableCell>
                                    <TableCell>{row.balance}</TableCell>
                                    <TableCell>{row.isVerified.toString()}</TableCell>
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