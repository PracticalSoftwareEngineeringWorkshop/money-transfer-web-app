import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {CreateAccount, ListAccounts, ShowAccount, Header, Footer} from './components';

const App = () => {
    // <> </> is a React Fragment
    return (
        <>
            <Header/>
            <Switch>
                <Route
                    exact
                    path='/'
                    render={(props) => <ListAccounts {...props} />}/>

                <Route
                    exact
                    path='/create'
                    render={(props) => <CreateAccount {...props} />}/>

                <Route
                    exact
                    path='/show/:accountId'
                    render={(props) => <ShowAccount {...props} />}/>
            </Switch>
            <Footer />
        </>
    );
}

export default App;
