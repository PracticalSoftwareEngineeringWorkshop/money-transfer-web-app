import { CreateAccount, ListAccounts } from './components';

const App = () => {
  // <> </> is a React Fragment
  return (
    <>
      <ListAccounts />
      <CreateAccount />
    </>
  );
}

export default App;
