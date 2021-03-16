import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CreateAccount, ListAccounts } from './components';

const App = () => {
  // <> </> is a React Fragment
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={(props) => <ListAccounts {...props} />} />

      <Route
        exact
        path='/create'
        render={(props) => <CreateAccount {...props} />} />
    </Switch>
  );
}

export default App;
