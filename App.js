import { Fragment } from 'react';
import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';
function App() {

  const isAuthencated = useSelector(state=> state.auth.isAuth);
  
  return (
    <Fragment>
        <Header/>
   {!isAuthencated &&<Auth/>}
   {isAuthencated && <UserProfile/>}
   <Counter />

    </Fragment>
  );
}

export default App;
