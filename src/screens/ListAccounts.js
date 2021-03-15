import React from 'react';
import useAxios from 'axios-hooks';

export const ListAccounts = () => {

    const [{ data, loading, error }, refetch] = useAxios('http://localhost:8080/api/account/list');

    if (loading) return <p>Loading ...</p>

    if (error) return <p>Error!</p>

    return (
        <div>
            <button onClick={refetch}>Refetch</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}